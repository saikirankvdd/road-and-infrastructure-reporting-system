export const ROAD_CATEGORIES = [
  {
    id: 'potholes',
    title: '🕳 Potholes',
    name: 'Potholes',
    iconName: 'AlertOctagon',
    description: 'Deep road surface holes, asphalt crater formation, and structural surface depressions.',
    severity: 'High',
    examples: ['Wheel entrapment holes', 'Asphalt surface craters', 'Sunken utility covers']
  },
  {
    id: 'road-damage',
    title: '🚧 Road Damage',
    name: 'Road Damage',
    iconName: 'AlertTriangle',
    description: 'Cracked asphalt, road edge collapse, surface erosion, and pavement degradation.',
    severity: 'High',
    examples: ['Longitudinal cracks', 'Edge failure', 'Raveling & loose gravel']
  },
  {
    id: 'junction-safety',
    title: '🚦 Junction & Traffic Safety',
    name: 'Junction & Traffic Safety',
    iconName: 'Car',
    description: 'Unsafe intersection geometry, blind corners, broken traffic signals, and hazardous merging lanes.',
    severity: 'Critical',
    examples: ['Failed signal heads', 'Unmarked junction turn', 'Blind spot hazards']
  },
  {
    id: 'signs-markings',
    title: '🪧 Signs & Road Markings',
    name: 'Signs & Road Markings',
    iconName: 'Layers',
    description: 'Missing or damaged speed signs, faded zebra crossings, unpainted lane dividers, and obscured direction boards.',
    severity: 'Medium',
    examples: ['Faded pedestrian lines', 'Knocked-down signpost', 'Missing speed bump paint']
  },
  {
    id: 'footpaths-crossings',
    title: '🚸 Footpaths & Crossings',
    name: 'Footpaths & Crossings',
    iconName: 'UserCheck',
    description: 'Broken sidewalk pavers, obstructed pedestrian paths, broken kerbs, and unsafe pedestrian refuge islands.',
    severity: 'Medium',
    examples: ['Encroached footpath', 'Broken paving slabs', 'Unsafe curb ramps']
  },
  {
    id: 'waterlogging-drainage',
    title: '🌧 Waterlogging & Drainage',
    name: 'Waterlogging & Drainage',
    iconName: 'Droplets',
    description: 'Rainwater pooling on carriageway, blocked storm culverts, open drains overflowing onto roadways.',
    severity: 'Critical',
    examples: ['Carriageway pooling', 'Submerged potholes', 'Clogged roadside gullies']
  },
  {
    id: 'road-construction',
    title: '🏗 Road Construction',
    name: 'Road Construction',
    iconName: 'HardHat',
    description: 'Unbarricaded excavation trenches, hazardous construction material dumps, and missing night warning lights.',
    severity: 'High',
    examples: ['Unlit work zone', 'Exposed utility pipe', 'Missing safety cones']
  },
  {
    id: 'bridges-flyovers',
    title: '🌉 Bridges & Flyovers',
    name: 'Bridges & Flyovers',
    iconName: 'Building2',
    description: 'Expansion joint gaps, damaged guardrails, bridge deck potholes, and flyover approach road settling.',
    severity: 'Critical',
    examples: ['Expansion joint bump', 'Broken flyover barrier', 'Deck slab cracks']
  },
  {
    id: 'other-safety',
    title: '⚠ Other Road Safety Issues',
    name: 'Other Road Safety Issues',
    iconName: 'HelpCircle',
    description: 'Fallen roadside trees, loose overhead cables, oil spills, and acute road infrastructure hazards.',
    severity: 'Medium',
    examples: ['Roadside obstruction', 'Low hanging cable', 'Spilled oil slick']
  }
];
