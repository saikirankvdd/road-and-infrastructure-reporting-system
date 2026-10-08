import { CivicReportItem } from '../types';

export const SEED_REPORTS: CivicReportItem[] = [
  {
    id: 'CR-2026-001284',
    title: 'Road damage & bottle hazard on Uppal - Narapally Road',
    description: 'Asphalt cracks, pothole, and discarded plastic bottle debris obstructing the shoulder lane on Uppal - Narapally Road near the flyover stretch. Vehicles and two-wheelers are swerving abruptly, causing high collision and skidding risks.',
    category: 'Roads & Potholes',
    severity: 'High',
    location: 'Uppal - Narapally Road (NH 163), Medchal-Malkajgiri, Hyderabad',
    lat: 17.4125,
    lng: 78.6015,
    ward: 'Uppal Circle 2 / Peerzadiguda Municipality, Medchal-Malkajgiri',
    authority: 'GHMC Uppal Circle - Roads & Infrastructure Wing',
    authorityEmail: 'ee.roads.uppal@ghmc.gov.in',
    images: [
      '/uppal_narapally_road.jpg',
      'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&auto=format&fit=crop&q=80'
    ],
    status: 'Awaiting Response',
    createdAt: '8 Oct 2026, 12:14 AM',
    updatedAt: '8 Oct 2026, 12:15 AM',
    emailStatus: {
      sent: true,
      delivered: true,
      read: true,
      responseReceived: false,
      lastChecked: '8 Oct 2026, 10:30 AM'
    },
    timeline: [
      { title: 'Report Created', description: 'Citizen submitted report with real photo evidence and GPS geotag', timestamp: '8 Oct 2026, 12:14 AM', status: 'completed' },
      { title: 'AI Analysis Completed', description: 'Severity classified as High. Uppal Circle 2 jurisdiction identified', timestamp: '8 Oct 2026, 12:15 AM', status: 'completed' },
      { title: 'Authority Identified (GHMC Uppal)', description: 'GHMC Uppal Roads Department routed automatically', timestamp: '8 Oct 2026, 12:15 AM', status: 'completed' },
      { title: 'Report Sent', description: 'Formal civic docket dispatched to municipal inbox and Gmail web', timestamp: '8 Oct 2026, 12:15 AM', status: 'completed' },
      { title: 'Awaiting Response', description: 'Municipal SLA active (48 hours resolution window)', timestamp: 'Pending', status: 'current' },
      { title: 'Work Assigned & Resolved', description: 'Road maintenance crew scheduled for debris removal & patch work', timestamp: 'Pending', status: 'pending' }
    ],
    followUpAnswers: {
      'How long has this problem existed?': 'A few days',
      'Does this problem create a safety risk?': 'Yes',
      'Is traffic affected?': 'Severely'
    },
    impactFactors: ['Vehicle safety risk', 'Traffic disruption', 'Pedestrian and cyclist skidding hazard'],
    upvotes: 42,
    citizenName: 'Sai Kiran',
    citizenEmail: 'saikirankvdd06@gmail.com'
  },
  {
    id: 'CR-2026-000982',
    title: 'Broken Streetlight',
    description: 'Streetlight pole #42 outside Mindspace junction flickers and remains dark during peak commute hours, creating blind spots.',
    category: 'Street Lights',
    severity: 'Medium',
    location: 'Hitech City, Hyderabad',
    lat: 17.4474,
    lng: 78.3762,
    ward: 'Ward 105 (Madhapur), Circle 20',
    authority: 'TSSPDCL & GHMC Electrical Dept',
    authorityEmail: 'electrical.serilingampally@ghmc.gov.in',
    images: [
      'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=800&auto=format&fit=crop&q=80'
    ],
    status: 'Resolved',
    createdAt: '28 Sep 2026, 08:30 PM',
    updatedAt: '30 Sep 2026, 04:15 PM',
    emailStatus: {
      sent: true,
      delivered: true,
      read: true,
      responseReceived: true,
      lastChecked: '30 Sep 2026, 04:15 PM'
    },
    timeline: [
      { title: 'Report Created', description: 'Logged by citizen', timestamp: '28 Sep 2026, 08:30 PM', status: 'completed' },
      { title: 'AI Analysis Completed', description: 'Pole #42 geolocated', timestamp: '28 Sep 2026, 08:31 PM', status: 'completed' },
      { title: 'Authority Identified', description: 'TSSPDCL Serilingampally Substation', timestamp: '28 Sep 2026, 08:31 PM', status: 'completed' },
      { title: 'Report Sent', description: 'Formal complaint #GHMC-ELEC-982 generated', timestamp: '28 Sep 2026, 08:32 PM', status: 'completed' },
      { title: 'Response Received', description: 'Line maintenance team scheduled replacement LED luminaire', timestamp: '29 Sep 2026, 11:00 AM', status: 'completed' },
      { title: 'Resolved', description: 'Bulb and ballast replaced. Verified illuminated by ward inspector.', timestamp: '30 Sep 2026, 04:15 PM', status: 'completed' }
    ],
    impactFactors: ['Night pedestrian visibility hazard', 'Crime deterrent failure'],
    upvotes: 18,
    citizenName: 'Sai Kiran',
    citizenEmail: 'saikirankvdd06@gmail.com'
  },
  {
    id: 'CR-2026-000741',
    title: 'Garbage Overflow',
    description: 'Commercial dump bins overflowing across the footpath, attracting stray cattle and spreading foul odor into residential lane.',
    category: 'Garbage & Waste',
    severity: 'High',
    location: 'Kukatpally, Hyderabad',
    lat: 17.4849,
    lng: 78.4138,
    ward: 'Ward 121 (Kukatpally), Circle 24',
    authority: 'GHMC - Solid Waste Management',
    authorityEmail: 'swm.kukatpally@ghmc.gov.in',
    images: [
      'https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?w=800&auto=format&fit=crop&q=80'
    ],
    status: 'Sent',
    createdAt: '20 Sep 2026, 09:12 AM',
    updatedAt: '20 Sep 2026, 09:15 AM',
    emailStatus: {
      sent: true,
      delivered: true,
      read: false,
      responseReceived: false,
      lastChecked: '20 Sep 2026, 06:00 PM'
    },
    timeline: [
      { title: 'Report Created', description: 'Citizen submitted sanitary report', timestamp: '20 Sep 2026, 09:12 AM', status: 'completed' },
      { title: 'AI Analysis Completed', description: 'Category: Municipal Solid Waste Overflow', timestamp: '20 Sep 2026, 09:13 AM', status: 'completed' },
      { title: 'Authority Identified', description: 'Sanitary Field Assistant, Kukatpally', timestamp: '20 Sep 2026, 09:13 AM', status: 'completed' },
      { title: 'Report Sent', description: 'Sent to GHMC Swachh Auto Tipper Fleet Control', timestamp: '20 Sep 2026, 09:15 AM', status: 'completed' },
      { title: 'Awaiting Response', description: 'Compactor vehicle dispatch expected in morning shift', timestamp: 'Pending', status: 'current' }
    ],
    impactFactors: ['Public health risk', 'Air & odor pollution', 'Footpath obstruction'],
    upvotes: 29,
    citizenName: 'Sai Kiran',
    citizenEmail: 'saikirankvdd06@gmail.com'
  },
  {
    id: 'CR-2026-001305',
    title: 'Open Storm Drain / Sewage Leak',
    description: 'Manhole lid broken after heavy monsoon showers; contaminated overflow entering pedestrian walkway near metro pillar.',
    category: 'Water & Drainage',
    severity: 'Critical',
    location: 'Secunderabad Station Road, Hyderabad',
    lat: 17.4399,
    lng: 78.5018,
    ward: 'Ward 147 (Secunderabad Cantt)',
    authority: 'HMWSSB (Hyderabad Water Supply & Sewerage Board)',
    authorityEmail: 'grievance@hmwssb.gov.in',
    images: [
      'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f8?w=800&auto=format&fit=crop&q=80'
    ],
    status: 'Awaiting Response',
    createdAt: '4 Oct 2026, 05:22 PM',
    updatedAt: '4 Oct 2026, 05:25 PM',
    emailStatus: {
      sent: true,
      delivered: true,
      read: true,
      responseReceived: false,
      lastChecked: '5 Oct 2026, 09:00 AM'
    },
    timeline: [
      { title: 'Report Created', description: 'Priority emergency flagged', timestamp: '4 Oct 2026, 05:22 PM', status: 'completed' },
      { title: 'AI Analysis Completed', description: 'Sewage contamination and severe fall hazard detected', timestamp: '4 Oct 2026, 05:23 PM', status: 'completed' },
      { title: 'Authority Identified', description: 'HMWSSB Operations & Maintenance Division 7', timestamp: '4 Oct 2026, 05:24 PM', status: 'completed' },
      { title: 'Emergency Dispatch Sent', description: 'Urgent notice CCed to Municipal Commissioner', timestamp: '4 Oct 2026, 05:25 PM', status: 'completed' },
      { title: 'Awaiting Response', description: 'Cordoning barricades requested', timestamp: 'Pending', status: 'current' }
    ],
    impactFactors: ['Severe pedestrian fall hazard', 'Waterborne disease outbreak risk', 'Traffic obstruction'],
    upvotes: 67,
    citizenName: 'Sai Kiran',
    citizenEmail: 'saikirankvdd06@gmail.com'
  },
  {
    id: 'CR-2026-000619',
    title: 'Defective Traffic Signal',
    description: 'Traffic signal light stuck on yellow blinker for 3 days, causing heavy gridlock and near-miss collisions during rush hour.',
    category: 'Traffic Problems',
    severity: 'High',
    location: 'Jubilee Hills Checkpost, Hyderabad',
    lat: 17.4325,
    lng: 78.4072,
    ward: 'Ward 98 (Jubilee Hills), Circle 18',
    authority: 'Hyderabad Traffic Police & GHMC Traffic Cell',
    authorityEmail: 'trafficpolice.hyd@telangana.gov.in',
    images: [
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop&q=80'
    ],
    status: 'Resolved',
    createdAt: '15 Sep 2026, 11:20 AM',
    updatedAt: '17 Sep 2026, 03:00 PM',
    emailStatus: {
      sent: true,
      delivered: true,
      read: true,
      responseReceived: true,
      lastChecked: '17 Sep 2026, 03:00 PM'
    },
    timeline: [
      { title: 'Report Created', description: 'Logged by citizen', timestamp: '15 Sep 2026, 11:20 AM', status: 'completed' },
      { title: 'AI Analysis Completed', description: 'Signal timer motherboard failure identified', timestamp: '15 Sep 2026, 11:21 AM', status: 'completed' },
      { title: 'Authority Identified', description: 'Hyderabad Traffic Police Control Room', timestamp: '15 Sep 2026, 11:21 AM', status: 'completed' },
      { title: 'Report Sent', description: 'Priority dispatch to Signal Engineering Team', timestamp: '15 Sep 2026, 11:22 AM', status: 'completed' },
      { title: 'Resolved', description: 'Micro-controller replaced. Normal signal sequencing restored.', timestamp: '17 Sep 2026, 03:00 PM', status: 'completed' }
    ],
    impactFactors: ['Major intersection traffic jam', 'Accident risk'],
    upvotes: 35,
    citizenName: 'Sai Kiran',
    citizenEmail: 'saikirankvdd06@gmail.com'
  }
];

