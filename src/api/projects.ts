const projects = [
  {
    id: 'dl',
    name: 'Distributed / Federated Learning',
    startYear: 2023,
    endYear: undefined,
    imageUrl: '',
    highlight: true,
    shortDescription: 'This project anonymizes graphs to prevent linkage and inference attacks by using k-anonymity while ensuring graph quality for machine learning.'
  },
  {
    id: 'ssi',
    name: 'Self-Sovereign Identity',
    startYear: 2023,
    endYear: undefined,
    imageUrl: '',
    highlight: true,
    shortDescription: 'This project anonymizes graphs to prevent linkage and inference attacks by using k-anonymity while ensuring graph quality for machine learning.'
  },
  {
    id: 'bi',
    name: 'Blockchain Interoperability',
    startYear: 2023,
    endYear: undefined,
    imageUrl: '',
    highlight: true,
    shortDescription: 'This project anonymizes graphs to prevent linkage and inference attacks by using k-anonymity while ensuring graph quality for machine learning.'
  },
  {
    id: 'promark',
    name: 'Blockchain-Based Proximity Marketing',
    startYear: 2022,
    endYear: 2024,
    imageUrl: '',
    highlight: false,
    shortDescription: 'This project anonymizes graphs to prevent linkage and inference attacks by using k-anonymity while ensuring graph quality for machine learning.'
  },
  {
    id: 'anony',
    name: 'Privacy-Preserving Publishing of Knowledge Graphs',
    startYear: 2011,
    endYear: 2024,
    imageUrl: '',
    highlight: false,
    shortDescription: 'This project anonymizes graphs to prevent linkage and inference attacks by using k-anonymity while ensuring graph quality for machine learning.'
  }
];

export function fetchHighlightProjects() {
  return projects.filter(project => project.highlight === true);
}