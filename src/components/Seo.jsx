import { useEffect } from 'react';
import { SITE } from '../data/site';

/**
 * React 19 iça <title>/<meta>/<link> para o <head> sozinho — por isso não
 * usamos mais react-helmet-async.
 *
 * O que ele NÃO faz é substituir tags iguais: as do index.html continuariam
 * lá junto com as nossas, e o resultado é description e canonical duplicados
 * (e um 404 marcado como "index"). As do HTML estático existem porque
 * WhatsApp e Facebook não rodam JS — o preview do link sai delas. Então
 * mantemos as duas e removemos as estáticas assim que a página monta.
 */
const stripDefaults = () => {
  document.head
    .querySelectorAll('meta[data-default], link[data-default]')
    .forEach((el) => el.remove());
};

const Seo = ({ title, description, path = '/', noindex = false, image }) => {
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} | ${SITE.tagline}`;
  const url = `${SITE.url}${path}`;
  const ogImage = `${SITE.url}${image || SITE.ogImage}`;

  useEffect(stripDefaults, []);

  return (
    <>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />
      <meta
        name="robots"
        content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}
      />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />
    </>
  );
};

export default Seo;
