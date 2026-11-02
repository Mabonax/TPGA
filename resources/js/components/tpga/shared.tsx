import OptimizedImage from '@/components/tpga/optimized-image';
import { Link } from '@inertiajs/react';
import { ArrowRight, Mail, Quote, UserRound } from 'lucide-react';
import type { ReactNode } from 'react';

export function Cta({
    href = '/start-a-project',
    children = 'Start a Project',
    className = '',
}: {
    href?: string;
    children?: ReactNode;
    className?: string;
}) {
    return (
        <Link href={href} className={`tp-button ${className}`}>
            {children}
            <ArrowRight size={18} aria-hidden="true" />
        </Link>
    );
}

export function Eyebrow({ children }: { children: ReactNode }) {
    return <p className="tp-eyebrow">{children}</p>;
}

export function CreativeBanner() {
    return (
        <section className="creative-banner">
            <div>
                <Eyebrow>Let’s create together</Eyebrow>
                <h2>
                    Ready to bring your
                    <br />
                    ideas to life?
                </h2>
                <p>
                    Let’s discuss your next project and create
                    <br />
                    something amazing together.
                </p>
            </div>
            <OptimizedImage
                name={'office.jpeg'}
                alt="TonicPunkGraphics studio lounge and creative workspace"
            />
            <Cta>Explore More</Cta>
        </section>
    );
}

export function ClientLogos() {
    const logos = [
        'Joburg.svg',
        'geospace international.jpg',
        'AB4IR Logo .png',
        'DFA-Logo-–-White-Text.webp',
        'DSAC-LOGO_2020-scaled.jpg',
        'GBI-Logo_Original.png',
    ];
    return (
        <section
            className="client-logos"
            aria-label="Brands featured in our supplied portfolio"
        >
            {logos.map((logo) => (
                <OptimizedImage
                    key={logo}
                    name={`clients/${logo}`}
                    sizes="130px"
                    alt={
                        logo === 'Joburg.svg'
                            ? 'City of Johannesburg'
                            : logo.split('.')[0].replaceAll('-', ' ')
                    }
                    loading="lazy"
                />
            ))}
        </section>
    );
}

export function PromiseBar() {
    return (
        <div className="promise-bar">
            <Mail aria-hidden="true" />
            <div>
                <h3>Our Promise</h3>
                <p>
                    We don’t just deliver projects, we build relationships and
                    creative experiences that help your brand grow and thrive.
                </p>
            </div>
            <Cta>Let’s Work Together</Cta>
        </div>
    );
}

export function CustomerVoices() {
    return (
        <section className="customer-voices">
            <p className="voices-intro">
                Customer reviews are a valuable source
                <br />
                of information for both business and customers.
            </p>
            <h2>
                Customer <span>Voices:</span>
                <br />
                Hear What <em>They Say!</em>
            </h2>
            <div className="voices-avatars" aria-hidden="true">
                {Array.from({ length: 6 }, (_, i) => (
                    <span key={i}>
                        <UserRound />
                    </span>
                ))}
            </div>
            <figure>
                <Quote size={30} aria-hidden="true" />
                <figcaption>Refilwe Ramavhoya</figcaption>
                <blockquote>
                    This creative agency stands out with their exceptional
                    talent and expertise.
                    <br />
                    Their ability to think outside of the box and bring unique
                    ideas to life is truly impressive.
                    <br />
                    With meticulous attention to detail, they consistently
                    deliver visually stunning and impactful work.
                </blockquote>
            </figure>
        </section>
    );
}
