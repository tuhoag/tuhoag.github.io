import type { Talk } from "../types";

const talks: Talk[] = [
  {
    title: 'Introduction to Privacy-preserving Techniques for AI',
    year: 2023,
    month: 5,
    location: 'Online Summer Talk, University of Science, Ho Chi Minh City, Vietnam',
    description: 'This presentation introduces the overview of state-of-the-art privacy-preserving techniques for AI applications: k-Anonymity, Differential Privacy, Homomorphic Encryption, and Federated Learning.',
    links: [
      {
        name: 'Slides',
        url: '/src/assets/slides/Introduction_to_Privacy-preserving_Techniques_for_AI.pdf',
        icon: 'slides'
      }
    ],
  },
  {
    title: 'Private Federated Learning Knowledge Graph Representation Learning',
    year: 2022,
    month: 10,
    location: 'Lab Meeting, University of Insubria, Varese, Italy',
    description: 'This presentation introduces my investigation on the privacy protection techniques for learning knowledge graph representation under federated learning settings by using differential privacy.',
    links: [
      {
        name: 'Slides',
        url: '/src/assets/slides/Private_Federated_Knowledge_Graph_Representation_Learning-Tu Hoang.pdf',
        icon: 'slides'
      }
    ],
  },
  {
    title: 'Time-Aware Anonymization of Knowledge Graphs',
    year: 2022,
    month: 6,
    location: 'the Cyber Security Competence for Research and Innovation Project (CONCORDIA) Meeting, Munich, Germany',
    description: 'This presentation introduces my k-anonymity technique protecting data owners from identity and attribute leakage even though adversaries have access to all published anonymized versions of a knowledge graph.',
    links: [
      {
        name: 'Slides',
        url: '/src/assets/slides/Time-Aware_Anonymization_of_Knowledge_Graphs-Tu_Hoang.pdf',
        icon: 'slides'
      }
    ]
  },
  {
    title: 'Transparency in Proximity Advertising Campaigns',
    year: 2022,
    month: 6,
    location: 'the Cyber Security Competence for Research and Innovation Project (CONCORDIA) Meeting, Munich, Germany',
    description: 'This presentation introduces my blockchain-based platform ensuring the transparency of marketing campaign effectiveness measurement and privacy of participants (marketers, publishers, and customers)',
    links: [
      {
        name: 'Slides',
        url: '/src/assets/slides/Transparency_in_Proximity_Advertising_Campaigns-Tu_Hoang.pdf',
        icon: 'slides'
      }
    ]
  },
  {
    title: 'Differential Privacy: Foundation, Applications, and Challenges',
    year: 2021,
    month: 9,
    location: 'Lab Meeting, University of Insubria, Varese, Italy',
    description: 'This presentation covers basic concepts of differential privacy.',
    links: [
      {
        name: 'Slides',
        url: '/src/assets/slides/Differential_Privacy-Tu_Hoang.pdf',
        icon: 'slides'
      }
    ]
  },
  {
    title: 'Adversarial Machine Learning',
    year: 2020,
    month: 11,
    location: 'Lab Meeting, University of Insubria, Varese, Italy',
    description: 'This presentation introduces some adversarial machine learning attacks.',
    links: [
      {
        name: 'Slides',
        url: '/src/assets/slides/Adversarial_Machine_Learning-Tu_Hoang.pdf',
        icon: 'slides'
      }
    ]
  }
];

export function fetchTalks(): Talk[] {
  return talks.sort((a, b) => {
    if (a.year !== b.year) {
      return b.year - a.year;
    }
    return b.month - a.month;
  });
}