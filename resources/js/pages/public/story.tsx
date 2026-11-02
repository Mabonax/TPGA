import OptimizedImage from '@/components/tpga/optimized-image';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import { Cta, Eyebrow } from '@/components/tpga/shared';
import { projects } from '@/lib/tpga';
import { projectDetails } from '@/lib/project-details';

export default function Story({
    slug,
    insights = false,
}: {
    slug: string;
    insights?: boolean;
}) {
    const project = projects.find((p) => p.slug === slug);
    const details = projectDetails[slug];
    if (!project || !details) return null;
    return (
        <>
            <Head title={project.title} />
            <article className="story-stage tp-section">
                <div className="story-title">
                    <Link
                        className="back-link"
                        href={insights ? '/insights' : '/portfolio'}
                    >
                        <ArrowLeft size={18} />
                        Back to {insights ? 'Stories' : 'Portfolio'}
                    </Link>
                    <Eyebrow>BaNi Foods · {project.category}</Eyebrow>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                </div>
                <div className="story-image">
                    <OptimizedImage
                        name={project.image}
                        alt={`BaNi Foods ${project.category.toLowerCase()} design`}
                    />
                </div>
                <section className="story-about">
                    <div>
                        <Eyebrow>The creative direction</Eyebrow>
                        <h2>
                            Rooted in tradition.
                            <br />
                            <span>Made for today.</span>
                        </h2>
                    </div>
                    <div>
                        <p>{details.focus}</p>
                        <ul className="project-scope" aria-label="Design focus">
                            {details.scope.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <Cta href="/start-a-project">
                            Let’s Shape Your Story
                        </Cta>
                    </div>
                </section>
                <section
                    className="project-gallery"
                    aria-label="More from this design exploration"
                >
                    {details.gallery.map((image) => (
                        <figure key={image}>
                            <OptimizedImage
                                name={image}
                                alt={`BaNi Foods design exploration: ${image
                                    .replace('bani-', '')
                                    .replace(/\.[^.]+$/, '')
                                    .replaceAll('-', ' ')}`}
                            />
                            <figcaption>
                                BaNi Foods ·{' '}
                                {image
                                    .replace('bani-', '')
                                    .replace(/\.[^.]+$/, '')
                                    .replaceAll('-', ' ')}
                            </figcaption>
                        </figure>
                    ))}
                </section>
                <div className="related-work">
                    {projects
                        .filter((p) => p.slug !== slug)
                        .slice(0, 3)
                        .map((p) => (
                            <Link
                                href={`${insights ? '/insights' : '/portfolio'}/${p.slug}`}
                                key={p.slug}
                            >
                                <OptimizedImage
                                    name={p.image}
                                    alt={p.title}
                                    loading="lazy"
                                />
                                <h3>{p.title}</h3>
                                <small>{p.category}</small>
                            </Link>
                        ))}
                </div>
            </article>
        </>
    );
}
