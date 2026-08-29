# Gabana's House — Landing Page

Site da Gabana's House, casa de temporada em Caldas Novas (GO). O objetivo é
converter visita em conversa no WhatsApp: reserva direta com o anfitrião, sem
taxa de plataforma.

Online: https://gabanashousetemporada.vercel.app

## Stack

| Camada     | Tecnologia                                    |
| ---------- | --------------------------------------------- |
| UI         | React 19 (metadata nativo, sem react-helmet)  |
| Build      | Vite 8 (Rolldown)                             |
| Estilo     | Tailwind CSS 4 — configuração CSS-first       |
| Animação   | motion 13 (`motion/react`)                    |
| Rotas      | React Router 7                                |
| Ícones     | react-icons 5                                 |
| Lightbox   | yet-another-react-lightbox 3                  |
| Lint       | ESLint 10 (flat config) + react-hooks         |
| Deploy     | Vercel                                        |

Requer Node 22.12 ou superior.

## Rodando

```bash
npm install
npm run dev      # servidor local
npm run build    # build de produção em dist/
npm run preview  # serve o build
npm run lint     # ESLint
npm run doctor   # auditoria React Doctor
```

## Onde mexer no conteúdo

**Tudo que é texto, número, link, foto e regra da casa está em
`src/data/site.js`.** Alterou lá, mudou no site inteiro — não é preciso abrir
componente nenhum. As linhas marcadas com `// AJUSTAR` dependem de confirmação
do anfitrião (número de banheiros, mínimo de noites, enxoval, distâncias).

Preços não aparecem no site por decisão de estratégia: toda consulta de valor
vai para o WhatsApp.

## Estrutura

```
src/
  data/site.js          conteúdo central (textos, links, fotos, regras, tour)
  lib/motion.js         presets de animação compartilhados
  lib/useMediaQuery.js  hook de media query (troca desktop/mobile)
  components/           seções e elementos de UI
  pages/                Home, Galeria, Reservas, Promo, 404
public/img/             fotos em WebP + og-image.jpg + favicon
```

### Peças interativas

| Componente               | O que faz                                                                 |
| ------------------------ | ------------------------------------------------------------------------- |
| `Preloader`              | Abertura na primeira visita da sessão. Some com `prefers-reduced-motion`. |
| `PageTransition`         | Cortina + fade na troca de rota.                                           |
| `HorizontalGallery`      | Carrossel infinito que anda sozinho. Pausa no hover, arraste assume o controle (com inércia ao soltar) e há botão de pausa. Velocidade em `SPEED`, no topo do arquivo. |
| `HouseTour`              | Tour com pontos clicáveis sobre fotos reais.                              |
| `TheHouse`               | Índice de ambientes com visor de foto que segue o hover.                  |
| `LiquidButton`           | Botão de vidro líquido: relevo 3D, menisco de luz no topo e halo que segue o cursor. Variantes `gold`, `glass`, `whatsapp`. |
| `PageHeader`             | Cabeçalho padrão de Galeria, Reservas e Privacidade — mesma métrica.       |
| `PrefsNotice`            | Aviso de cookies (LGPD). Nome neutro de propósito, ver o aviso abaixo.     |
| `BuiltBy`                | Bloco de assinatura da Optima Sistemas, no fim do rodapé.                  |

### Tour interativo

Os pontos ficam em `TOUR`, dentro de `src/data/site.js`. Cada ponto tem `x` e `y`
em **porcentagem da imagem** (0–100), contados do canto superior esquerdo. Para
mover um ponto basta mudar esses números — nada de mexer em CSS.

Para estender o tour ao resto da casa (quartos, fachada) é preciso uma foto
aérea, uma panorâmica ou a planta baixa. Com uma dessas, é só adicionar outra
cena no mesmo formato.

## Paleta

Definida em `@theme`, no topo do `src/index.css`:

| Token                | Uso                                          |
| -------------------- | -------------------------------------------- |
| `gabana-deep/bg`     | Fundos escuros, azul-petróleo quente         |
| `gabana-gold`        | Acento sobre fundo escuro (champanhe)        |
| `gabana-bronze`      | Acento sobre fundo claro — **use este na seção areia**, o dourado não passa em contraste lá |
| `gabana-sand/ink`    | Seção clara e seu texto                      |
| `gabana-cream/muted` | Texto sobre escuro                           |

