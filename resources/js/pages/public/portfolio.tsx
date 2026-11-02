import OptimizedImage from '@/components/tpga/optimized-image';
import { Head, Link } from '@inertiajs/react';
import { ArrowUpRight, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';
import { Eyebrow } from '@/components/tpga/shared';
import { projects } from '@/lib/tpga';
import type { StudioArticle } from '@/pages/public/article';

const categories = [
    'All Posts',
    'Branding',
    'Illustration',
    'Mockup',
    'Web Design',
];
export default function Portfolio({
    insights = false,
    articles = [],
}: {
    insights?: boolean;
    articles?: StudioArticle[];
}) {
    const [category, setCategory] = useState('All Posts');
    const [sort, setSort] = useState('featured');
    const items = insights ? articles : projects;
    const filtered = items.filter(
        (p) => category === 'All Posts' || p.category === category,
    );
    const shown =
        sort === 'az'
            ? [...filtered].sort((a, b) => a.title.localeCompare(b.title))
            : filtered;
    return (
        <>
            <Head title={insights ? 'Insights & Stories' : 'Our Portfolio'} />
            <section className="portfolio-stage">
                <div className="portfolio-heading">
                    <div>
                        <Eyebrow>
                            {insights ? 'Studio notes' : 'Our creative work'}
                        </Eyebrow>
                        <h1>
                            {insights ? (
                                <>
                                    Insights <span>& Stories</span>
                                </>
                            ) : (
                                <>
                                    Ideas into <span>impact.</span>
                                </>
                            )}
                        </h1>
                    </div>
                    <div
                        className="filter-pills"
                        role="group"
                        aria-label="Filter by category"
                    >
                        <p>Filter by category</p>
                        {categories.slice(0, 4).map((c) => (
                            <button
                                type="button"
                                aria-pressed={category === c}
                                className={category === c ? 'selected' : ''}
                                onClick={() => setCategory(c)}
                                key={c}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="portfolio-body">
                    <aside className="portfolio-filter">
                        <h2>
                            Filter & Sort <SlidersHorizontal size={20} />
                        </h2>
                        <p>Category</p>
                        <div>
                            {categories.map((c) => (
                                <button
                                    type="button"
                                    key={c}
                                    aria-pressed={category === c}
                                    onClick={() => setCategory(c)}
                                    className={category === c ? 'selected' : ''}
                                >
                                    {c}
                                    <span>
                                        {c === 'All Posts'
                                            ? items.length
                                            : items.filter(
                                                  (p) => p.category === c,
                                              ).length}
                                    </span>
                                </button>
                            ))}
                        </div>
                        <label htmlFor="sort">Sort by</label>
                        <select
                            id="sort"
                            value={sort}
                            onChange={(event) => setSort(event.target.value)}
                        >
                            <option value="featured">Featured</option>
                            <option value="az">Title: A–Z</option>
                        </select>
                        <p className="filter-count" role="status">
                            Showing {shown.length}{' '}
                            {shown.length === 1 ? 'story' : 'stories'}
                        </p>
                    </aside>
                    <div className="portfolio-grid">
                        {shown.map((p) => (
                            <Link
                                href={`${insights ? '/insights' : '/portfolio'}/${p.slug}`}
                                className={`project-card project-${p.slug}`}
                                key={p.slug}
                            >
                                <div className="project-image">
                                    <OptimizedImage
                                        name={p.image}
                                        sizes="(max-width: 700px) 44vw, (max-width: 1050px) 33vw, 24vw"
                                        alt={
                                            insights
                                                ? `${p.category} studio note illustration`
                                                : `${p.category} work for BaNi Foods`
                                        }
                                        loading="lazy"
                                    />
                                    <span>
                                        <ArrowUpRight size={16} />
                                    </span>
                                </div>
                                <div className="project-copy">
                                    <small>{p.category}</small>
                                    <h2>{p.title}</h2>
                                    <p>{p.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {shown.length === 0 && (
                        <div className="portfolio-empty" role="status">
                            <h2>More stories are taking shape.</h2>
                            <p>
                                There are no studio notes in this category yet.
                            </p>
                            <button
                                type="button"
                                className="tp-button"
                                onClick={() => setCategory('All Posts')}
                            >
                                View all stories
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
