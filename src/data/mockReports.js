export const MOCK_REPORTS = [
  {
    id: 'RW-2026-001284',
    title: 'Severe Asphalt Surface Cracks & Pothole Hazard on Uppal Corridor',
    description: 'Deep asphalt pavement cracking, pothole formation, and discarded bottle/debris obstructing shoulder lane on Uppal - Narapally Road (NH 163 Warangal Highway near flyover). Vehicles and two-wheelers swerving abruptly, creating severe skidding risks.',
    category: 'Potholes',
    severity: 'High',
    safetyImpact: 'High',
    location: 'Uppal - Narapally Road (NH 163), Medchal-Malkajgiri, Hyderabad',
    lat: 17.4125,
    lng: 78.6015,
    ward: 'Uppal Circle 2 / Peerzadiguda Municipality',
    authority: 'GHMC Uppal Circle - Roads & Infrastructure Wing',
    authorityEmail: 'ee.roads.uppal@ghmc.gov.in',
    authorityConfidence: 94,
    images: [
      '/uppal_narapally_road.jpg',
      'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&auto=format&fit=crop&q=80'
    ],
    status: 'Awaiting Response',
    createdAt: '8 Oct 2026, 12:14 AM',
    updatedAt: '8 Oct 2026, 12:15 AM',
    relatedProject: {
      name: 'NH 163 Uppal - Narapally 6-Lane Elevated Corridor & Road Widening Project',
      status: 'Under Construction',
      authority: 'National Highways Authority of India (NHAI) & R&B Dept Telangana',
      contractor: 'NCC Limited - Road Infra Division',
      reference: 'Tender Ref # NHAI/TEL/NH163/2024-882'
    },
    emailStatus: {
      sent: true,
      delivered: true,
      read: true,
      responseReceived: false,
      lastChecked: '8 Oct 2026, 10:30 AM'
    },
    timeline: [
      { title: 'Report Created', description: 'Citizen submitted road evidence with GPS geotag', timestamp: '8 Oct 2026, 12:14 AM', status: 'completed' },
      { title: 'AI Analysis Completed', description: 'Severity classified as High. Surface cracking & pothole verified.', timestamp: '8 Oct 2026, 12:15 AM', status: 'completed' },
      { title: 'Authority Identified', description: 'GHMC Uppal Roads Department & NHAI Circle routed automatically', timestamp: '8 Oct 2026, 12:15 AM', status: 'completed' },
      { title: 'Report Sent', description: 'Formal road safety docket dispatched to municipal inbox', timestamp: '8 Oct 2026, 12:15 AM', status: 'completed' },
      { title: 'Awaiting Response', description: 'Municipal SLA active (48 hours resolution window)', timestamp: 'Pending', status: 'current' },
      { title: 'Work Assigned & Resolved', description: 'Road patch crew scheduled', timestamp: 'Pending', status: 'pending' }
    ],
    followUpAnswers: {
      'How long has this problem existed?': 'A few days',
      'Does this problem create a safety risk?': 'Yes',
      'Is traffic affected?': 'Severely',
      'Are pedestrians affected?': 'Yes'
    },
    impactFactors: [
      'Two-wheeler skidding and wheel entrapment risk',
      'Highway shoulder bottleneck & abrupt vehicular swerving',
      'Plastic debris blocking roadside drainage channel'
    ],
    upvotes: 42,
    userUpvoted: false,
    citizenName: 'Sai Kiran',
    citizenEmail: 'saikirankvdd06@gmail.com'
  },
  {
    id: 'RW-2026-001210',
    title: 'Crater Pothole near Narapally Bus Stop',
    description: 'A deep 1.5-foot asphalt crater has opened near the Narapally bus stop shelter. Transit buses and private vehicles are forced to stop abruptly, causing rear-end collision hazards.',
    category: 'Potholes',
    severity: 'High',
    safetyImpact: 'High',
    location: 'Narapally Bus Stop, Warangal Highway (NH 163), Hyderabad',
    lat: 17.4140,
    lng: 78.6040,
    ward: 'Peerzadiguda Ward 4, Medchal-Malkajgiri',
    authority: 'GHMC Uppal Circle & Peerzadiguda Municipality',
    authorityEmail: 'ee.roads.uppal@ghmc.gov.in',
    authorityConfidence: 93,
    images: [
      'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&auto=format&fit=crop&q=80'
    ],
    status: 'Sent',
    createdAt: '6 Oct 2026, 04:30 PM',
    updatedAt: '6 Oct 2026, 04:35 PM',
    relatedProject: {
      name: 'NH 163 Uppal - Narapally Elevated Corridor Project',
      status: 'Under Construction',
      authority: 'NHAI Regional Office',
      contractor: 'NCC Limited',
      reference: 'Tender Ref # NHAI/TEL/NH163/2024-882'
    },
    emailStatus: {
      sent: true,
      delivered: true,
      read: true,
      responseReceived: false,
      lastChecked: '7 Oct 2026, 09:00 AM'
    },
    timeline: [
      { title: 'Report Created', description: 'Citizen submitted photo with bus stop GPS', timestamp: '6 Oct 2026, 04:30 PM', status: 'completed' },
      { title: 'AI Analysis Completed', description: 'Deep crater pothole detected near transit stop', timestamp: '6 Oct 2026, 04:32 PM', status: 'completed' },
      { title: 'Authority Identified', description: 'Peerzadiguda Municipal Engineering Division', timestamp: '6 Oct 2026, 04:33 PM', status: 'completed' },
      { title: 'Report Sent', description: 'Complaint #RW-1210 emailed to executive engineer', timestamp: '6 Oct 2026, 04:35 PM', status: 'completed' },
      { title: 'Awaiting Response', description: 'Field inspector dispatched for cold-mix patch assignment', timestamp: 'Pending', status: 'current' }
    ],
    followUpAnswers: {
      'How long has this road problem existed?': 'Several weeks',
      'Does this problem create a safety risk for two-wheelers?': 'Yes',
      'Is traffic affected during peak commute hours?': 'Severely'
    },
    impactFactors: ['Bus transit bottleneck', 'Vehicle axle damage risk', 'High collision potential'],
    upvotes: 31,
    userUpvoted: false,
    citizenName: 'Kavitha R',
    citizenEmail: 'kavitha.r@gmail.com'
  },
  {
    id: 'RW-2026-001198',
    title: 'Road Shoulder Degradation & Loose Gravel',
    description: 'Eroded carriageway shoulder with accumulation of loose stone aggregate along the outer curve near Narapally lake bypass lane.',
    category: 'Road Damage',
    severity: 'Medium',
    safetyImpact: 'Medium',
    location: 'Narapally Lake Bypass Road, Medchal-Malkajgiri',
    lat: 17.4110,
    lng: 78.5990,
    ward: 'Uppal Circle 2',
    authority: 'GHMC Roads & Infra Wing',
    authorityEmail: 'ee.roads.uppal@ghmc.gov.in',
    authorityConfidence: 91,
    images: [
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop&q=80'
    ],
    status: 'Under Investigation',
    createdAt: '4 Oct 2026, 11:20 AM',
    updatedAt: '5 Oct 2026, 02:15 PM',
    relatedProject: null,
    emailStatus: {
      sent: true,
      delivered: true,
      read: true,
      responseReceived: true,
      lastChecked: '5 Oct 2026, 02:15 PM'
    },
    timeline: [
      { title: 'Report Created', description: 'Submitted by citizen rider', timestamp: '4 Oct 2026, 11:20 AM', status: 'completed' },
      { title: 'AI Analysis Completed', description: 'Shoulder erosion & loose aggregate identified', timestamp: '4 Oct 2026, 11:22 AM', status: 'completed' },
      { title: 'Authority Identified', description: 'GHMC Uppal Circle 2 Maintenance Wing', timestamp: '4 Oct 2026, 11:25 AM', status: 'completed' },
      { title: 'Under Investigation', description: 'Junior Engineer visited site for estimate', timestamp: '5 Oct 2026, 02:15 PM', status: 'completed' }
    ],
    impactFactors: ['Two-wheeler skidding on loose gravel', 'Shoulder drop-off hazard'],
    upvotes: 14,
    userUpvoted: false,
    citizenName: 'Vikram S',
    citizenEmail: 'vikram.s@gmail.com'
  },
  {
    id: 'RW-2026-001150',
    title: 'Damaged Median Barrier on Warangal Highway',
    description: 'Broken concrete crash barrier along the central divider of NH 163, with exposed steel rebar encroaching into the fast overtaking lane.',
    category: 'Bridges & Flyovers',
    severity: 'High',
    safetyImpact: 'High',
    location: 'Warangal Highway (NH 163 Km 14), Hyderabad',
    lat: 17.4150,
    lng: 78.6090,
    ward: 'Uppal Circle 2',
    authority: 'NHAI Regional Office Hyderabad & GHMC',
    authorityEmail: 'ro.hyderabad@nhai.org',
    authorityConfidence: 96,
    images: [
      'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f8?w=800&auto=format&fit=crop&q=80'
    ],
    status: 'Awaiting Response',
    createdAt: '1 Oct 2026, 09:15 PM',
    updatedAt: '1 Oct 2026, 09:20 PM',
    relatedProject: {
      name: 'NH 163 Warangal Highway Maintenance & Safety Barrier Package',
      status: 'Under Construction',
      authority: 'NHAI Project Implementation Unit',
      contractor: 'NCC Limited',
      reference: 'Tender Ref # NHAI/TEL/NH163/2024-882'
    },
    emailStatus: {
      sent: true,
      delivered: true,
      read: true,
      responseReceived: false,
      lastChecked: '2 Oct 2026, 08:00 AM'
    },
    timeline: [
      { title: 'Report Created', description: 'Emergency barrier damage logged', timestamp: '1 Oct 2026, 09:15 PM', status: 'completed' },
      { title: 'AI Analysis Completed', description: 'Rebar encroachment & median impact verified', timestamp: '1 Oct 2026, 09:17 PM', status: 'completed' },
      { title: 'Authority Identified', description: 'NHAI Highway Safety Patrol & GHMC', timestamp: '1 Oct 2026, 09:18 PM', status: 'completed' },
      { title: 'Emergency Dispatch Sent', description: 'Warning CCed to Highway Patrol Control', timestamp: '1 Oct 2026, 09:20 PM', status: 'completed' }
    ],
    impactFactors: ['Exposed steel rebar hazard', 'High speed collision risk'],
    upvotes: 23,
    userUpvoted: false,
    citizenName: 'Rahul Verma',
    citizenEmail: 'rahul.verma@gmail.com'
  },
  {
    id: 'RW-2026-000982',
    title: 'Flickering Streetlight & Blind Junction Hazard',
    description: 'Illumination failure on streetlight pole #42 outside Mindspace junction. Light flickers and remains dark during peak commute hours, creating dangerous blind spots.',
    category: 'Signs & Road Markings',
    severity: 'Medium',
    safetyImpact: 'Medium',
    location: 'Hitech City Mindspace Junction, Hyderabad',
    lat: 17.4474,
    lng: 78.3762,
    ward: 'Ward 105 (Madhapur), Circle 20',
    authority: 'TSSPDCL & GHMC Electrical Dept',
    authorityEmail: 'electrical.serilingampally@ghmc.gov.in',
    authorityConfidence: 91,
    images: [
      'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=800&auto=format&fit=crop&q=80'
    ],
    status: 'Resolved',
    createdAt: '28 Sep 2026, 08:30 PM',
    updatedAt: '30 Sep 2026, 04:15 PM',
    relatedProject: null,
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
      { title: 'Report Sent', description: 'Formal complaint generated', timestamp: '28 Sep 2026, 08:32 PM', status: 'completed' },
      { title: 'Response Received', description: 'Line maintenance team scheduled replacement LED luminaire', timestamp: '29 Sep 2026, 11:00 AM', status: 'completed' },
      { title: 'Resolved', description: 'Bulb and ballast replaced. Verified illuminated by ward inspector.', timestamp: '30 Sep 2026, 04:15 PM', status: 'completed' }
    ],
    impactFactors: ['Night pedestrian visibility hazard', 'Junction collision risk'],
    upvotes: 18,
    userUpvoted: false,
    citizenName: 'Sai Kiran',
    citizenEmail: 'saikirankvdd06@gmail.com'
  },
  {
    id: 'RW-2026-000741',
    title: 'Unbarricaded Road Trench & Open Excavation',
    description: 'Road excavation trench left open without safety barricades or reflective warning tape across pedestrian crossing lane near Kukatpally Metro.',
    category: 'Road Construction',
    severity: 'High',
    safetyImpact: 'High',
    location: 'Kukatpally Housing Board Road, Hyderabad',
    lat: 17.4849,
    lng: 78.4138,
    ward: 'Ward 121 (Kukatpally), Circle 24',
    authority: 'GHMC Engineering & Infra Wing',
    authorityEmail: 'ee.kukatpally@ghmc.gov.in',
    authorityConfidence: 89,
    images: [
      'https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?w=800&auto=format&fit=crop&q=80'
    ],
    status: 'Sent',
    createdAt: '20 Sep 2026, 09:12 AM',
    updatedAt: '20 Sep 2026, 09:15 AM',
    relatedProject: {
      name: 'Kukatpally Stormwater Pipeline Utility Trenching',
      status: 'Under Construction',
      authority: 'GHMC Project Wing',
      contractor: 'L&T Infrastructure Projects',
      reference: 'Tender Ref # GHMC/PRJ/KKP/2025-412'
    },
    emailStatus: {
      sent: true,
      delivered: true,
      read: false,
      responseReceived: false,
      lastChecked: '20 Sep 2026, 06:00 PM'
    },
    timeline: [
      { title: 'Report Created', description: 'Citizen submitted trench hazard notice', timestamp: '20 Sep 2026, 09:12 AM', status: 'completed' },
      { title: 'AI Analysis Completed', description: 'Unbarricaded trench detected', timestamp: '20 Sep 2026, 09:13 AM', status: 'completed' },
      { title: 'Authority Identified', description: 'GHMC Kukatpally Engineering Wing', timestamp: '20 Sep 2026, 09:13 AM', status: 'completed' },
      { title: 'Report Sent', description: 'Safety compliance warning dispatched', timestamp: '20 Sep 2026, 09:15 AM', status: 'completed' },
      { title: 'Awaiting Response', description: 'Site engineer warning issued', timestamp: 'Pending', status: 'current' }
    ],
    impactFactors: ['Vehicle damage', 'Pedestrian fall hazard', 'Nighttime hazard'],
    upvotes: 29,
    userUpvoted: false,
    citizenName: 'Sai Kiran',
    citizenEmail: 'saikirankvdd06@gmail.com'
  },
  {
    id: 'RW-2026-001305',
    title: 'Severe Storm Drain Overflow & Waterlogged Roadway',
    description: 'Open storm drain overflowing across Secunderabad Station Road following rain. High water pooling obscures road surface potholes and causes vehicle stalling.',
    category: 'Waterlogging & Drainage',
    severity: 'Critical',
    safetyImpact: 'Critical',
    location: 'Secunderabad Station Road, Hyderabad',
    lat: 17.4399,
    lng: 78.5018,
    ward: 'Ward 147 (Secunderabad Cantt)',
    authority: 'HMWSSB & GHMC Maintenance',
    authorityEmail: 'grievances@hmwssb.gov.in',
    authorityConfidence: 96,
    images: [
      'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f8?w=800&auto=format&fit=crop&q=80'
    ],
    status: 'Awaiting Response',
    createdAt: '4 Oct 2026, 05:22 PM',
    updatedAt: '4 Oct 2026, 05:25 PM',
    relatedProject: null,
    emailStatus: {
      sent: true,
      delivered: true,
      read: true,
      responseReceived: false,
      lastChecked: '5 Oct 2026, 09:00 AM'
    },
    timeline: [
      { title: 'Report Created', description: 'Emergency waterlogging flagged', timestamp: '4 Oct 2026, 05:22 PM', status: 'completed' },
      { title: 'AI Analysis Completed', description: 'Waterlogging & open drain severity: Critical', timestamp: '4 Oct 2026, 05:23 PM', status: 'completed' },
      { title: 'Authority Identified', description: 'HMWSSB O&M Division 7', timestamp: '4 Oct 2026, 05:24 PM', status: 'completed' },
      { title: 'Emergency Dispatch Sent', description: 'Urgent notification sent to HMWSSB & GHMC Control Room', timestamp: '4 Oct 2026, 05:25 PM', status: 'completed' },
      { title: 'Awaiting Response', description: 'Emergency suction vehicle requested', timestamp: 'Pending', status: 'current' }
    ],
    impactFactors: ['Vehicle stalling', 'Severe traffic congestion', 'Submerged road hazard'],
    upvotes: 67,
    userUpvoted: false,
    citizenName: 'Sai Kiran',
    citizenEmail: 'saikirankvdd06@gmail.com'
  }
];

