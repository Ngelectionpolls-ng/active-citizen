import { Icons } from '@/components/shared/icons';
import { url } from 'inspector';
import { v4 as uuidv4 } from 'uuid';

export const courses = [
  { id: uuidv4(), course: 'Accountability in Governance', icon: Icons.accountability },
  { id: uuidv4(), course: 'Community Engagement', icon: Icons.community },
  { id: uuidv4(), course: 'Crime & Justice', icon: Icons.crime },
  { id: uuidv4(), course: 'Election Integrity', icon: Icons.election },
  { id: uuidv4(), course: 'Insecurity', icon: Icons.accountability },
  { id: uuidv4(), course: 'Tech Innovation', icon: Icons.tech },
  { id: uuidv4(), course: 'Education', icon: Icons.education },
  { id: uuidv4(), course: 'Campaign Against Misinformation', icon: Icons.community },
  { id: uuidv4(), course: 'Environment Pollution', icon: Icons.election },
  { id: uuidv4(), course: 'Inequality', icon: Icons.election },
  { id: uuidv4(), course: 'Climate Change', icon: Icons.climate },
  { id: uuidv4(), course: 'Healthcare Outreach', icon: Icons.healthcare },
  { id: uuidv4(), course: 'Food Security For Africa', icon: Icons.crime },
  { id: uuidv4(), course: 'Human Rights', icon: Icons.tech },
  { id: uuidv4(), course: 'Citizen Empowerment', icon: Icons.empowerment },
  { id: uuidv4(), course: 'Judiciary Reform In Africa', icon: Icons.judiciary }
];


export const Navlinks = [
  {
    id: uuidv4(),
    name: 'About Us',
    children: [
      { id: uuidv4(), name: 'Who We Are', path: '/about' },
      { id: uuidv4(), name: 'Our Team', path: '/about/team' },
      { id: uuidv4(), name: 'Our Mission', path: '/about/mission' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Our Initiative',
    children: [
      { id: uuidv4(), name: 'Projects', path: '/initiatives/projects' },
      { id: uuidv4(), name: 'Campaigns', path: '/initiatives/campaigns' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Our Impact',
    children: [
      { id: uuidv4(), name: 'Success Stories', path: '/impact/stories' },
      { id: uuidv4(), name: 'Reports & Data', path: '/impact/reports' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Resources',
    children: [
      { id: uuidv4(), name: 'Blog', path: '/resources/blog' },
      { id: uuidv4(), name: 'Publications', path: '/resources/publications' },
      { id: uuidv4(), name: 'Webinars', path: '/resources/webinars' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Contact Us',
    children: [
      { id: uuidv4(), name: 'Support', path: '/contact/support' },
      { id: uuidv4(), name: 'Careers', path: '/contact/careers' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Membership',
    children: [
      { id: uuidv4(), name: 'Join Us', path: '/membership/join' },
      { id: uuidv4(), name: 'Benefits', path: '/membership/benefits' },
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
        description: 'Transparency Accountability Inclusivity Collaboration Empowerment Integrity'
    },
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
    description: "Help us protect our local wildlife park from being turned into a commercial development. We need your support to preserve this vital ecosystem.",
    imageUrl: "https://picsum.photos/seed/picsum/800/800",
    target: 10000,
    current: 7500,
    daysLeft: 15,
  },
  {
    id: "2",
    type: "donation",
    title: "Emergency Relief Fund",
    description: "Support communities affected by recent natural disasters. Your donation will provide essential supplies and aid to those in need.",
    imageUrl: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b",
    target: 50000,
    current: 35000,
    daysLeft: 30,
  },
  {
    id: "3",
    type: "petition",
    title: "Protect Ocean Wildlife",
    description: "Join our campaign to ban single-use plastics and protect marine life from plastic pollution. Every signature counts towards cleaner oceans.",
    imageUrl: "https://picsum.photos/seed/picsum/800/800",
    target: 25000,
    current: 18750,
    daysLeft: 20,
  },
  {
    id: "4",
    type: "donation",
    title: "Education for All",
    description: "Help provide quality education to underprivileged children. Your contribution will fund school supplies, books, and teaching resources.",
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
    target: 75000,
    current: 42000,
    daysLeft: 45,
  },
  {
    id: "5",
    type: "petition",
    title: "Clean Air Initiative",
    description: "Support our petition for stricter air quality regulations in urban areas. Let's work together for cleaner, healthier cities.",
    imageUrl: "https://images.unsplash.com/photo-1530533718754-001d2668365a",
    target: 15000,
    current: 8900,
    daysLeft: 25,
  },
  {
    id: "6",
    type: "donation",
    title: "Community Food Bank",
    description: "Support our local food bank in providing meals to families in need. Every donation helps feed those facing food insecurity.",
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
    target: 30000,
    current: 21500,
    daysLeft: 10,
  },
  {
    id: "7",
    type: "petition",
    title: "Save Historic Theater",
    description: "Help preserve our city's historic theater from demolition. Sign to protect this cultural landmark for future generations.",
    imageUrl: "https://images.unsplash.com/photo-1503095396549-807759245b35",
    target: 20000,
    current: 15800,
    daysLeft: 12,
  },
  {
    id: "8",
    type: "donation",
    title: "Animal Shelter Support",
    description: "Help our local animal shelter provide care for abandoned pets. Your donation supports medical care, food, and shelter improvements.",
    imageUrl: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467",
    target: 40000,
    current: 28900,
    daysLeft: 18,
  },
  {
    id: "9",
    type: "petition",
    title: "Green Transportation",
    description: "Support the expansion of bike lanes and public transit in our city. Sign for sustainable urban mobility.",
    imageUrl: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4",
    target: 12000,
    current: 9200,
    daysLeft: 22,
  },
  {
    id: "10",
    type: "donation",
    title: "Mental Health Services",
    description: "Support accessible mental health services in our community. Your donation helps provide counseling and support programs.",
    imageUrl: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8",
    target: 60000,
    current: 45000,
    daysLeft: 35,
  }
];