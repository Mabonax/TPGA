import OptimizedImage from '@/components/tpga/optimized-image';
import { Head, Link } from '@inertiajs/react';
import {
    ArrowLeft,
    ArrowRight,
    Lightbulb,
    Users,
    WandSparkles,
} from 'lucide-react';
import {
    ClientLogos,
    Cta,
    Eyebrow,
    PromiseBar,
} from '@/components/tpga/shared';
import { services } from '@/lib/tpga';

export default function Services() {
    return (
        <>
            <Head title="Our Services" />
            <div className="services-stage">
                <aside className="services-aside">
                    <Link href="/studio" className="back-link">
                        <ArrowLeft size={19} />
                        Back to Overview
                    </Link>
                    <Eyebrow>About our studio</Eyebrow>
                    <h1>
                        We turn ideas
                        <br />
                        into <span>impact.</span>
                    </h1>
                    <p>
                        At TonicPunkGraphics, creativity meets strategy. We help
                        brands and businesses communicate with purpose through
                        innovative design and cutting-edge digital solutions.
                    </p>
                    <div className="service-values">
                        {[
                            [
                                Lightbulb,
                                'Creative Excellence',
                                'Original ideas, bold thinking and premium design.',
                            ],
                            [
                                WandSparkles,
                                'Strategic Approach',
                                'We combine creativity with strategy to deliver measurable results.',
                            ],
                            [
                                Users,
                                'Collaborative Partnership',
                                'We work with you, not just for you. Your vision is our expertise.',
                            ],
                        ].map(([Icon, title, text]) => {
                            const ValueIcon = Icon as typeof Lightbulb;
                            return (
                                <div key={String(title)}>
                                    <ValueIcon />
                                    <p>
                                        <strong>{String(title)}</strong>
                                        <small>{String(text)}</small>
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <OptimizedImage
                        name={'emblem-render.png'}
                        alt="Three-dimensional interpretation of our creative studio emblem"
                        loading="lazy"
                    />
                </aside>
                <section className="services-content">
                    <Eyebrow>Our services</Eyebrow>
                    <p>
                        We offer end-to-end creative and digital solutions that
                        help brands stand out,
                        <br />
                        connect with their audience and grow in the digital age.
                    </p>
                    <div className="service-grid">
                        {services.map((s, i) => (
                            <details
                                key={s.name}
                                className={`service-card tone-${i % 4}`}
                            >
                                <summary>
                                    <span className="service-icon">
                                        <OptimizedImage
                                            name={`icons/${s.icon}.svg`}
                                            alt=""
                                        />
                                    </span>
                                    <h2>{s.name}</h2>
                                    <p>{s.text}</p>
                                    <span className="service-more">
                                        Explore service <ArrowRight size={13} />
                                    </span>
                                </summary>
                                <div className="service-detail">
                                    <p>{s.detail}</p>
                                    <Link
                                        href={`/start-a-project?service=${encodeURIComponent(s.name)}`}
                                    >
                                        Discuss your project{' '}
                                        <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </details>
                        ))}
                    </div>
                    <PromiseBar />
                </section>
            </div>
            <ClientLogos />
            <section className="tp-section service-bottom">
                <h2>Find your creative direction.</h2>
                <Cta href="/packages">Explore Services & Packages</Cta>
            </section>
        </>
    );
}
