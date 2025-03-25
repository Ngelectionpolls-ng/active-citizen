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
