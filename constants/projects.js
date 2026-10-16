// Project data shared by the home page grid and the /project/[slug] detail pages.
// Overview / problems / solutions are starter copy — replace with the real case study.
const IMG = 'https://framerusercontent.com/images/';

export const projects = [
    {
        slug: 'brander',
        name: 'Brander',
        desc: 'Implemented user research and testing to create a visually appealing and highly functional interface.',
        image: `${IMG}3wDKnQKnJmBRXN5jNErMOI4iC48.png`,
        cover: `${IMG}7Ebx5KuMZpKJfito8HK7VV0FNg.png`,
        gallery: [`${IMG}U8xz54FgZC0p73oZiLQOD6T09k.png`, `${IMG}HG5cF3F0w7nxfKvCXyG1wNLqk.png`, `${IMG}cPiVsC271eI8xvLkup9jJqxtP8.png`],
        details: {
            'Project Name': 'HorizonCode',
            Headquarters: 'New York, US',
            Industry: 'Software development',
            'Company Size': '50+ employees',
            Timeline: '6 Months',
        },
        overview: [
            'HorizonCode needed a brand and product interface that matched the quality of their engineering. Their existing site felt generic and failed to communicate what set them apart from other development studios.',
            'The engagement covered research, identity, and a full redesign of the marketing site and client dashboard, delivered over six months alongside their in-house team.',
        ],
        problems: [
            'Visitors struggled to understand the services on offer, and the sign-up flow lost most users before the second step. Visual styles had drifted across pages, making the product feel unfinished.',
        ],
        solutions: [
            'User interviews and usability testing shaped a simpler information architecture and a three-step onboarding flow. A compact design system brought typography, color, and components into one consistent language across marketing and product.',
        ],
    },
    {
        slug: 'arcane',
        name: 'Arcane',
        desc: 'Conducted user research and testing to design an intuitive, visually stunning interface.',
        image: `${IMG}PeFXCfp3PGbYPZfh3jOzTRaH0.png`,
        cover: `${IMG}cPiVsC271eI8xvLkup9jJqxtP8.png`,
        gallery: [`${IMG}U8xz54FgZC0p73oZiLQOD6T09k.png`, `${IMG}HG5cF3F0w7nxfKvCXyG1wNLqk.png`, `${IMG}7Ebx5KuMZpKJfito8HK7VV0FNg.png`],
        details: {
            'Project Name': 'NovaCraft',
            Headquarters: 'Los Angeles, CA',
            Industry: 'Web development',
            'Company Size': '79+ employees',
            Timeline: '10 Months',
        },
        overview: [
            'NovaCraft builds custom web platforms for creative agencies. Arcane was their flagship project builder, and it needed to feel as polished as the work their clients produce.',
            'Over ten months the project moved from discovery workshops to a fully redesigned editor, template library, and publishing flow.',
        ],
        problems: [
            'Power users relied on hidden shortcuts while new users felt overwhelmed by dense toolbars. Engagement dropped sharply after the first project, and support requests centred on the same few confusing screens.',
        ],
        solutions: [
            'Research sessions with both audiences led to a progressive interface that reveals advanced tools only when needed. Clear visual hierarchy, guided first-run templates, and refined micro-interactions lifted engagement and conversions.',
        ],
    },
    {
        slug: 'quorra',
        name: 'Quorra',
        desc: 'Leveraged user research and testing to create an attractive and highly functional interface.',
        image: `${IMG}Q7YMuzoYWFoBxRqvVZZZ7MQtX58.png`,
        cover: `${IMG}oFMrQdx81IQmuJuX4whiRvd7IA.png`,
        gallery: [`${IMG}U8xz54FgZC0p73oZiLQOD6T09k.png`, `${IMG}HG5cF3F0w7nxfKvCXyG1wNLqk.png`, `${IMG}7Ebx5KuMZpKJfito8HK7VV0FNg.png`],
        details: {
            'Project Name': 'Obsidian Software',
            Headquarters: 'London, UK',
            Industry: 'App development',
            'Company Size': '28+ employees',
            Timeline: '9 Months',
        },
        overview: [
            'Obsidian Software develops mobile commerce apps for independent retailers. Quorra is their shopping app, and the goal was to make browsing and checkout feel effortless on any device.',
            'The nine-month project covered research, a new visual identity for the app, and a rebuilt purchase journey.',
        ],
        problems: [
            'Product pages were cluttered, search returned poor matches, and checkout required too many steps. Customers often abandoned their carts on mobile, where most of the traffic came from.',
        ],
        solutions: [
            'Testing with real shoppers informed cleaner product layouts, smarter filtering, and a two-step checkout. Bold imagery and a calmer interface put the products first, driving higher engagement and sales.',
        ],
    },
    {
        slug: 'solara',
        name: 'Solara',
        desc: 'Implemented user research and testing to develop a sleek, functional interface.',
        image: `${IMG}UjIMzzmlOY0nRTIYvgVHOhRZQ4.png`,
        cover: `${IMG}6UJ8ZjAcowptW0u0MF1I3jRB60.png`,
        gallery: [`${IMG}U8xz54FgZC0p73oZiLQOD6T09k.png`, `${IMG}HG5cF3F0w7nxfKvCXyG1wNLqk.png`, `${IMG}7Ebx5KuMZpKJfito8HK7VV0FNg.png`],
        details: {
            'Project Name': 'AstralTech',
            Headquarters: 'Paris, France',
            Industry: 'Cloud computing',
            'Company Size': '58+ employees',
            Timeline: '8 Months',
        },
        overview: [
            'AstralTech provides cloud infrastructure for growing businesses. Solara is their monitoring console, used daily by engineering teams to keep services healthy.',
            'Across eight months the work spanned stakeholder interviews, a new dashboard framework, and a refreshed visual language for the whole console.',
        ],
        problems: [
            'Critical alerts were buried among low-priority noise, and key metrics were spread across too many screens. Teams lost time switching views during incidents.',
        ],
        solutions: [
            'Working sessions with on-call engineers produced a customisable overview dashboard, clearer alert severity, and faster navigation between services. A sleek, consistent interface made complex data easier to scan at a glance.',
        ],
    },
];

export const getProject = (slug) => projects.find((project) => project.slug === slug);
