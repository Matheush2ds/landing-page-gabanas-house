import { Link } from 'react-router-dom';
import { FaWhatsapp, FaAirbnb, FaCalendarCheck, FaInstagram } from 'react-icons/fa6';
import { LINKS, SITE } from '../data/site';
import { openPrefs } from '../lib/prefs';
import BuiltBy from './BuiltBy';

const CHANNELS = [
  { href: LINKS.whatsapp, icon: FaWhatsapp, title: 'WhatsApp', note: 'Reserva direta, sem taxa', primary: true },
  { href: LINKS.airbnb, icon: FaAirbnb, title: 'Airbnb', note: 'Anúncio verificado' },
  { href: LINKS.booking, icon: FaCalendarCheck, title: 'Booking.com', note: 'Nota 4,9' },
];

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-gabana-border bg-gabana-deep pb-10 pt-24 lg:pt-32">
    <div
      className="pointer-events-none absolute -top-64 left-1/2 h-96 w-[52rem] -translate-x-1/2 rounded-full bg-gabana-gold/6 blur-[140px]"
      aria-hidden
    />

    <div className="relative z-10 mx-auto max-w-[92rem] px-6 lg:px-14">
      <div className="grid gap-14 border-b border-gabana-border pb-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <p className="font-serif text-4xl font-light tracking-tight text-gabana-cream lg:text-5xl">
            Gabana<span className="text-gabana-gold">’</span>s
            <span className="ml-2 italic text-gabana-gold">House</span>
          </p>
          <p className="mt-6 max-w-sm text-[1.02rem] leading-[1.75] text-gabana-muted">
            Casa de temporada para até 15 pessoas no Itaguaí 1, Caldas Novas.
            Administrada pela família, alugada direto com quem cuida dela.
          </p>

          <address className="mt-8 not-italic text-sm leading-relaxed text-gabana-muted">
            {SITE.address.street}
            <br />
            {SITE.address.district}, {SITE.address.city} / {SITE.address.state}
            <br />
            <a
              href={`tel:${SITE.phoneIntl}`}
              className="mt-2 inline-block text-gabana-cream transition-colors hover:text-gabana-gold"
            >
              {SITE.phoneDisplay}
            </a>
          </address>

          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noreferrer"
            className="group mt-8 inline-flex items-center gap-4 text-gabana-cream transition-colors duration-500 hover:text-gabana-gold"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gabana-gold/30 transition-colors duration-500 group-hover:border-gabana-gold">
              <FaInstagram aria-hidden className="text-lg" />
            </span>
            <span className="eyebrow">@gabanas_house</span>
          </a>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <p className="eyebrow mb-6 text-gabana-muted">Onde reservar</p>
          <ul className="grid gap-3 sm:grid-cols-3">
            {CHANNELS.map(({ href, icon: Icon, title, note, primary }) => (
              <li key={title}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex h-full flex-col items-center justify-center gap-3 border p-7 text-center transition-colors duration-500 ${
                    primary
                      ? 'border-gabana-gold/40 bg-gabana-bg text-gabana-cream hover:bg-gabana-gold hover:text-gabana-bg'
                      : 'border-gabana-border bg-gabana-bg text-gabana-muted hover:border-gabana-gold/40 hover:text-gabana-cream'
                  }`}
                >
                  <Icon aria-hidden className="text-2xl" />
                  <span className="eyebrow">{title}</span>
                  <span className="text-[0.7rem] leading-tight opacity-70">{note}</span>
                </a>
              </li>
            ))}
          </ul>

          <nav aria-label="Rodapé" className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: 'A casa', to: '/' },
              { label: 'Galeria', to: '/galeria' },
              { label: 'Reservas', to: '/reservas' },
              { label: 'Privacidade', to: '/privacidade' },
            ].map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="eyebrow text-gabana-muted transition-colors duration-300 hover:text-gabana-cream"
              >
                {label}
              </Link>
            ))}
            <button
              type="button"
              onClick={openPrefs}
              className="eyebrow text-gabana-muted transition-colors duration-300 hover:text-gabana-cream"
            >
              Cookies
            </button>
          </nav>
        </div>
      </div>

      <BuiltBy />

      <div className="flex flex-col items-center justify-between gap-5 pt-9 md:flex-row">
        <p className="eyebrow text-gabana-muted/60">
          © {new Date().getFullYear()} {SITE.name}
        </p>
        <p className="eyebrow text-gabana-muted/60">Caldas Novas, Goiás</p>
      </div>
    </div>
  </footer>
);

export default Footer;
