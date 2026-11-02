import OptimizedImage from '@/components/tpga/optimized-image';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import { Cta, Eyebrow } from '@/components/tpga/shared';

export type StudioArticle = {
    slug: string;
    title: string;
    category: string;
    image: string;
    description: string;
    sections: { heading: string; text: string }[];
};

export default function Article({ article }: { article: StudioArticle }) {
    return (
        <>
            <Head title={article.title} />
            <article className="studio-article tp-section">
                <header>
                    <Link className="back-link" href="/insights">
                        <ArrowLeft size={18} />
                        Back to Insights
                    </Link>
                    <Eyebrow>Studio notes · {article.category}</Eyebrow>
                    <h1>{article.title}</h1>
                    <p className="article-lead">{article.description}</p>
                </header>
                <div className="article-layout">
                    <aside>
                        <nav aria-label="In this article">
                            <h2>In this article</h2>
                            {article.sections.map((section, i) => (
                                <a
                                    href={`#section-${i + 1}`}
                                    key={section.heading}
                                >
                                    {section.heading}
                                </a>
                            ))}
                        </nav>
                        <Cta>Discuss Your Project</Cta>
                    </aside>
                    <div className="article-body">
                        <OptimizedImage
                            name={article.image}
                            alt={`Design example from the BaNi Foods ${article.category.toLowerCase()} exploration`}
                        />
                        {article.sections.map((section, i) => (
                            <section
                                id={`section-${i + 1}`}
                                key={section.heading}
                            >
                                <h2>{section.heading}</h2>
                                <p>{section.text}</p>
                            </section>
                        ))}
                        <div className="article-end">
                            <Eyebrow>Bring your next idea</Eyebrow>
                            <h2>A good brief starts a useful conversation.</h2>
                            <Cta>Start a Project</Cta>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
