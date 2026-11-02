import OptimizedImage from '@/components/tpga/optimized-image';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { CreativeBanner, Cta, Eyebrow } from '@/components/tpga/shared';
import { team } from '@/lib/tpga';

export default function Team() {
    const [start, setStart] = useState(0);
    const visible = [...team, ...team].slice(start, start + 4);
    return (
        <>
            <Head title="Meet Our Team" />
            <CreativeBanner />
            <section className="team-stage">
                <div className="team-copy">
                    <Eyebrow>The founders</Eyebrow>
                    <h1>
                        Meet
                        <br />
                        Our <span>Team.</span>
                    </h1>
                    <p>
                        We are a team of skilled individuals driven by a passion
                        for turning ideas into reality. With a diverse blend of
                        backgrounds and expertise, we unite to craft innovative
                        solutions for our clients.
                    </p>
                    <p>
                        Collectively, our creative team is dedicated to
                        delivering impactful results that surpass expectations.
                    </p>
                    <Cta href="/about">Read More</Cta>
                    <p className="team-tagline">
                        Delivering
                        <br />
                        <strong>exceptional results.</strong>
                    </p>
                </div>
                <div className="team-portraits">
                    <p className="team-caption">The agency collective</p>
                    <div className="team-grid">
                        {visible.map((member) => (
                            <Link
                                href={`/team/${member.name.toLowerCase().replaceAll(' ', '-')}`}
                                className="member-card"
                                key={member.name}
                            >
                                <div
                                    className={`member-photo photo-${member.image.split('.')[0]}`}
                                >
                                    <OptimizedImage
                                        name={member.image}
                                        sizes="(max-width: 700px) 42vw, 200px"
                                        alt={member.name}
                                    />
                                </div>
                                <span>
                                    <strong>{member.name}</strong>
                                    <small>{member.role}</small>
                                </span>
                            </Link>
                        ))}
                    </div>
                    <div className="team-controls">
                        <button
                            type="button"
                            aria-label="Previous team members"
                            onClick={() =>
                                setStart(
                                    (start + team.length - 2) % team.length,
                                )
                            }
                        >
                            <ArrowLeft />
                        </button>
                        <span aria-live="polite">{start / 2 + 1} / 3</span>
                        <button
                            type="button"
                            aria-label="Next team members"
                            onClick={() => setStart((start + 2) % team.length)}
                        >
                            <ArrowRight />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
