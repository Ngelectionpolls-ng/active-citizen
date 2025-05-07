import { Icons } from '@/components/shared/icons';
import { v4 as uuidv4 } from 'uuid';

export const courses = [
  {
    id: uuidv4(),
    course: 'Accountability in Governance',
    icon: Icons.accountability,
    slug: 'accountability-in-governance',
    description: 'This course explores mechanisms to hold governments and institutions accountable. Participants will learn about transparency, anti-corruption frameworks, public sector audits, and civic engagement strategies that ensure leaders are responsible for their actions and decisions.'
  },
  {
    id: uuidv4(),
    course: 'Community Engagement',
    icon: Icons.community,
    slug: 'community-engagement',
    description: 'Dive into strategies for effective community involvement. This course covers grassroots mobilization, local governance participation, and tools for facilitating inclusive dialogue, empowering communities to take active roles in shaping their future.'
  },
  {
    id: uuidv4(),
    course: 'Crime & Justice',
    icon: Icons.crime,
    slug: 'crime-and-justice',
    description: 'Examine the criminal justice system in depth. Learn about crime prevention, rehabilitation, restorative justice, and how to advocate for reforms that promote equity, fairness, and security for all citizens.'
  },
  {
    id: uuidv4(),
    course: 'Election Integrity',
    icon: Icons.election,
    slug: 'election-integrity',
    description: 'Learn how to uphold free and fair elections. Topics include electoral systems, combating voter fraud, transparency in results, voter education, and monitoring practices that protect democracy and public trust.'
  },
  {
    id: uuidv4(),
    course: 'Insecurity',
    icon: Icons.accountability,
    slug: 'insecurity',
    description: 'This course addresses national and regional insecurity issues such as insurgency, banditry, and civil unrest. It explores root causes, preventive strategies, peacebuilding initiatives, and the role of civic and governmental responses.'
  },
  {
    id: uuidv4(),
    course: 'Tech Innovation',
    icon: Icons.tech,
    slug: 'tech-innovation',
    description: 'Explore how emerging technologies are transforming societies. Learn about digital inclusion, automation, AI, and how tech can solve pressing social, economic, and governance challenges across the continent.'
  },
  {
    id: uuidv4(),
    course: 'Education',
    icon: Icons.education,
    slug: 'education',
    description: 'Tackle the educational gaps with strategies for inclusive learning, curriculum reform, digital education tools, and equitable access. This course empowers you to champion quality education as a tool for development.'
  },
  {
    id: uuidv4(),
    course: 'Campaign Against Misinformation',
    icon: Icons.community,
    slug: 'campaign-against-misinformation',
    description: 'Learn how to identify and combat misinformation and fake news. This course provides tools for critical thinking, media literacy, fact-checking, and strategies to ensure accurate public communication.'
  },
  {
    id: uuidv4(),
    course: 'Environment Pollution',
    icon: Icons.election,
    slug: 'environment-pollution',
    description: 'Understand the causes and consequences of environmental pollution. Learn about waste management, sustainable practices, environmental policy, and how citizens can engage in advocacy for a cleaner planet.'
  },
  {
    id: uuidv4(),
    course: 'Inequality',
    icon: Icons.election,
    slug: 'inequality',
    description: 'This course highlights the structural and systemic causes of inequality. It explores social justice, wealth distribution, gender parity, and policies aimed at promoting fairness and opportunity for all.'
  },
  {
    id: uuidv4(),
    course: 'Climate Change',
    icon: Icons.climate,
    slug: 'climate-change',
    description: 'Study the global climate crisis and its local implications. Learn about mitigation, adaptation strategies, environmental policies, and how communities can become more resilient and sustainable.'
  },
  {
    id: uuidv4(),
    course: 'Healthcare Outreach',
    icon: Icons.healthcare,
    slug: 'healthcare-outreach',
    description: 'Explore health challenges facing underserved populations. This course equips participants with outreach strategies, health education, community mobilization, and health equity frameworks for impactful interventions.'
  },
  {
    id: uuidv4(),
    course: 'Food Security For Africa',
    icon: Icons.crime,
    slug: 'food-security-for-africa',
    description: 'Address the issue of hunger and malnutrition through agricultural reform, food systems innovation, and policy frameworks that ensure food accessibility, affordability, and sustainability in Africa.'
  },
  {
    id: uuidv4(),
    course: 'Human Rights',
    icon: Icons.tech,
    slug: 'human-rights',
    description: 'Gain a thorough understanding of human rights laws, advocacy strategies, and tools for protecting marginalized groups. Learn how to champion dignity, justice, and equality in diverse societies.'
  },
  {
    id: uuidv4(),
    course: 'Citizen Empowerment',
    icon: Icons.empowerment,
    slug: 'citizen-empowerment',
    description: 'Empower citizens through civic education, leadership training, and participatory governance. This course provides strategies to build a more informed, active, and engaged citizenry.'
  },
  {
    id: uuidv4(),
    course: 'Judiciary Reform In Africa',
    icon: Icons.judiciary,
    slug: 'judiciary-reform-in-africa',
    description: 'Explore key areas of judicial reform including access to justice, legal accountability, independence of the judiciary, and how to drive reforms that strengthen the rule of law in African nations.'
  }
];


