import imageManifest from './image-manifest.json';
const deliveryImages: Record<string, { src: string }> = imageManifest;
export const asset = (name: string) =>
    deliveryImages[name]?.src ?? `/assets/tpga/${name}`;
export const studioEmail = 'admin@tonicpunkgraphics.co.za';
export const services = [
    {
        name: 'Brand & Identity Design',
        icon: 'palette',
        text: 'Building strong, memorable brands that leave a lasting impression.',
        category: 'Branding',
        detail: 'Brand strategy, visual identity, logo systems, brand guidelines and creative direction.',
    },
    {
        name: 'UX/UI Design',
        icon: 'ux-browser',
        text: 'Design intuitive and engaging digital experiences.',
        category: 'Digital',
        detail: 'User journeys, wireframes, interactive prototypes and thoughtful interface design.',
    },
    {
        name: 'Web & App Development',
        icon: 'code-simple',
        text: 'Custom websites and applications built for performance.',
        category: 'Digital',
        detail: 'Responsive websites, business applications and connected digital experiences.',
    },
    {
        name: 'E-commerce Solutions',
        icon: 'cart-shopping-fast',
        text: 'Powerful online stores that drive sales and customer loyalty.',
        category: 'Digital',
        detail: 'Storefront design, product experiences and seamless shopping journeys.',
    },
    {
        name: 'AI Prompt Engineering',
        icon: 'ai-assistant',
        text: 'Intelligent prompts, smarter outcomes, limitless possibilities.',
        category: 'Innovation',
        detail: 'Purposeful AI workflows and creative experimentation for your business.',
    },
    {
        name: 'Motion & Video',
        icon: 'screen-play',
        text: 'Bringing stories to life through animation and visual storytelling.',
        category: 'Media',
        detail: 'Motion graphics, animation, brand films and compelling visual stories.',
    },
    {
        name: 'Photography & Videography',
        icon: 'camera',
        text: 'Capturing moments that tell your brand’s unique story.',
        category: 'Media',
        detail: 'Brand photography, product shoots, portraits and video production.',
    },
    {
        name: 'Drone Services',
        icon: 'drone',
        text: 'Aerial perspectives that elevate your brand and projects.',
        category: 'Media',
        detail: 'Aerial imagery and visual storytelling from a different perspective.',
    },
    {
        name: 'Architecture & Visualization',
        icon: 'drafting-compass',
        text: 'Stunning 3D designs and visuals that bring ideas to life.',
        category: 'Innovation',
        detail: 'Architectural visualization, spatial concepts and three-dimensional presentations.',
    },
    {
        name: 'Robotics & Innovation',
        icon: 'user-robot',
        text: 'Smart solutions powered by technology and innovation.',
        category: 'Innovation',
        detail: 'Creative technology concepts and exploration of emerging digital tools.',
    },
    {
        name: 'SEO & Digital Optimization',
        icon: 'discover',
        text: 'Boost your visibility and grow your digital presence.',
        category: 'Digital',
        detail: 'Search visibility, content structure and website experience optimization.',
    },
    {
        name: 'Social Media Marketing',
        icon: 'share',
        text: 'Engage your audience and grow your brand online.',
        category: 'Branding',
        detail: 'Social strategy, campaign creative and content that connects.',
    },
    {
        name: 'Print & Packaging Design',
        icon: 'box',
        text: 'Creative print solutions that make your brand tangible.',
        category: 'Branding',
        detail: 'Product packaging, labels, publications and print-ready brand collateral.',
    },
    {
        name: 'Event & Conference Coordination',
        icon: 'calendar-day',
        text: 'Seamless events that inspire, connect and deliver impact.',
        category: 'Media',
        detail: 'Creative planning, event branding and coordinated audience experiences.',
    },
    {
        name: 'Live Streaming & Media Production',
        icon: 'video-camera-alt',
        text: 'High-quality broadcasts and media production that connect.',
        category: 'Media',
        detail: 'Production planning, live streaming and broadcast content.',
    },
];
export const projects = [
    {
        slug: 'bani-brand',
        title: 'A brand rooted in the soil.',
        category: 'Branding',
        image: 'bani-logo.png',
        description:
            'A fresh visual identity for BaNi Foods, bringing the spirit of farm-grown goodness into a memorable brand.',
    },
    {
        slug: 'bani-packaging',
        title: 'Goodness in every detail.',
        category: 'Illustration',
        image: 'bani-chicken.png',
        description:
            'A considered packaging system that brings natural ingredients and the BaNi Foods story together.',
    },
    {
        slug: 'bani-sauces',
        title: 'Bold flavours. Bright ideas.',
        category: 'Mockup',
        image: 'bani-sauces.png',
        description:
            'Product presentation and packaging concepts for a distinctive range of sauces and condiments.',
    },
    {
        slug: 'bani-digital',
        title: 'Fresh from our farm to your table.',
        category: 'Web Design',
        image: 'bani-website.png',
        description:
            'A warm, product-led website concept connecting farm stories, fresh produce and a welcoming digital experience.',
    },
    {
        slug: 'bani-eggs',
        title: 'Naturally different by design.',
        category: 'Illustration',
        image: 'bani-eggs.png',
        description:
            'Packaging that balances a clear product story with a recognisable visual identity.',
    },
    {
        slug: 'bani-product',
        title: 'Made to stand out.',
        category: 'Mockup',
        image: 'bani-mockup.jpg',
        description:
            'Exploring how a brand comes to life through tactile packaging and product presentation.',
    },
];
export const team = [
    { name: 'Keneilwe Baloyi', role: 'SEO Specialist', image: 'keneilwe.png' },
    {
        name: 'Thapelo Mkhontho',
        role: 'Founder & Art Director',
        image: 'thapelo.png',
    },
    { name: 'Neo Molekwa', role: 'Drone Specialist', image: 'neo.png' },
    { name: 'Lerato Maluleka', role: 'Media Analyst', image: 'lerato.png' },
    {
        name: 'Boitumelo Mahasane',
        role: 'Creative Collective',
        image: 'boitumelo.png',
    },
    { name: 'Graig Jimu', role: 'Creative Collective', image: 'jimu.png' },
];
