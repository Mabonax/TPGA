import { Head, usePage } from '@inertiajs/react';

export type PageMetadata = {
    title: string;
    description: string;
    url: string;
    image: string;
    indexable: boolean;
    type: string;
};

export default function Seo() {
    const { seo } = usePage<{ seo: PageMetadata }>().props;
    return (
        <Head>
            <meta
                head-key="description"
                name="description"
                content={seo.description}
            />
            <meta
                head-key="robots"
                name="robots"
                content={seo.indexable ? 'index,follow' : 'noindex,nofollow'}
            />
            <link head-key="canonical" rel="canonical" href={seo.url} />
            <meta head-key="og:title" property="og:title" content={seo.title} />
            <meta
                head-key="og:description"
                property="og:description"
                content={seo.description}
            />
            <meta head-key="og:url" property="og:url" content={seo.url} />
            <meta head-key="og:image" property="og:image" content={seo.image} />
            <meta
                head-key="og:image:alt"
                property="og:image:alt"
                content="TonicPunkGraphics — Design. Innovation. Culture. Technology."
            />
            <meta head-key="og:type" property="og:type" content={seo.type} />
            <meta
                head-key="og:site_name"
                property="og:site_name"
                content="TonicPunkGraphics"
            />
            <meta
                head-key="twitter:card"
                name="twitter:card"
                content="summary_large_image"
            />
            <meta
                head-key="twitter:title"
                name="twitter:title"
                content={seo.title}
            />
            <meta
                head-key="twitter:description"
                name="twitter:description"
                content={seo.description}
            />
            <meta
                head-key="twitter:image"
                name="twitter:image"
                content={seo.image}
            />
        </Head>
    );
}
