import OptimizedImage from '@/components/tpga/optimized-image';
import { Link, usePage } from '@inertiajs/react';
import {
    ArrowRight,
    ArrowUp,
    ChevronDown,
    Mail,
    MapPin,
    Menu,
    Phone,
    Search,
    X,
} from 'lucide-react';
import { useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Cta } from '@/components/tpga/shared';
import Seo from '@/components/tpga/seo';
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { studioEmail } from '@/lib/tpga';

const links = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/insights' },
    { label: 'Contact', href: '/contact' },
];
const pages = [
    { label: 'Discover Our Studio', href: '/studio' },
    { label: 'About Agency', href: '/about' },
    { label: 'Meet the Team', href: '/team' },
    { label: 'Services & Packages', href: '/packages' },
    { label: 'Customer Voices', href: '/testimonials' },
];
const searchable = [
    ...links,
    ...pages,
    { label: 'Sign in', href: '/login' },
    { label: 'Create an account', href: '/register' },
    { label: 'Start a Project', href: '/start-a-project' },
];

export default function PublicLayout({ children }: { children: ReactNode }) {
    const { url, props } = usePage();
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [query, setQuery] = useState('');
    const searchTrigger = useRef<HTMLButtonElement>(null);
    const auth = props.auth as { user?: { name: string } | null } | undefined;
    return (
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <Seo />
            <div className="tp-site">
                <a className="skip-link" href="#main">
                    Skip to content
                </a>
                <header className="tp-header">
                    <Link
                        href="/"
                        className="tp-logo"
                        aria-label="TonicPunkGraphics home"
                    >
                        <OptimizedImage
                            name={'logo-landscape.png'}
                            loading="eager"
                            sizes="240px"
                            alt="TonicPunkGraphics — a passion and art of designs"
                        />
                    </Link>
                    <nav className="desktop-nav" aria-label="Main navigation">
                        {links.slice(0, 3).map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={
                                    url.split('?')[0] === link.href
                                        ? 'active'
                                        : ''
                                }
                                aria-current={
                                    url.split('?')[0] === link.href
                                        ? 'page'
                                        : undefined
                                }
                            >
                                {link.label}
                            </Link>
                        ))}
                        <details className="pages-dropdown">
                            <summary
                                className={
                                    pages.some((p) => p.href === url)
                                        ? 'active'
                                        : ''
                                }
                            >
                                Pages <ChevronDown size={13} />
                            </summary>
                            <div>
                                {pages.map((p) => (
                                    <Link
                                        key={p.href}
                                        href={p.href}
                                        onClick={(event) =>
                                            event.currentTarget
                                                .closest('details')
                                                ?.removeAttribute('open')
                                        }
                                    >
                                        {p.label}
                                    </Link>
                                ))}
                            </div>
                        </details>
                        {links.slice(3).map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={
                                    url.startsWith(link.href) ? 'active' : ''
                                }
                                aria-current={
                                    url.startsWith(link.href)
                                        ? 'page'
                                        : undefined
                                }
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="header-actions">
                        <button
                            type="button"
                            className="icon-button"
                            ref={searchTrigger}
                            aria-label="Search website"
                            aria-expanded={searchOpen}
                            onClick={() => {
                                setSearchOpen(!searchOpen);
                                setMenuOpen(false);
                            }}
                        >
                            {searchOpen ? <X /> : <Search />}
                        </button>
                        <Link href="/start-a-project" className="header-cta">
                            <Mail size={24} /> <span>Start A Project</span>
                        </Link>
                        <SheetTrigger asChild>
                            <button
                                type="button"
                                className="icon-button menu-toggle"
                                aria-label={
                                    menuOpen
                                        ? 'Close navigation'
                                        : 'Open navigation'
                                }
                                aria-expanded={menuOpen}
                                onClick={() => {
                                    setSearchOpen(false);
                                }}
                            >
                                {menuOpen ? (
                                    <X size={32} />
                                ) : (
                                    <Menu size={36} />
                                )}
                            </button>
                        </SheetTrigger>
                    </div>
                </header>
                <SheetContent
                    className="tp-site tp-menu-sheet"
                    aria-describedby={undefined}
                >
                    <nav
                        id="site-menu"
                        className="site-menu"
                        aria-label="Expanded navigation"
                    >
                        <SheetTitle className="tp-eyebrow">
                            Explore the agency
                        </SheetTitle>
                        {searchable
                            .filter(
                                (p) =>
                                    !['Sign in', 'Create an account'].includes(
                                        p.label,
                                    ),
                            )
                            .map((p) => (
                                <Link
                                    key={`${p.label}-${p.href}`}
                                    href={p.href}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {p.label}
                                    <ArrowRight size={18} />
                                </Link>
                            ))}
                        <div className="menu-auth">
                            {auth?.user ? (
                                <Link href="/dashboard">Studio dashboard</Link>
                            ) : (
                                <>
                                    <Link
                                        href="/login"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        Sign in
                                    </Link>
                                    <Link
                                        href="/register"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        Create an account
                                    </Link>
                                </>
                            )}
                        </div>
                    </nav>
                </SheetContent>
                {searchOpen && (
                    <section className="site-search" aria-label="Search pages">
                        <label htmlFor="site-search">
                            What are you looking for?
                        </label>
                        <input
                            id="site-search"
                            type="search"
                            value={query}
                            autoFocus
                            placeholder="Try services, studio, portfolio…"
                            onChange={(event) => setQuery(event.target.value)}
                            onKeyDown={(event) => {
                                if (event.key === 'Escape') {
                                    setSearchOpen(false);
                                    searchTrigger.current?.focus();
                                }
                            }}
                        />
                        <div aria-live="polite">
                            {searchable
                                .filter((p) =>
                                    p.label
                                        .toLowerCase()
                                        .includes(query.toLowerCase()),
                                )
                                .map((p) => (
                                    <Link
                                        href={p.href}
                                        key={p.href}
                                        onClick={() => {
                                            setSearchOpen(false);
                                            setQuery('');
                                        }}
                                    >
                                        {p.label}
                                        <ArrowRight size={17} />
                                    </Link>
                                ))}
                            {!searchable.some((p) =>
                                p.label
                                    .toLowerCase()
                                    .includes(query.toLowerCase()),
                            ) && <p>No matching pages. Try another search.</p>}
                        </div>
                    </section>
                )}
                <main id="main" tabIndex={-1}>
                    {children}
                </main>
                <footer className="tp-footer">
                    <section className="footer-stats">
                        <p className="tp-eyebrow">
                            Our creative journey in numbers
                        </p>
                        <h2>Building Brands Through Measurable Results</h2>
                        <div>
                            {[
                                ['12+', 'Years experience'],
                                ['250+', 'Projects delivered'],
                                ['90+', 'Happy clients'],
                                ['06+', 'Industries served'],
                            ].map(([number, label]) => (
                                <p key={label}>
                                    <strong>{number}</strong>
                                    <span>{label}</span>
                                </p>
                            ))}
                        </div>
                    </section>
                    <div className="footer-main">
                        <div className="footer-contact">
                            <OptimizedImage
                                name={'logo-landscape.png'}
                                alt="TonicPunkGraphics"
                                loading="lazy"
                            />
                            <h3>
                                Need any support? Have a project on your mind?{' '}
                                <Link href="/contact">Let’s Talk.</Link>
                            </h3>
                            <a href={`mailto:${studioEmail}`}>
                                <Mail size={16} />
                                {studioEmail}
                            </a>
                            <a href="tel:+27680712993">
                                <Phone size={16} />
                                +27 68 071 2993
                            </a>
                            <p>
                                <MapPin size={16} />
                                Pretoria, South Africa
                            </p>
                        </div>
                        <div>
                            <h3>Quick Links</h3>
                            {pages.map((p) => (
                                <Link href={p.href} key={p.href}>
                                    {p.label}
                                </Link>
                            ))}
                            <Link href="/insights">Latest News & Blog</Link>
                            <Link href="/login">Studio Sign In</Link>
                        </div>
                        <div>
                            <h3>Our Services</h3>
                            {[
                                'Branding & Creative Design',
                                'Digital Experience & Development',
                                'Digital Marketing & Growth',
                                'Emerging Technologies & Innovation',
                                'Architectural & Spatial Design',
                                'Aerial Media Solutions',
                                'Events, Production & Experiences',
                            ].map((s) => (
                                <Link href="/services" key={s}>
                                    {s}
                                </Link>
                            ))}
                        </div>
                        <div>
                            <h3>Let’s Create Together</h3>
                            <p>Design. Innovation. Culture. Technology.</p>
                            <p>
                                Bring us your ambition. We’ll help find the
                                creative direction.
                            </p>
                            <Cta>Get a Quote</Cta>
                            <Link href="/insights">
                                Explore our latest stories{' '}
                                <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <span>
                            © {new Date().getFullYear()} TonicPunkGraphics. All
                            rights reserved.
                        </span>
                        <Link href="/contact">Contact the studio</Link>
                        <a href="#main">
                            Back to top <ArrowUp size={15} />
                        </a>
                    </div>
                </footer>
            </div>
        </Sheet>
    );
}
