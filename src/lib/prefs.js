/**
 * Preferência de rastreamento do visitante (LGPD).
 * A escolha vive no localStorage e é espelhada no Consent Mode do Google.
 * O padrão negado já é aplicado no index.html, antes do gtag carregar —
 * aqui só tratamos a mudança de ideia.
 *
 * ATENÇÃO AO NOMEAR: bloqueadores de anúncio derrubam qualquer arquivo com
 * "cookie" ou "consent" no caminho (ERR_BLOCKED_BY_CLIENT). Por isso este
 * arquivo se chama prefs.js e o componente, PrefsNotice.jsx. Não renomeie de
 * volta — em dev o Vite serve cada módulo pela URL e o site quebra.
 */
export const PREFS_KEY = 'gh:prefs';
export const PREFS_VERSION = 1;

export const readPrefs = () => {
  try {
    const raw = JSON.parse(localStorage.getItem(PREFS_KEY) || 'null');
    return raw && raw.version === PREFS_VERSION ? raw : null;
  } catch {
    return null; // aba anônima ou storage bloqueado
  }
};

export const writePrefs = (analytics) => {
  const value = {
    version: PREFS_VERSION,
    analytics,
    date: new Date().toISOString(),
  };

  try {
    localStorage.setItem(PREFS_KEY, JSON.stringify(value));
  } catch {
    /* sem storage: vale só para esta visita */
  }

  const state = analytics ? 'granted' : 'denied';
  window.gtag?.('consent', 'update', {
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    analytics_storage: state,
  });
  window.gtag?.('set', 'ads_data_redaction', !analytics);

  return value;
};

/** Abre o aviso de novo — usado pelo link "Cookies" no rodapé. */
export const OPEN_PREFS_EVENT = 'gh:open-prefs';
export const openPrefs = () => window.dispatchEvent(new Event(OPEN_PREFS_EVENT));
