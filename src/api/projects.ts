const projects = [
  {
    id: 'dl',
    name: 'Distributed / Federated Learning',
    startYear: 2023,
    endYear: undefined,
    imageUrl: '/src/assets/bdl.svg',
    highlight: true,
    shortDescription: 'This project anonymizes graphs to prevent linkage and inference attacks by using k-anonymity while ensuring graph quality for machine learning.'
  },
  {
    id: 'ssi',
    name: 'Zero-Knowledge Self-Sovereign Identity',
    startYear: 2023,
    endYear: undefined,
    imageUrl: '/src/assets/ssi.svg',
    highlight: true,
    shortDescription: 'This project anonymizes graphs to prevent linkage and inference attacks by using k-anonymity while ensuring graph quality for machine learning.'
  },
  {
    id: 'bi',
    name: 'Rollup Blockchain Interoperability',
    startYear: 2023,
    endYear: undefined,
    imageUrl: '/src/assets/zkSSI-cross-chain.svg',
    highlight: true,
    shortDescription: 'This project anonymizes graphs to prevent linkage and inference attacks by using k-anonymity while ensuring graph quality for machine learning.'
  },
  {
    id: 'promark',
    name: 'Blockchain-Based Proximity Marketing',
    startYear: 2022,
    endYear: 2024,
    imageUrl: '/src/assets/promark.svg',
    highlight: true,
    shortDescription: 'This project anonymizes graphs to prevent linkage and inference attacks by using k-anonymity while ensuring graph quality for machine learning.'
  },
  {
    id: 'anony',
    name: 'Privacy-Preserving Data Publishing',
    startYear: 2011,
    endYear: 2024,
    imageUrl: '/src/assets/anonygraph.svg',
    highlight: true,
    shortDescription: 'This project anonymizes graphs to prevent linkage and inference attacks by using k-anonymity while ensuring graph quality for machine learning.'
  }
];

export function fetchHighlightProjects() {
  return projects.filter(project => project.highlight === true);
}