export const Navlinks = [
  {
    id: uuidv4(),
    name: 'About Us',
    type: 'href', // Indicates this item has children (dropdown)
    href: '/about'
  },
  {
    id: uuidv4(),
    name: 'Our Initiative',
    type: 'section', // Navigates to a section of the page
    path: '#our-initiative',
  },
  {
    id: uuidv4(),
    name: 'Petitions',
    type: 'href', // Navigates to a specific page
    href: '/petitions',
  },
  {
    id: uuidv4(),
    name: 'Campaigns',
    type: 'href', // Navigates to a specific page
    href: '/campaigns',
  },
  {
    id: uuidv4(),
    name: 'Resources',
    type: 'dropdown', // Indicates this item has children (dropdown)
    children: [
      { id: uuidv4(), name: 'Blog', path: '/resources/blog', type: 'href' },
      { id: uuidv4(), name: 'Publications', path: '/resources/publications', type: 'href' },
      { id: uuidv4(), name: 'Webinars', path: '/resources/webinars', type: 'href' },
    ],
  },
];

export const herostats = [
    {
        id: uuidv4(),
        name: 'Community Impact',
        stat: 275,
        icon: Icons.palette,
    },
    {
        id: uuidv4(),
        name: 'Compaign Completed',
        stat: 7857,
        icon: Icons.trumpet,
    },
    {
        id: uuidv4(),
        name: 'Members Accros Africa',
        stat: 7857,
        icon: Icons.hands,
    },
]


export const whoWeAre = [
    {
        id: uuidv4(),
        heading: 'Our Mission',
        description: 'To empower African democracies by promoting transparency, accountability, and the right to access information through advocacy, research, capacity building, and collaborative action.'
    },
    {
        id: uuidv4(),
        heading: 'Our Vision',
        description: 'A thriving African continent where transparent and accountable governance upholds democratic values, empowers citizens, and ensures equitable and sustainable development.'
    },

      {
        id: uuidv4(),
        heading: 'Our Value',
        description: [
            'Transparency',
            'Accountability',
            'Inclusivity',
            'Collaboration',
            'Empowerment',
            'Integrity'
        ]
    
  }
]

export const ourInitiative = [
    {
        id: uuidv4(),
        heading: 'Advocacy For Good Governance',
        description: 'Championing principles of integrity, accountability, and inclusivity in the leadership recruitment process to foster effective and equitable governance for the benefit of all.'
    },
    {
        id: uuidv4(),
        heading: 'Transparency and Accountability ',
        description: 'Promoting openness and responsibility in governance to build trust, ensure fairness, and empower communities through transparency and accountability.'
    },
    {
        id: uuidv4(),
        heading: 'Tech Innovation for Democracy',
        description: 'This program leverages technology to tackle digitalization and AI challenges, combat disinformation, protect vulnerable populations, and promote responsible digital citizenship.'
    },
    {
        id: uuidv4(),
        heading: 'Misinformation in African Democracy',
        description: 'Assessing the level of Misinformation on African Democracy and its impact in undermining Trust, Influencing Elections, and Threatening Inclusive Governance.'
    },
    {
        id: uuidv4(),
        heading: 'Active Citizen Sensitisattion',
        description: 'Empowering individuals through awareness and education to foster active participation, informed decision-making, and collective responsibility in building stronger communities.'
    },
    {
        id: uuidv4(),
        heading: 'Community Engagement',
        description: 'Fostering meaningful connections and collaboration to empower communities, amplify voices, and drive sustainable development through active participation and shared purpose.'
    },
]


