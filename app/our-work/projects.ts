export type ProcessStep = {
  title: string
  description: string
  image: string
  alt: string
}

export type Project = {
  slug: string
  title: string
  category: string
  tagline: string
  description: string
  cover: string
  coverAlt: string
  accentColor: string
  steps: ProcessStep[]
}

export const projects: Project[] = [
  {
    slug: 'movie-poster',
    title: 'Movie Poster',
    category: 'Graphic Design',
    tagline: 'Cinematic storytelling through print.',
    description:
      'A full cinematic poster designed from the ground up — concept to print-ready file. Every element, from typography to photo composition, was crafted to capture the mood and narrative of the film.',
    cover: '/work-poster-1.png',
    coverAlt: 'Movie poster design',
    accentColor: '#f5c518',
    steps: [
      {
        title: 'Initial Concept',
        description:
          'We started with a deep-dive into the film\'s tone, genre, and target audience. Mood boards were assembled and rough compositional sketches explored different visual approaches before any pixel was placed.',
        image: '/work-poster-1.png',
        alt: 'Initial poster concept',
      },
      {
        title: 'Typography Treatment',
        description:
          'Title typography is the anchor of any movie poster. We tested multiple typefaces and weights, balancing cinematic impact with legibility across all print sizes — from theater standee to digital thumbnail.',
        image: '/work-poster-2.png',
        alt: 'Typography treatment',
      },
      {
        title: 'Color Palette Development',
        description:
          'Color sets the emotional tone before the viewer reads a single word. We developed a palette that communicates genre and mood at a glance, tested against both light and dark backgrounds.',
        image: '/work-poster-3.png',
        alt: 'Color palette development',
      },
      {
        title: 'Composition Draft',
        description:
          'With palette and type locked in, we assembled the first full composition — balancing foreground elements, visual hierarchy, and negative space to guide the eye naturally through the poster.',
        image: '/work-poster-4.png',
        alt: 'Composition draft',
      },
      {
        title: 'Photo Integration',
        description:
          'Source photography was color-graded, masked, and composited into the layout, ensuring seamless integration with illustrated and typographic elements across every layer.',
        image: '/work-poster-5.png',
        alt: 'Photo integration',
      },
      {
        title: 'Final Refinements',
        description:
          'Client feedback was incorporated in a focused revision round — fine-tuning contrast, crop, billing block details, and tagline placement for full theatrical compliance.',
        image: '/work-poster-6.png',
        alt: 'Final refinements',
      },
      {
        title: 'Finished Poster',
        description:
          'The final print-ready poster, delivered in high-resolution press format with bleed and crop marks — ready for both theatrical display and digital release across all platforms.',
        image: '/work-poster-7.png',
        alt: 'Finished movie poster',
      },
    ],
  },
  {
    slug: 'truck-wrap',
    title: 'Truck Wrap',
    category: 'Vehicle Branding',
    tagline: 'A moving billboard that turns heads on every road.',
    description:
      'Bold vehicle wrap design that transforms a fleet truck into a high-impact mobile advertisement. From concept through print-ready artwork, every inch of the vehicle surface was treated as a canvas for brand storytelling.',
    cover: '/work-truck-1.png',
    coverAlt: 'Truck wrap design',
    accentColor: '#00b4d8',
    steps: [
      {
        title: 'Client Brief & Reference',
        description:
          'We gathered brand guidelines, existing assets, and dimensional vehicle specs. Reference photography from all angles informed the spatial layout and helped us plan for panel breaks and body contours.',
        image: '/work-truck-1.png',
        alt: 'Client brief and references',
      },
      {
        title: 'Initial Concept Sketch',
        description:
          'Rough layout sketches explored different design directions — bold side panels, door treatments, and hood graphics were all evaluated for visual impact and brand recognition at speed.',
        image: '/work-truck-2.png',
        alt: 'Initial concept sketch',
      },
      {
        title: 'Layout & Proportions',
        description:
          'The approved concept was translated into precise digital templates matched to the truck\'s actual dimensions, accounting for body contours, panel breaks, and physical installation constraints.',
        image: '/work-truck-3.png',
        alt: 'Layout and proportions',
      },
      {
        title: 'Typography Placement',
        description:
          'Business name, tagline, and contact information were positioned for maximum readability at highway speeds. Placement was tested at multiple simulated viewing distances.',
        image: '/work-truck-4.png',
        alt: 'Typography placement',
      },
      {
        title: 'Color Application',
        description:
          'Brand colors were applied across all panels with careful attention to how they wrap around edges, curves, and recesses — maintaining consistency across the full vehicle surface.',
        image: '/work-truck-5.png',
        alt: 'Color application',
      },
      {
        title: 'Vehicle Mockup',
        description:
          'A photorealistic mockup was presented to the client showing the complete wrap applied to the actual truck model, enabling accurate pre-production approval before any material was cut.',
        image: '/work-truck-6.png',
        alt: 'Vehicle mockup',
      },
      {
        title: 'Detail Refinement',
        description:
          'Client-requested revisions were incorporated — adjusting panel alignment, brightening accent colors, and sharpening logo reproduction for flawless large-format printing.',
        image: '/work-truck-7.png',
        alt: 'Detail refinement',
      },
      {
        title: 'Print-Ready Final',
        description:
          'Final artwork was delivered in print-ready format with full bleed, correct color profiles, and resolution specifications for large-format vinyl printing and professional installation.',
        image: '/work-truck-8.png',
        alt: 'Print-ready final artwork',
      },
    ],
  },
  {
    slug: 'bulls-infographic',
    title: 'Bulls Infographic',
    category: 'Infographic Design',
    tagline: 'Complex data, made instantly readable.',
    description:
      'A data-rich Chicago Bulls infographic that transforms statistics and narrative into a visually compelling, shareable story. Every design decision — from icon choice to color hierarchy — serves clarity and engagement.',
    cover: '/work-bulls-1.png',
    coverAlt: 'Bulls infographic',
    accentColor: '#c9082a',
    steps: [
      {
        title: 'Data Research & Structure',
        description:
          'We researched and curated the key statistics and narrative points, then organized them into a logical hierarchy — determining what leads the eye, what supports the story, and what can be cut.',
        image: '/work-bulls-1.png',
        alt: 'Data research and structure',
      },
      {
        title: 'Visual Hierarchy Draft',
        description:
          'Rough wireframes mapped out the infographic\'s reading flow, grouping related data points and balancing text density with breathing room to keep the eye moving without losing the reader.',
        image: '/work-bulls-2.png',
        alt: 'Visual hierarchy draft',
      },
      {
        title: 'Illustration & Icons',
        description:
          'Custom icons and illustrations were developed to visualize each data category, reinforcing the Bulls brand language while keeping every element recognizable and on-theme.',
        image: '/work-bulls-3.png',
        alt: 'Illustration and icons',
      },
      {
        title: 'Final Infographic',
        description:
          'The complete infographic — polished typography, consistent color application, and verified data — delivered ready for print, social media, and digital distribution.',
        image: '/work-bulls-4.png',
        alt: 'Final infographic',
      },
    ],
  },
  {
    slug: 'celery-bog',
    title: 'Celery Bog',
    category: 'Environmental Design',
    tagline: 'Nature\'s story, told through design.',
    description:
      'Visual design work capturing the ecological character of Celery Bog — a nature preserve project blending scientific accuracy with approachable, visually rich graphic design that invites the public in.',
    cover: '/work-celery-1.png',
    coverAlt: 'Celery Bog design',
    accentColor: '#4a7c59',
    steps: [
      {
        title: 'Site Research & Reference',
        description:
          'We studied the Celery Bog habitat — its flora, fauna, and seasonal characteristics — to ensure the design felt authentic and grounded in the real environment visitors would experience.',
        image: '/work-celery-1.png',
        alt: 'Site research and reference',
      },
      {
        title: 'Layout Concept',
        description:
          'Initial layout sketches explored how to structure the visual narrative — balancing informational content with immersive imagery and natural textures that draw the reader into the ecosystem.',
        image: '/work-celery-2.png',
        alt: 'Layout concept',
      },
      {
        title: 'Color & Texture Study',
        description:
          'A natural color palette was derived directly from reference photography of the bog — greens, browns, and muted blues that feel true to the ecosystem without sacrificing visual clarity.',
        image: '/work-celery-3.png',
        alt: 'Color and texture study',
      },
      {
        title: 'Composition Refinement',
        description:
          'The composition was refined through client feedback, tightening the balance between illustration, photography, and informational text to ensure every element earns its place.',
        image: '/work-celery-4.png',
        alt: 'Composition refinement',
      },
      {
        title: 'Final Design',
        description:
          'The finished design — ready for print and environmental installation. A piece that invites visitors to engage with and appreciate the natural world that surrounds them.',
        image: '/work-celery-5.png',
        alt: 'Final Celery Bog design',
      },
    ],
  },
  {
    slug: 'corec',
    title: 'COREC',
    category: 'Brand Identity',
    tagline: 'A brand identity built to energize and endure.',
    description:
      'Comprehensive brand identity design for COREC — from logo exploration through a full brand system. Every touchpoint was designed to communicate energy, community, and lasting professionalism.',
    cover: '/work-corec-1.png',
    coverAlt: 'COREC brand identity',
    accentColor: '#f77f00',
    steps: [
      {
        title: 'Discovery & Research',
        description:
          'We began with stakeholder interviews and competitive landscape analysis, establishing the brand\'s core values, target audience, and strategic positioning before any visual work began.',
        image: '/work-corec-1.png',
        alt: 'Discovery and research',
      },
      {
        title: 'Logo Concepts',
        description:
          'Multiple logo directions were explored, each reflecting a different dimension of the brand. Sketches ranged from abstract marks to wordmarks to combination logos — giving the client real choices.',
        image: '/work-corec-2.png',
        alt: 'Logo concepts',
      },
      {
        title: 'Typography System',
        description:
          'A type system was selected to complement the approved logo direction — pairing a strong display face with a highly legible body font for seamless application across print and digital.',
        image: '/work-corec-3.png',
        alt: 'Typography system',
      },
      {
        title: 'Color Palette',
        description:
          'The brand color palette was developed to feel energetic yet professional, with primary and secondary colors specified for both digital (RGB/HEX) and print (CMYK/Pantone) use.',
        image: '/work-corec-4.png',
        alt: 'Color palette',
      },
      {
        title: 'Brand Applications',
        description:
          'The identity was applied across key brand touchpoints — uniforms, signage, digital graphics, and printed collateral — to test cohesion and consistency across real-world contexts.',
        image: '/work-corec-5.png',
        alt: 'Brand applications',
      },
      {
        title: 'Mockup Presentation',
        description:
          'Photorealistic mockups demonstrated how the brand identity performs in real-world applications, enabling confident client sign-off before final production and deployment.',
        image: '/work-corec-6.png',
        alt: 'Mockup presentation',
      },
      {
        title: 'Final Brand Identity',
        description:
          'The complete brand system delivered — logo files in all formats, a comprehensive brand style guide, and a full asset library ready for deployment across every channel and medium.',
        image: '/work-corec-7.png',
        alt: 'Final brand identity',
      },
    ],
  },
  {
    slug: 'responsive-web-design',
    title: 'Responsive Web Design',
    category: 'Web Design',
    tagline: 'Seamless on every screen, every time.',
    description:
      'A responsive website built with a mobile-first approach — adapting fluidly across phone, tablet, and desktop breakpoints while maintaining visual consistency and user clarity at every size.',
    cover: '/work-responsive-1.png',
    coverAlt: 'Responsive web design',
    accentColor: '#48cae4',
    steps: [
      {
        title: 'Desktop Layout',
        description:
          'The full-width desktop layout was designed first, establishing the content hierarchy, navigation structure, grid system, and primary visual language that would scale down to all breakpoints.',
        image: '/work-responsive-1.png',
        alt: 'Desktop layout design',
      },
      {
        title: 'Mobile Breakpoint',
        description:
          'The layout was adapted for small screens — reordering content blocks, adjusting typography scales, collapsing navigation patterns, and optimizing touch targets for a seamless mobile experience.',
        image: '/work-responsive-2.png',
        alt: 'Mobile breakpoint design',
      },
    ],
  },
  {
    slug: 'uxui-redesign',
    title: 'UX / UI Redesign',
    category: 'UX / UI Design',
    tagline: 'Redesigned from the user\'s perspective, outward.',
    description:
      'A comprehensive UX/UI redesign that audited an existing digital product, identified friction points, and delivered a cleaner, more intuitive interface grounded in user research and modern design principles.',
    cover: '/work-uxui-1.png',
    coverAlt: 'UX/UI redesign',
    accentColor: '#7b2ff7',
    steps: [
      {
        title: 'User Research & Audit',
        description:
          'We audited the existing interface, documenting pain points and usability gaps through user testing and heuristic evaluation. No assumptions — every change is backed by observed user behavior.',
        image: '/work-uxui-1.png',
        alt: 'User research and audit',
      },
      {
        title: 'Wireframe Concepts',
        description:
          'Low-fidelity wireframes mapped the new information architecture and interaction flows — getting alignment on structure and hierarchy before committing to any visual design decisions.',
        image: '/work-uxui-2.png',
        alt: 'Wireframe concepts',
      },
      {
        title: 'High-Fidelity Screens',
        description:
          'High-fidelity designs were built in the full brand language, applying the design system consistently across all key screens, states, and edge cases.',
        image: '/work-uxui-3.png',
        alt: 'High-fidelity screens',
      },
      {
        title: 'Mobile UX Flow',
        description:
          'The mobile experience was designed in parallel, ensuring the redesigned flows translated cleanly to touch interactions, gesture-based navigation, and smaller viewports.',
        image: '/work-uxui-4.png',
        alt: 'Mobile UX flow',
      },
      {
        title: 'Final Polished Design',
        description:
          'The complete redesigned interface, annotated and delivered as a developer-ready handoff — including component specs, spacing tokens, interaction notes, and asset exports.',
        image: '/work-uxui-5.png',
        alt: 'Final polished design',
      },
    ],
  },
]
