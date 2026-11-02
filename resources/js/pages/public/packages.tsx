import OptimizedImage from '@/components/tpga/optimized-image';
import { Head } from '@inertiajs/react';
import { Check } from 'lucide-react';
import { Cta, Eyebrow } from '@/components/tpga/shared';

const packages = [
    {
        name: 'Brand Essentials',
        eyebrow: 'Build your foundation',
        text: 'A confident starting point for a new brand or a fresh direction.',
        features: [
            'Brand discovery',
            'Logo & visual identity',
            'Colour & typography direction',
            'Brand guidelines',
        ],
    },
    {
        name: 'Digital Presence',
        eyebrow: 'Connect with your audience',
        text: 'Bring your brand to life with a thoughtful digital experience.',
        features: [
            'Website discovery',
            'UX/UI design',
            'Responsive website',
            'Content & launch guidance',
        ],
    },
    {
        name: 'Brand & Growth',
        eyebrow: 'Create your next chapter',
        text: 'A connected creative direction across your brand and communication.',
        features: [
            'Brand strategy',
            'Visual identity system',
            'Campaign creative',
            'Social content direction',
        ],
    },
    {
        name: 'Complete Creative',
        eyebrow: 'Made around your ambition',
        text: 'A tailored creative partnership for a multidisciplinary project.',
        features: [
            'Creative consultation',
            'Bespoke project scope',
            'Connected design disciplines',
            'Collaborative delivery',
        ],
    },
];
export default function Packages() {
    return (
        <>
            <Head title="Services & Packages" />
            <section className="packages-stage">
                <div className="packages-intro">
                    <Eyebrow>Services & Packages</Eyebrow>
                    <h1>
                        Creative
                        <br />
                        Solutions
                        <br />
                        For Real
                        <br />
                        <span>Impact.</span>
                    </h1>
                    <p>
                        Choose a starting point. We’ll shape the right scope
                        around your goals.
                    </p>
                    <OptimizedImage name={'emblem.png'} alt="" />
                </div>
                <div>
                    <div className="package-grid">
                        {packages.map((p, i) => (
                            <section
                                className={`package-card package-${i}`}
                                key={p.name}
                            >
                                <Eyebrow>{p.eyebrow}</Eyebrow>
                                <h2>{p.name}</h2>
                                <p>{p.text}</p>
                                <ul>
                                    {p.features.map((f) => (
                                        <li key={f}>
                                            <Check size={16} />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <p className="package-pricing">
                                    Let’s discuss your scope
                                </p>
                                <Cta
                                    href={`/start-a-project?service=${encodeURIComponent(p.name)}`}
                                >
                                    Request a Quote
                                </Cta>
                            </section>
                        ))}
                    </div>
                    <p className="packages-note">
                        Every project is different. Final scope, timing and
                        pricing are confirmed after a conversation with the
                        studio.
                    </p>
                    <div className="package-extra">
                        <Eyebrow>More ways to create</Eyebrow>
                        <h2>One studio. Many possibilities.</h2>
                        <p>
                            Photography, motion, packaging, events, aerial media
                            and emerging technology — explore our full range of
                            services.
                        </p>
                        <Cta href="/services">View All Services</Cta>
                    </div>
                </div>
            </section>
        </>
    );
}
