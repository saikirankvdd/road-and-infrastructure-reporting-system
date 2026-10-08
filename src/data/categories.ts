import { CategoryInfo, UserProfile } from '../types';

export const CIVIC_CATEGORIES: CategoryInfo[] = [
  {
    id: 'roads',
    name: 'Roads & Potholes',
    iconName: 'AlertOctagon',
    badgeColor: 'bg-red-50 text-red-600 border-red-200',
    description: 'Crater potholes, damaged asphalt, missing speed-breaker paint, or open trenches.',
    defaultAuthority: 'GHMC - Roads & Infrastructure Department',
    samplePrompt: 'Dangerous road hazard and roadside litter with discarded plastic bottles obstructing traffic on Uppal - Narapally Road (Warangal Highway NH 163). Potholes and debris posing acute safety risk for two-wheelers.',
    sampleImage: '/uppal_narapally_road.jpg'
  },
  {
    id: 'streetlights',
    name: 'Street Lights',
    iconName: 'Lightbulb',
    badgeColor: 'bg-amber-50 text-amber-600 border-amber-200',
    description: 'Non-functioning street lamps, flickering fixtures, broken poles, or unlit corridors.',
    defaultAuthority: 'TSSPDCL & GHMC Electrical Engineering Wing',
    samplePrompt: 'Streetlight pole #42 outside Mindspace junction flickers and remains dark during peak commute hours, creating blind spots.',
    sampleImage: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'garbage',
    name: 'Garbage & Waste',
    iconName: 'Trash2',
    badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    description: 'Overflowing dumpsters, illegal debris dumping, uncollected municipal waste, animal scavenging.',
    defaultAuthority: 'GHMC - Solid Waste Management & Sanitation Wing',
    samplePrompt: 'Commercial garbage bin overflowing across the public walkway, spreading foul smell and obstructing pedestrian movement.',
    sampleImage: 'https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'drainage',
    name: 'Water & Drainage',
    iconName: 'Droplets',
    badgeColor: 'bg-blue-50 text-blue-600 border-blue-200',
    description: 'Clogged storm drains, overflowing sewer manholes, potable pipeline burst, stagnant puddles.',
    defaultAuthority: 'HMWSSB (Hyderabad Water Supply & Sewerage Board)',
    samplePrompt: 'Manhole lid broken after heavy monsoon showers; contaminated sewage overflow entering pedestrian walkway near metro pillar.',
    sampleImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f8?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'traffic',
    name: 'Traffic Problems',
    iconName: 'Car',
    badgeColor: 'bg-rose-50 text-rose-600 border-rose-200',
    description: 'Defective traffic lights, missing pedestrian signals, illegal median openings, bottlenecks.',
    defaultAuthority: 'Hyderabad Traffic Police & GHMC Traffic Engineering Cell',
    samplePrompt: 'Traffic signal at intersection stuck on yellow blinker for 3 days, causing heavy gridlock and near-miss collisions during rush hour.',
    sampleImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'construction',
    name: 'Construction',
    iconName: 'HardHat',
    badgeColor: 'bg-orange-50 text-orange-600 border-orange-200',
    description: 'Uncovered sand/gravel dumping on road, unsafe scaffolding, encroached sidewalks.',
    defaultAuthority: 'GHMC Town Planning & Building Enforcement',
    samplePrompt: 'Ongoing building construction has dumped construction debris on public lane blocking emergency vehicle access without safety signage.',
    sampleImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f8?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'public_spaces',
    name: 'Public Spaces',
    iconName: 'Trees',
    badgeColor: 'bg-teal-50 text-teal-600 border-teal-200',
    description: 'Broken park benches, vandalized public gym equipment, damaged bus shelters.',
    defaultAuthority: 'GHMC Urban Community Development & Parks Wing',
    samplePrompt: 'Bus passenger shelter glass panel shattered and roof leaking onto waiting senior citizens and students.',
    sampleImage: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'environment',
    name: 'Environment',
    iconName: 'Leaf',
    badgeColor: 'bg-green-50 text-green-600 border-green-200',
    description: 'Illegal tree felling, lake encroachment, toxic industrial discharge into waterways.',
    defaultAuthority: 'Telangana State Pollution Control Board (TSPCB)',
    samplePrompt: 'Oily chemical effluents being discharged into the storm channel leading to the neighborhood lake.',
    sampleImage: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'illegal',
    name: 'Illegal Activities',
    iconName: 'ShieldAlert',
    badgeColor: 'bg-purple-50 text-purple-600 border-purple-200',
    description: 'Illegal hoarding banners blocking traffic views, footpath encroachment, unauthorized liquor trade.',
    defaultAuthority: 'GHMC Enforcement, Vigilance & Disaster Management (EV&DM)',
    samplePrompt: 'Huge unauthorized political flex banners tied across electrical poles sagging directly over commuter bus route.',
    sampleImage: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'other',
    name: 'Other Issues',
    iconName: 'HelpCircle',
    badgeColor: 'bg-slate-50 text-slate-600 border-slate-200',
    description: 'Uncategorized civic issues, stray dog menace, missing street name signboards.',
    defaultAuthority: 'Municipal Corporation Central Grievance Redressal Cell',
    samplePrompt: 'Street name signboards destroyed during telecom cable trenching; delivery and emergency ambulances getting lost.',
    sampleImage: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=800&auto=format&fit=crop&q=80'
  }
];

export const INITIAL_USER = {
  name: 'Sai Kiran',
  email: 'saikirankvdd06@gmail.com',
  avatarText: 'S',
  phone: '+91 98490 12840',
  city: 'Hyderabad',
  ward: 'Ward 138 (Malkajgiri), Circle 28',
  isLoggedIn: true,
  reportsSubmitted: 4,
  issuesResolved: 2
};

export const GUEST_USER: UserProfile = {
  name: 'Guest Citizen',
  email: '',
  avatarText: 'G',
  phone: '',
  city: 'Hyderabad',
  ward: 'Uppal - Narapally Circle',
  isLoggedIn: false,
  reportsSubmitted: 0,
  issuesResolved: 0
};
