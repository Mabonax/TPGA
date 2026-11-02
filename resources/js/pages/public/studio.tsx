import OptimizedImage from '@/components/tpga/optimized-image';
import { Head, Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';
import { ClientLogos, Cta, Eyebrow } from '@/components/tpga/shared';

export default function Studio() {
    return (
        <>
            <Head title="Discover Our Studio" />
            <section className="studio-stage">
                <OptimizedImage
                    name={'globe.png'}
                    className="studio-globe"
                    alt=""
                    aria-hidden="true"
                />
                <div className="studio-intro">
                    <Eyebrow>Discover our studio</Eyebrow>
                    <h1>
                        <span>Creative Thinking</span>
                        <br />
                        <b>Digital Experiences</b>
                        <br />
                        <em>Emerging Technology</em>
                    </h1>
                    <p>
                        TonicPunkGraphics is a multidisciplinary creative studio
                        combining strategy, design, technology and digital
                        innovation to help brands communicate, connect and grow.
                    </p>
                    <ul>
                        {[
                            'Brand & Creative Design',
                            'Digital Experience',
                            'Marketing & Growth',
                            'Innovation & Emerging Tech',
                        ].map((s) => (
                            <li key={s}>
                                <Link href="/services">
                                    <ChevronRight />
                                    {s}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Cta href="/capabilities">Explore Our Capabilities</Cta>
                    <div className="founder-note">
                        <OptimizedImage
                            name={'founder.jpg'}
                            alt="Thapelo Mkhontho, founder and art director"
                        />
                        <p>
                            Elevating design excellence.
                            <br />
                            Inspiring limitless creative expression.
                        </p>
                    </div>
                </div>
                <div className="studio-numbers">
                    {[
                        [
                            '256+',
                            'Completed Projects',
                            'With 100% satisfaction',
                        ],
                        ['90+', 'Company Growth', 'Creative relationships'],
                        ['12+', 'Years of Experience', 'Since 2012'],
                        ['30+', 'Industry Awards', 'Design recognition'],
                    ].map(([n, title, subtitle]) => (
                        <div key={title}>
                            <div className="number-emblem">
                                <OptimizedImage name={'emblem.png'} alt="" />
                                <strong>{n}</strong>
                            </div>
                            <h2>{title}</h2>
                            <p>{subtitle}</p>
                        </div>
                    ))}
                </div>
            </section>
            <ClientLogos />
        </>
    );
}