export const NEARBY_SIMILAR_REPORTS = [
  {
    id: 'RW-2026-001210',
    title: 'Crater Pothole near Narapally Bus Stop',
    distance: '340 meters away',
    severity: 'High',
    status: 'Sent',
    createdAt: '2 days ago',
    upvotes: 31,
    lat: 17.4140,
    lng: 78.6040,
    image: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'RW-2026-001198',
    title: 'Road Shoulder Degradation & Loose Gravel',
    distance: '650 meters away',
    severity: 'Medium',
    status: 'Under Investigation',
    createdAt: '4 days ago',
    upvotes: 14,
    lat: 17.4110,
    lng: 78.5990,
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'RW-2026-001150',
    title: 'Damaged Median Barrier on Warangal Highway',
    distance: '1.1 km away',
    severity: 'High',
    status: 'Awaiting Response',
    createdAt: '1 week ago',
    upvotes: 23,
    lat: 17.4150,
    lng: 78.6090,
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f8?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'RW-2026-000982',
    title: 'Flickering Streetlight & Blind Junction Hazard',
    distance: '1.4 km away',
    severity: 'Medium',
    status: 'Resolved',
    createdAt: '2 weeks ago',
    upvotes: 19,
    lat: 17.4090,
    lng: 78.5950,
    image: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'RW-2026-000741',
    title: 'Unbarricaded Road Trench & Open Excavation',
    distance: '1.8 km away',
    severity: 'High',
    status: 'Sent',
    createdAt: '3 weeks ago',
    upvotes: 29,
    lat: 17.4165,
    lng: 78.6110,
    image: 'https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?w=400&auto=format&fit=crop&q=80'
  }
];
