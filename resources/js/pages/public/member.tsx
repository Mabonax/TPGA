import OptimizedImage from '@/components/tpga/optimized-image';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import { Cta, Eyebrow } from '@/components/tpga/shared';
import { team } from '@/lib/tpga';

export default function Member({ slug }: { slug: string }) {
    const member = team.find(
        (m) => m.name.toLowerCase().replaceAll(' ', '-') === slug,
    );
    if (!member) return null;
    return (
        <>
            <Head title={member.name} />
            <section className="member-profile tp-section">
                <div>
                    <Link className="back-link" href="/team">
                        <ArrowLeft size={18} />
                        Meet the team
                    </Link>
                    <Eyebrow>The creative collective</Eyebrow>
                    <h1>{member.name}</h1>
                    <h2>{member.role}</h2>
                    <p>
                        Part of the multidisciplinary team bringing creative
                        thinking, technical perspectives and purposeful
                        collaboration to TonicPunkGraphics.
                    </p>
                    <Cta>Work With Our Team</Cta>
                </div>
                <OptimizedImage name={member.image} alt={member.name} />
            </section>
        </>
    );
}
