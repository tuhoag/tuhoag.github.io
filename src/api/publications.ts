import type { Publication } from "../types";

const authors = [
  {
    name: 'Anh-Tu Hoang',
    orcid: '0000-0002-1027-3905',
    emails: ['tu.hoang@tuhh.de', 'contact@tuhoang.me'],
    institute: 'Hamburg University of Technology'
  },
  {
    name: 'Ahmed Lekssays',
    orcid: '',
    emails: [],
    institute: '',
  },
  {
    name: 'Barbara Carminati',
    orcid: '0000-0002-7502-4731',
    email: ['barbara.carminati@uninsubria.it'],
    institute: 'University of Insubria'
  },
  {
    name: 'Elena Ferrari',
    orcid: '0000-0002-7312-6769',
    email: ['elena.ferrari@uninsubria.it'],
    institute: 'University of Insubria'
  },
];


const publications = [
  {
    id: 'bdl',
    project: 'dl',
    title: 'Privacy-preserving Decentralized Learning of Knowledge Graph Embeddings',
    authors: ['Anh-Tu Hoang', 'Ahmed Lekssays', 'Barbara Carminati', 'Elena Ferrari'],
    venue: {
      title: 'Proceedings of the Workshops of the EDBT/ICDT Joint Conference',
      type: 'Conference Paper',
    },
    year: 2023,
    highlight: true,
    links: [
      {
        name: 'Link',
        url: 'https://ceur-ws.org/Vol-3379/DATUM_2023_11.pdf',
        icon: 'web'
      },
      {
        name: 'Code',
        url: 'https://github.com/Lekssays/formica/',
        icon: 'code'
      }
    ]
  },
  {
    id: 'zkfl-agg',
    project: 'dl',
    title: 'Blockchain-based Federated Learning Utilizing Zero-Knowledge Proofs for Verifiable Training and Aggregation',
    authors: ['Elmira Ebrahimi', 'Michael Sober', 'Anh-Tu Hoang', 'Can Umut Ileri', 'William Sanders', 'Stefan Schulte'],
    venue: {
      title: 'IEEE International Conference on Blockchain',
      type: 'Conference Paper',
    },
    year: 2024,
    highlight: true,
    best_paper_award: true,
    links: [
      {
        name: 'Link',
        url: 'https://doi.org/10.1109/Blockchain62396.2024.00017',
        icon: 'web'
      },
      {
        name: 'Code',
        url: 'https://github.com/ElmiraEbrahimi/Veriblock-FL',
        icon: 'code'
      }
    ]
  },
  {
    id: 'zkssi',
    project: 'ssi',
    title: 'zkSSI: A Zero-Knowledge-Based Self-Sovereign Identity Framework',
    authors: ['Anh-Tu Hoang', 'Can Umut Ileri', 'William Sanders', 'Stefan Schulte'],
    venue: {
      title: 'IEEE International Conference on Blockchain',
      type: 'Conference Paper',
    },
    year: 2024,
    highlight: true,
    links: [
      {
        name: 'Link',
        url: 'https://doi.org/10.1109/Blockchain62396.2024.00043',
        icon: 'web'
      },
      {
        name: 'Code',
        url: 'https://github.com/tuhoag/zkSSI',
        icon: 'code'
      }
    ]
  },
  {
    id: 'promark',
    project: 'promark',
    title: 'ProMark: Ensuring Transparency and Privacy-Awareness in Proximity Marketing Advertising Campaigns',
    authors: ['Anh-Tu Hoang', 'Barbara Carminati', 'Elena Ferrari'],
    venue: {
      title: 'IEEE Transactions on Dependable and Secure Computing',
      rank: 'Q1 (Impact Factor: 7.5)',
      type: 'Journal Article',
    },
    year: 2025,
    highlight: true,
    links: [
      {
        name: 'Link',
        url: 'https://doi.org/10.1109/TDSC.2024.3478049',
        icon: 'web'
      },
      {
        name: 'Code',
        url: 'https://github.com/tuhoag/promark',
        icon: 'code'
      }
    ]
  },
  {
    id: 'per-anonykg',
    project: 'anony',
    title: 'Protecting Privacy in Knowledge Graphs With Personalized Anonymization',
    authors: ['Anh-Tu Hoang', 'Barbara Carminati', 'Elena Ferrari'],
    venue: {
      title: 'IEEE Transactions on Dependable and Secure Computing',
      rank: 'Q1 (Impact Factor: 7.5)',
      type: 'Journal Article',
    },
    year: 2024,
    highlight: true,
    links: [
      {
        name: 'Link',
        url: 'https://doi.org/10.1109/TDSC.2023.3300360',
        icon: 'web'
      },
      {
        name: 'Code',
        url: 'https://github.com/tuhoag/personalized-anony-kg',
        icon: 'code'
      }
    ]
  },
  {
    id: 'seq-anonykg',
    project: 'anony',
    title: 'Time-aware Anonymization of Knowledge Graphs',
    authors: ['Anh-Tu Hoang', 'Barbara Carminati', 'Elena Ferrari'],
    venue: {
      title: 'ACM Transactions on Privacy and Security',
      rank: 'Q1 (Impact Factor: 3.0)',
      type: 'Journal Article',
    },
    year: 2023,
    highlight: true,
    links: [
      {
        name: 'Link',
        url: 'https://doi.org/10.1145/3563694',
        icon: 'web'
      },
      {
        name: 'Code',
        url: 'https://github.com/tuhoag/sequential-anonygraph',
        icon: 'code'
      }
    ]
  },
  {
    id: 'seq-anonykg-ori',
    project: 'anony',
    title: 'Privacy-Preserving Sequential Publishing of Knowledge Graphs',
    authors: ['Anh-Tu Hoang', 'Barbara Carminati', 'Elena Ferrari'],
    venue: {
      title: 'IEEE International Conference on Data Engineering',
      rank: 'A* (Acceptance Rate: 15%)',
      type: 'Conference Paper',
    },
    year: 2021,
    highlight: true,
    links: [
      {
        name: 'Link',
        url: 'https://doi.org/10.1109/ICDE51399.2021.00194',
        icon: 'web'
      },
      {
        name: 'Code',
        url: 'https://github.com/tuhoag/sequential-anonygraph',
        icon: 'code'
      },
      {
        name: 'Blog',
        url: 'https://www.linkedin.com/posts/concordia-h2020_knowledge-graphs-are-widely-shared-because-activity-6977540011185352704-1dIw?utm_source=share&utm_medium=member_desktop&rcm=ACoAABLotH8B5_VQntPlKhw1Hk7AnTcDhm6iapY',
        icon: 'blog'
      },
      {
        name: 'Slides',
        url: '/src/assets/slides/Sequential_Anonymization_of_Knowledge_Graphs-ICDE-Tu_Hoang.pdf',
        icon: 'slides'
      }
    ]
  },
  {
    id: 'anonykg',
    project: 'anony',
    title: 'Cluster-Based Anonymization of Knowledge Graphs',
    authors: ['Anh-Tu Hoang', 'Barbara Carminati', 'Elena Ferrari'],
    venue: {
      title: 'Applied Cryptography and Network Security',
      rank: 'B (Acceptance Rate: 20%)',
      type: 'Conference Paper',
    },
    year: 2020,
    highlight: true,
    links: [
      {
        name: 'Link',
        url: 'https://doi.org/10.1007/978-3-030-57878-7\_6',
        icon: 'web'
      },
      {
        name: 'Slides',
        url: 'Cluster-based_Anonymization_of_Knowledge_Graphs-ACNS-TuHoang.pdf',
        icon: 'slides'
      }
    ]
  },
  {
    id: 'anonydg',
    project: 'anony',
    title: 'Cluster-Based Anonymization of Directed Graphs',
    authors: ['Anh-Tu Hoang', 'Barbara Carminati', 'Elena Ferrari'],
    venue: {
      title: 'IEEE International Conference on Collaboration and Internet Computing',
      type: 'Conference Paper',
    },
    year: 2019,
    highlight: false,
    links: [
      {
        name: 'Link',
        url: 'https://doi.org/10.1109/CIC48465.2019.00020',
        icon: 'web'
      }
    ]
  },
  {
    id: 'anonytext',
    project: 'anony',
    title: 'Anonymizing Temporal Phrases in Natural Language Text to be Posted on Social Networking Services',
    authors: ['Hoang-Quoc Nguyen-Son', 'Anh-Tu Hoang', 'Minh-Triet Tran', 'Hiroshi Yoshiura', 'Noboru Sonehara', 'Isao Echizen'],
    venue: {
      title: 'Digital-Forensics and Watermarking',
      rank: 'C',
      type: 'Conference Paper',
    },
    year: 2014,
    highlight: false,
    links: [
      {
        name: 'Link',
        url: 'https://doi.org/10.1007/978-3-662-43886-2\_31',
        icon: 'web'
      }
    ]
  },
  {
    id: 'anony-watermark',
    project: 'anony',
    title: 'Detecting Traitors in Re-publishing Updated Datasets',
    authors: ['Anh-Tu Hoang', 'Hoang-Quoc Nguyen-Son', 'Minh-Triet Tran', 'Isao Echizen'],
    venue: {
      title: 'Digital-Forensics and Watermarking',
      rank: 'C',
      type: 'Conference Paper',
    },
    year: 2014,
    highlight: false,
    links: [
      {
        name: 'Link',
        url: 'https://doi.org/10.1007/978-3-662-43886-2\_15',
        icon: 'web'
      }
    ]
  },
  {
    id: 'anonyrd',
    project: 'anony',
    title: 'An Indexed Bottom-up Approach for Publishing Anonymized Data',
    authors: ['Anh-Tu Hoang', 'Minh-Triet Tran', 'Anh-Duc Duong', 'Isao Echizen'],
    venue: {
      title: 'IEEE International Conference on Computational Intelligence and Security',
      rank: 'C',
      type: 'Conference Paper',
    },
    year: 2012,
    highlight: false,
    links: [
      {
        name: 'Link',
        url: 'https://doi.org/10.1109/CIS.2012.148',
        icon: 'web'
      }
    ]
  },
  {
    id: '',
    project: '',
    title: 'BeadNet: a network for automated spherical marker detection in radiographs for geometry calibration',
    authors: ['Van Nguyen', 'Jan De Beenhouwer', 'Shabab Bazrafkan', 'Anh-Tu Hoang', 'Sam Van Wassenbergh', 'Jan Sijbers'],
    venue: {
      title: 'International Conference on Image Formation in X-Ray Computed Tomography',
      type: 'Conference Paper',
    },
    year: 2020,
    highlight: false,
    links: [
      {
        name: 'Link',
        url: 'https://hdl.handle.net/10067/1754090151162165141',
        icon: 'web'
      }
    ],
  }
];

export function fetchHighlightPublications() {
  return publications.filter(publication => publication.highlight).sort((a, b) => b.year - a.year);
}

export function fetchAuthors() {
  return authors;
}

export function fetchPublicationsByType(type: string): Publication[] {
  return publications.filter(publication => publication.venue.type === type).sort((a, b) => b.year - a.year);
}


export function fetchPublicationsByProject(projectId: string) {
  return publications.filter(publication => publication.project === projectId).sort((a, b) => b.year - a.year);
}