type ProjectDetail = { focus: string; scope: string[]; gallery: string[] };

export const projectDetails: Record<string, ProjectDetail> = {
    'bani-brand': {
        focus: 'The supplied identity brings together an agricultural illustration, an established badge shape and an earthy palette. The design direction makes the farm-to-table story visible in the brand mark, with supporting applications showing how the identity can carry across products and digital touchpoints.',
        scope: [
            'Visual identity exploration',
            'Colour and typography direction',
            'Brand applications',
        ],
        gallery: ['bani-eggs.png', 'bani-sauces.png', 'bani-website.png'],
    },
    'bani-packaging': {
        focus: 'This packaging exploration places the brand and product name in a clear hierarchy, supported by illustration and product information. The supplied chicken and egg concepts show how related products can share a recognisable visual language while keeping each format distinct.',
        scope: [
            'Product label direction',
            'Packaging hierarchy',
            'Range consistency',
        ],
        gallery: ['bani-chicken.png', 'bani-eggs.png'],
    },
    'bani-sauces': {
        focus: 'The sauce range uses a connected label system across different containers and flavours. The supplied mockups explore the relationship between the mark, product naming and colour cues, bringing the identity from a flat graphic into a product presentation.',
        scope: [
            'Label design exploration',
            'Product range direction',
            'Packaging mockups',
        ],
        gallery: ['bani-sauces.png', 'bani-mockup.jpg'],
    },
    'bani-digital': {
        focus: 'The supplied website concept combines a prominent product introduction, a farm story and product categories. Warm imagery and a green palette connect the digital presentation to the packaging, while clearly separated sections give the brand story and the range their own space.',
        scope: [
            'Website art direction',
            'Product-led page composition',
            'Brand and content hierarchy',
        ],
        gallery: ['bani-logo.png', 'bani-sauces.png'],
    },
    'bani-eggs': {
        focus: 'The egg packaging carries the BaNi Foods identity onto a familiar everyday format. Its graphic direction connects the product to the wider range, balancing a recognisable brand mark with space for the information customers need to identify the product.',
        scope: [
            'Packaging concept',
            'Product identification',
            'Brand application',
        ],
        gallery: ['bani-eggs.png', 'bani-chicken.png'],
    },
    'bani-product': {
        focus: 'Product mockups give a visual identity a physical context. This supplied presentation explores how label proportions, colour and the container work together, helping the design conversation move from individual graphic elements to a connected product experience.',
        scope: [
            'Product presentation',
            'Mockup exploration',
            'Visual consistency',
        ],
        gallery: ['bani-mockup.jpg', 'bani-sauces.png'],
    },
};
