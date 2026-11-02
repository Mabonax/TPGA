import OptimizedImage from '@/components/tpga/optimized-image';
import { Head } from '@inertiajs/react';
import { Cta, Eyebrow } from '@/components/tpga/shared';

const capabilities = [
    [
        'Brand & Creative Design',
        'We build brands that stand out and connect. Our creative work balances personality, clarity and purpose.',
        'Brand strategy & positioning',
        'Logo & identity design',
        'Print & packaging design',
    ],
    [
        'Digital Experience',
        'We create thoughtful digital products that connect with people and perform for your business.',
        'Websites & custom applications',
        'UX/UI design & prototyping',
        'E-commerce experiences',
    ],
    [
        'Marketing & Communication',
        'We help you find your audience, share your message and build lasting connections.',
        'Campaign strategy & creative',
        'Social media & content',
        'Search & digital optimization',
    ],
    [
        'Innovation & Emerging Tech',
        'We explore new possibilities through creative technology and future-focused thinking.',
        'AI & creative workflows',
        '3D & architectural visualization',
        'Immersive media & innovation',
    ],
];
export default function Capabilities() {
    return (
        <>
            <Head title="Our Capabilities" />
            <section className="capabilities tp-section">
                <Eyebrow>Our capabilities</Eyebrow>
                <div className="capabilities-heading">
                    <div>
                        <h1>
                            From bold ideas to
                            <br />
                            <span>meaningful experiences.</span>
                        </h1>
                        <p>
                            Turning imagination into impact. We bring together
                            creative minds, technical expertise and a shared
                            passion for purposeful design.
                        </p>
                    </div>
                    <OptimizedImage name={'emblem.png'} alt="" />
                </div>
                <div className="capability-grid">
                    {capabilities.map(([title, text, ...items], i) => (
                        <section key={title}>
                            <span className="capability-number">0{i + 1}</span>
                            <h2>{title}</h2>
                            <p>{text}</p>
                            <ul>
                                {items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            <Cta
                                href={`/start-a-project?service=${encodeURIComponent(title)}`}
                            >
                                Explore this direction
                            </Cta>
                        </section>
                    ))}
                </div>
                <div className="capability-outro">
                    <div>
                        <h2>Your ambition. Our collective expertise.</h2>
                        <p>
                            A connected creative partner for the full journey,
                            from first idea to final experience.
                        </p>
                    </div>
                    <Cta />
                </div>
            </section>
        </>
    );
}
