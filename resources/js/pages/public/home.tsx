import OptimizedImage from '@/components/tpga/optimized-image';
import { Head, Link } from '@inertiajs/react';
import {
    ArrowDown,
    ArrowRight,
    BadgeCheck,
    Lightbulb,
    Play,
    Users,
} from 'lucide-react';
import {
    ClientLogos,
    Cta,
    CustomerVoices,
    Eyebrow,
} from '@/components/tpga/shared';
import { projects } from '@/lib/tpga';

export default function Home() {
    return (
        <>
            <Head title="Creative Studio & Digital Agency">
                <meta
                    head-key="description"
                    name="description"
                    content="TonicPunkGraphics is a multidisciplinary creative studio combining strategy, design, technology and digital innovation. Based in Pretoria, creating beyond borders."
                />
            </Head>
            <div className="home-reception">
                <OptimizedImage
                    name={'reception.jpg'}
                    loading="eager"
                    sizes="100vw"
                    alt="TonicPunkGraphics Agency reception with our geometric blue and yellow feature wall"
                    fetchPriority="high"
                />
            </div>
            <section className="home-hero">
                <OptimizedImage
                    className="hero-emblem"
                    name={'emblem.png'}
                    alt=""
                    aria-hidden="true"
                />
                <div className="home-copy">
                    <p className="studio-pill">
                        <span />
                        Creative Studio &nbsp; Est.2012
                    </p>
                    <h1>
                        Innovating
                        <br />
                        towards a<br />
                        <em>better world.</em>
                    </h1>
                    <p className="hero-description">
                        Step into our realm of infinite imagination and
                        limitless creativity.
                        <br className="wide-break" /> Join us on an
                        extraordinary adventure where dreams take shape
                        <br className="wide-break" /> and become vibrant
                        realities.
                    </p>
                    <div className="hero-actions">
                        <Link href="/services" className="tp-button">
                            <Lightbulb size={25} />
                            What We Do
                        </Link>
                        <Link href="/portfolio" className="video-link">
                            <span>
                                <Play size={25} />
                            </span>
                            View Works
                        </Link>
                    </div>
                    <div className="hero-stats">
                        {[
                            [BadgeCheck, '256+', 'Projects delivered'],
                            [Lightbulb, '12+', 'Creative services'],
                            [Users, '100%', 'Client satisfaction'],
                        ].map(([Icon, count, label]) => {
                            const StatIcon = Icon as typeof BadgeCheck;
                            return (
                                <div key={String(count)}>
                                    <StatIcon size={28} />
                                    <strong>{String(count)}</strong>
                                    <span>{String(label)}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="hero-image">
                    <OptimizedImage
                        name={'meeting-room.jpg'}
                        loading="eager"
                        alt="Creative meeting room with a geometric feature wall and branded studio emblem"
                    />
                    <a
                        href="#discover"
                        className="scroll-cue"
                        aria-label="Scroll to discover the studio"
                    >
                        <ArrowDown size={27} />
                    </a>
                    <div className="industry-badge">
                        <strong>06+</strong>
                        <span>
                            Industries
                            <br />
                            served
                        </span>
                    </div>
                </div>
            </section>
            <section className="home-discover tp-section" id="discover">
                <div>
                    <Eyebrow>Discover our studio</Eyebrow>
                    <h2>
                        Creative thinking.
                        <br />
                        <span>Meaningful experiences.</span>
                    </h2>
                    <p>
                        We bring strategy, design and technology together to
                        help brands communicate, connect and grow. From the
                        first spark to the final experience, we turn ideas into
                        impact.
                    </p>
                    <Cta href="/studio">Explore Our Studio</Cta>
                </div>
                <OptimizedImage
                    name={'studio-background.jpeg'}
                    alt="Our blue, teal and yellow emblem reimagined through emerging technology"
                    loading="lazy"
                />
            </section>
            <section className="home-work tp-section">
                <div className="section-heading">
                    <div>
                        <Eyebrow>Selected work</Eyebrow>
                        <h2>
                            Ideas made <span>real.</span>
                        </h2>
                    </div>
                    <Cta href="/portfolio">View Our Portfolio</Cta>
                </div>
                <div className="home-project-grid">
                    {projects.slice(0, 3).map((p) => (
                        <Link href={`/portfolio/${p.slug}`} key={p.slug}>
                            <div>
                                <OptimizedImage
                                    name={p.image}
                                    alt={p.title}
                                    loading="lazy"
                                />
                            </div>
                            <small>{p.category}</small>
                            <h3>
                                {p.title}
                                <ArrowRight size={20} />
                            </h3>
                        </Link>
                    ))}
                </div>
            </section>
            <CustomerVoices />
            <ClientLogos />
        </>
    );
}