Todas as combinações usadas passam em contraste WCAG AA.

## Fotos

As imagens ficam em `public/img` em WebP (~70 KB cada, contra ~800 KB dos PNGs
originais). Para trocar ou adicionar:

```bash
convert foto.png -strip -quality 82 -define webp:method=6 public/img/nome.webp
```

Depois registre o arquivo em `GALLERY` (e, se for o caso, em `ROOMS` ou
`GALLERY_PREVIEW`) no `src/data/site.js`, sempre com um `alt` descritivo.

## SEO

- `index.html` traz as metatags padrão e o JSON-LD de `VacationRental`.
- Cada página define título, descrição, canonical e robots via `src/components/Seo.jsx`.
- O FAQ publica `FAQPage` em JSON-LD automaticamente a partir de `FAQS`.
- `public/robots.txt` e `public/sitemap.xml` — atualize o sitemap ao criar rotas.
- `/promo` e o 404 saem como `noindex, nofollow`.

### Por que existem tags repetidas no index.html

As metatags de `description`, `robots`, `canonical`, `og:` e `twitter:` aparecem
duas vezes: uma no `index.html` (marcada com `data-default`) e outra vinda do
componente `Seo`. Isso é de propósito — WhatsApp, Facebook e Telegram **não
rodam JavaScript**, então o preview do link sai do HTML estático. O `Seo` remove
as `data-default` assim que a página monta, para o Google não ver `canonical`
duplicado. Se criar uma metatag nova no `index.html` que o `Seo` também gere,
marque com `data-default`.

## LGPD e cookies

- **Consent Mode v2** no `index.html`, antes do gtag carregar: sem escolha
  salva, `ad_storage`, `ad_user_data`, `ad_personalization` e `analytics_storage`
  entram como `denied` e o Google Ads roda sem cookies.
- `src/lib/prefs.js` guarda a escolha em `localStorage` (`gh:prefs`) e dispara o
  `consent update`. Mudou o que é coletado? Suba `PREFS_VERSION` e todo mundo é
  perguntado de novo.
- `PrefsNotice.jsx` é o aviso; o link "Cookies" no rodapé reabre.

> **Não renomeie esses dois arquivos para algo com "cookie" ou "consent".**
> Bloqueadores de anúncio derrubam qualquer URL que case com `cookieconsent`,
> `cookie-banner`, `cookie-notice` e afins. Em produção o bundler junta tudo num
> arquivo só e passa batido, mas em desenvolvimento o Vite serve cada módulo pela
> própria URL — e o site quebra com `ERR_BLOCKED_BY_CLIENT`.
- O mapa do Google só carrega depois do consentimento ou a pedido — o embed
  grava cookies.
- `/privacidade` tem a política. O único canal de contato é o WhatsApp de
  `SITE.phoneDisplay` — sem e-mail nem CNPJ, por opção. **Revise com advogado**
  antes de publicar.

## Assinatura da Optima

O bloco do rodapé sai de `OPTIMA`, em `src/data/site.js`: nome, frase de
apresentação, serviços, site, Instagram e WhatsApp. Mudou algo? Um arquivo só.
A assinatura não cita cidade, de propósito: a Optima atende em todo o país e o
JSON-LD marca `areaServed: "BR"` em vez de endereço local.

O CTA usa `optimaContact()`, que monta o link do WhatsApp com a mensagem já
escrita. Se `OPTIMA.whatsapp` for esvaziado, ele cai para o site em vez de
gerar link quebrado.

A autoria também vai nos dados estruturados: há um segundo JSON-LD no
`index.html`, do tipo `WebSite`, com `creator` apontando para a Optima
(`optimasistemas.com`, telefone e `sameAs` com site e Instagram). É o que liga a
agência a este projeto aos olhos de buscador.

Para reaproveitar em outro cliente, copie `src/components/BuiltBy.jsx` e o bloco
`OPTIMA` do `site.js`.

---

Desenvolvido por [Optima Sistemas](https://www.instagram.com/optima_sistemas).