export const compaigns = [
  {
    id: uuidv4(),
    imagesrc: '/images/children-1.png',
    summary: 'Construction Of Borehole Project in a Community in Niger State in Nigeria'
  },
  {
    id: uuidv4(),
    imagesrc: '/images/children-2.png',
    summary: 'Judicial Reform to Address Corruption in the Judicial System in Ghana'
  },
  {
    id: uuidv4(),
    imagesrc: '/images/children-3.png',
    summary: 'Campaign fo Electoral Reform in Nigeria to address Rigging'
  },
]

export const needStart = [
  {
    id: uuidv4(),
    imagesrc: '/images/need-1.png',
    summary: 'A Citizen in Need'
  },
  {
    id: uuidv4(),
    imagesrc: '/images/need-2.png',
    summary: 'A Local Community'
  },
  {
    id: uuidv4(),
    imagesrc: '/images/need-3.png',
    summary: 'A National Interest'
  },
]


  // Footer Links Data
  export const footerLinks = [
    {
      title: "Organisation",
      links: [
        { name: "About Us", url: "#" },
        { name: "Our Campaigns", url: "#" },
        { name: "Our Impact", url: "#" },
        { name: "Volunteers and Partners", url: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy", url: "#" },
        { name: "Terms & Condition", url: "#" },
        { name: "Cookies Policy", url: "#" },
        { name: "Contact Us", url: "#" },
      ],
    },
    {
      title: "Resource",
      links: [
        { name: "Events", url: "#" },
        { name: "Membership", url: "#" },
        { name: "Reports", url: "#" },
        { name: "Publications", url: "#" },
      ],
    },
  ];

  // Footer Bottom Links
export  const bottomLinks = [
    { name: "Cookies policy", url: "#" },
    { name: "Legal information", url: "#" },
    { name: "Sitemap", url: "#" },
    { name: "All articles", url: "#" },
  ];

  // Social Media Links
  export const socialLinks = [
    { icon: Icons.facebook, url: "#" },
    { icon: Icons.tiktok, url: "#" },
    { icon: Icons.instagram, url: "#" },
    { icon: Icons.twitter, url: "#" },
  ];


export const mockFeeds = [
  {
    id: "1",
    type: "petition",
    title: "Save Local Wildlife Park",
    description:
      "Help us protect our local wildlife park from being turned into a commercial development. We need your support to preserve this vital ecosystem.",
    imageUrl: "https://picsum.photos/seed/picsum/800/800",
    target: 10000,
    current: 7500,
    daysLeft: 15,
    creatorName: "Emily Stone",
    creatorUsername: "emilystone",
    creatorAvatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
    category: "Climate Change",
  },
  {
    id: "2",
    type: "campaign",
    title: "Emergency Relief Fund",
    description:
      "Support communities affected by recent natural disasters. Your donation will provide essential supplies and aid to those in need.",
    imageUrl: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b",
    target: 50000,
    current: 35000,
    daysLeft: 30,
    creatorName: "James Nolan",
    creatorUsername: "jamesnolan",
    creatorAvatarUrl: "https://randomuser.me/api/portraits/men/2.jpg",
    category: "Insecurity",
  },
  {
    id: "3",
    type: "petition",
    title: "Protect Ocean Wildlife",
    description:
      "Join our campaign to ban single-use plastics and protect marine life from plastic pollution. Every signature counts towards cleaner oceans.",
    imageUrl: "https://picsum.photos/seed/picsum/800/800",
    target: 25000,
    current: 18750,
    daysLeft: 20,
    creatorName: "Sophia Chen",
    creatorUsername: "sophiachen",
    creatorAvatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
    category: "Community Engagement",
  },
  {
    id: "4",
    type: "campaign",
    title: "Education for All",
    description:
      "Help provide quality education to underprivileged children. Your contribution will fund school supplies, books, and teaching resources.",
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
    target: 75000,
    current: 42000,
    daysLeft: 45,
    creatorName: "Marcus Grant",
    creatorUsername: "marcusgrant",
    creatorAvatarUrl: "https://randomuser.me/api/portraits/men/4.jpg",
    category: "Education",
  },
  {
    id: "5",
    type: "petition",
    title: "Clean Air Initiative",
    description:
      "Support our petition for stricter air quality regulations in urban areas. Let's work together for cleaner, healthier cities.",
    imageUrl: "https://images.unsplash.com/photo-1530533718754-001d2668365a",
    target: 15000,
    current: 8900,
    daysLeft: 25,
    creatorName: "Amara Patel",
    creatorUsername: "amarapatel",
    creatorAvatarUrl: "https://randomuser.me/api/portraits/women/5.jpg",
    category: "Environment Pollution",
  },
  {
    id: "6",
    type: "campaign",
    title: "Community Food Bank",
    description:
      "Support our local food bank in providing meals to families in need. Every donation helps feed those facing food insecurity.",
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
    target: 30000,
    current: 21500,
    daysLeft: 10,
    creatorName: "David Reyes",
    creatorUsername: "davidreyes",
    creatorAvatarUrl: "https://randomuser.me/api/portraits/men/6.jpg",
    category: "Food Security For Africa",
  },
  {
    id: "7",
    type: "petition",
    title: "Save Historic Theater",
    description:
      "Help preserve our city's historic theater from demolition. Sign to protect this cultural landmark for future generations.",
    imageUrl: "https://images.unsplash.com/photo-1503095396549-807759245b35",
    target: 20000,
    current: 15800,
    daysLeft: 12,
    creatorName: "Lily Moore",
    creatorUsername: "lilymoore",
    creatorAvatarUrl: "https://randomuser.me/api/portraits/women/7.jpg",
    category: "Citizen Empowerment",
  },
  {
    id: "8",
    type: "campaign",
    title: "Animal Shelter Support",
    description:
      "Help our local animal shelter provide care for abandoned pets. Your donation supports medical care, food, and shelter improvements.",
    imageUrl: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467",
    target: 40000,
    current: 28900,
    daysLeft: 18,
    creatorName: "Daniel Brooks",
    creatorUsername: "danielbrooks",
    creatorAvatarUrl: "https://randomuser.me/api/portraits/men/8.jpg",
    category: "Human Rights",
  },
  {
    id: "9",
    type: "petition",
    title: "Green Transportation",
    description:
      "Support the expansion of bike lanes and public transit in our city. Sign for sustainable urban mobility.",
    imageUrl: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4",
    target: 12000,
    current: 9200,
    daysLeft: 22,
    creatorName: "Zara Miles",
    creatorUsername: "zaramiles",
    creatorAvatarUrl: "https://randomuser.me/api/portraits/women/9.jpg",
    category: "Election Integrity",
  },
  {
    id: "10",
    type: "campaign",
    title: "Mental Health Services",
    description:
      "Support accessible mental health services in our community. Your donation helps provide counseling and support programs.",
    imageUrl: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8",
    target: 60000,
    current: 45000,
    daysLeft: 35,
    creatorName: "Noah Anderson",
    creatorUsername: "noahanderson",
    creatorAvatarUrl: "https://randomuser.me/api/portraits/men/10.jpg",
    category: "Healthcare Outreach",
  },
];
export const mockPetitions = mockFeeds.filter((feed) => feed.type === "petition");
export const mockDonations = mockFeeds.filter((feed) => feed.type !== "petition");
export const Industries = [
  { name: "Agriculture", value: "agriculture" },
  { name: "Manufacturing", value: "manufacturing" },
  { name: "Retail", value: "retail" },
  { name: "Financial Services", value: "financial_services" },
  { name: "Technology", value: "technology" },
  { name: "Healthcare", value: "healthcare" },
  { name: "Education", value: "education" },
  { name: "Transportation", value: "transportation" },
  { name: "Construction", value: "construction" },
  { name: "Mining", value: "mining" },
  { name: "Energy", value: "energy" },
  { name: "Tourism", value: "tourism" },
  { name: "Other", value: "other" }
];
