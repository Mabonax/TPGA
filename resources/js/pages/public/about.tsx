import OptimizedImage from '@/components/tpga/optimized-image';
import { Head, Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { Cta, Eyebrow } from '@/components/tpga/shared';

const panels = [
    {
        title: 'About Agency',
        text: 'TonicPunkGraphics is a multidisciplinary creative agency. We bring strategy, design and technology together to create meaningful experiences for brands and the people they serve.',
    },
    {
        title: 'Our Story',
        text: 'Our creative journey began in 2012 with a passion for design. From our home in Pretoria, we bring diverse creative and technical perspectives to every new idea.',
    },
    {
        title: 'Our Mission',
        text: 'To transform ideas into impactful experiences through purposeful creativity, thoughtful collaboration and future-focused innovation.',
    },
];
export default function About() {
    const [expanded, setExpanded] = useState<number | null>(null);
    return (
        <>
            <Head title="About Agency" />
            <section className="about-stage">
                <div className="about-border" />
                <OptimizedImage
                    className="about-emblem"
                    name={'emblem.png'}
                    alt=""
                />
                <Link href="/studio" className="about-logo">
                    <OptimizedImage
                        name={'logo-colour.png'}
                        alt="TonicPunkGraphics"
                    />
                </Link>
                <div className="about-panels">
                    {panels.map((p, i) => (
                        <section
                            key={p.title}
                            className={`about-panel panel-${i} ${expanded === i ? 'is-open' : ''}`}
                        >
                            <button
                                type="button"
                                aria-expanded={expanded === i}
                                aria-controls={`about-panel-${i}`}
                                onClick={() =>
                                    setExpanded(expanded === i ? null : i)
                                }
                            >
                                {p.title}
                                <ArrowUpRight size={19} />
                            </button>
                            <div
                                id={`about-panel-${i}`}
                                hidden={expanded !== i}
                            >
                                <p>{p.text}</p>
                            </div>
                        </section>
                    ))}
                </div>
                <div className="about-values">
                    <Eyebrow>What sets us apart</Eyebrow>
                    <h1>
                        Committed to
                        <br />
                        transforming ideas into
                        <br />
                        <span>impactful experiences.</span>
                    </h1>
                    <ol>
                        {[
                            'Multidisciplinary',
                            'Creative + Technical',
                            'Future-focused',
                            'Innovation-driven',
                            'Not just design, but complete solution thinking',
                        ].map((v) => (
                            <li key={v}>{v}</li>
                        ))}
                    </ol>
                </div>
            </section>
            <section className="about-follow tp-section">
                <Eyebrow>Purpose meets possibility</Eyebrow>
                <h2>
                    Your ambition.
                    <br />
                    <span>Our collective expertise.</span>
                </h2>
                <Cta href="/team">Meet Our Team</Cta>
            </section>
        </>
    );
}
