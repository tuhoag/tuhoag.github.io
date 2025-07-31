import type { Project } from "../types";

const projects: Project[] = [
  {
    id: 'dl',
    name: 'Distributed / Federated Learning',
    startYear: 2023,
    endYear: undefined,
    imageUrl: '/src/assets/bdl.svg',
    // highlight: true,
    highlightOrder: 3,
    shortDescription: 'This project focuses on enhancing decentralization, security, and privacy using zero-knowledge proofs and blockchain technologies. The work led to a Best Paper Award at IEEE Blockchain 2024 and includes an additional paper currently under review.',
    description: [
      'This project focuses on the development of techniques for distributed and federated learning, allowing for collaborative model training without sharing raw data.',
      'Key challenges include ensuring data privacy, handling heterogeneous data sources, and optimizing communication between participants.'
    ]
  },
  {
    id: 'ssi',
    name: 'Zero-Knowledge Self-Sovereign Identity',
    startYear: 2023,
    endYear: undefined,
    imageUrl: '/src/assets/ssi.svg',
    highlightOrder: 1,
    shortDescription: 'This project explores the privacy, security, and practicality of self-sovereign identity through extending W3C standards and zero-knowledge proofs. This results in a conference paper and a under-review journal paper.',
    description: [
      'This project aims to create a self-sovereign identity framework using zero-knowledge proofs, allowing individuals to control their own identity data without relying on third parties.',
      'The focus is on privacy preservation, security, and user empowerment in digital identity management.'
    ]
  },
  {
    id: 'bi',
    name: 'Blockchain Interoperability',
    startYear: 2023,
    endYear: undefined,
    imageUrl: '/src/assets/zkSSI-cross-chain.svg',
    highlightOrder: 2,
    shortDescription: 'This project explores blockchain interoperability with a focus on privacy, security, and KYC. It supports use cases like cross-chain identity, zk-rollups, zero-knowledge proofs, and zkMixers, with two journal papers under review.',
    description: [
      'This project focuses on enabling interoperability between different rollup solutions on the blockchain, allowing for seamless communication and data exchange.',
      'Key challenges include ensuring security, scalability, and compatibility between various rollup implementations.'
    ]
  },
  {
    id: 'promark',
    name: 'Blockchain-Based Proximity Marketing',
    startYear: 2022,
    endYear: 2024,
    imageUrl: '/src/assets/promark.svg',
    highlightOrder: 4,
    shortDescription: 'This project aims to leverage blockchain technology for proximity marketing, enabling targeted advertising based on user location while preserving privacy. It utilizes multi-party computation, homomorphic cryptography, and zero-knowledge proofs. This work resulted in a journal paper.',
    description: [
      'This project aims to leverage blockchain technology for proximity marketing, enabling targeted advertising based on user location while preserving privacy.',
      'Key challenges include ensuring data security, user consent, and effective ad delivery mechanisms.'
    ]
  },
  {
    id: 'anony',
    name: 'Privacy-Preserving Data Publishing',
    startYear: 2011,
    endYear: 2024,
    imageUrl: '/src/assets/anonygraph.svg',
    // highlightOrder: 5,
    shortDescription: 'This project develops k-anonymity methods for text, relational data, and knowledge graphs to prevent linking and inference attacks while preserving data utility for machine learning. It leverages techniques such as watermarking and discrete optimization, resulting in 6 conference and 2 journal papers.',
    description: [
      'This project focuses on developing techniques for privacy-preserving data publishing, allowing organizations to share data while protecting individual privacy.',
      'Key challenges include ensuring data utility, preventing re-identification, and complying with legal and ethical standards.'
    ]
  }
];

export function fetchHighlightProjects() {
  return projects.filter(project => project.highlightOrder !== undefined).sort((a, b) => a.highlightOrder! - b.highlightOrder!);
}

export function fetchProjects() {
  return projects.sort((a, b) => b.startYear - a.startYear);
}

export function fetchProjectById(id: string) {
  return projects.find(project => project.id === id);
}