export const NEARBY_SIMILAR_REPORTS = [
  {
    id: 'CR-2026-001280',
    title: 'Pothole & bottle litter near Narapally Flyover pillar #18',
    distance: '0.3 km away',
    lat: 17.4135,
    lng: 78.6028,
    upvotes: 19,
    status: 'Awaiting Response',
    image: '/uppal_narapally_road.jpg'
  },
  {
    id: 'CR-2026-001272',
    title: 'Plastic bottle debris & broken curb on Peerzadiguda junction',
    distance: '0.7 km away',
    lat: 17.4110,
    lng: 78.5990,
    upvotes: 26,
    status: 'Awaiting Response',
    image: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'CR-2026-001199',
    title: 'Road shoulder depression near Uppal Depot corridor',
    distance: '1.2 km away',
    lat: 17.4152,
    lng: 78.6045,
    upvotes: 14,
    status: 'Under Investigation',
    image: 'https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'CR-2026-001140',
    title: 'Cracked asphalt on Warangal Highway NH 163',
    distance: '1.5 km away',
    lat: 17.4098,
    lng: 78.5970,
    upvotes: 22,
    status: 'Sent',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f8?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'CR-2026-001004',
    title: 'Damaged median barrier & litter near Narapally gate',
    distance: '1.8 km away',
    lat: 17.4160,
    lng: 78.6060,
    upvotes: 38,
    status: 'Awaiting Response',
    image: '/uppal_narapally_road.jpg'
  }
];
