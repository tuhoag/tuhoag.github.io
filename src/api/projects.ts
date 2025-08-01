import type { Project } from "../types";

const projects: Project[] = [
  {
    id: 'dl',
    name: 'Zero-Knowledge Federated Learning',
    startYear: 2023,
    endYear: undefined,
    imageUrl: '/src/assets/bdl.svg',
    // highlight: true,
    highlightOrder: 3,
    shortDescription: [
      [
        'This project aims to enhance the decentralization, security, and privacy of distributed and federated learning by leveraging zero-knowledge proofs and blockchain technologies. The work received the Best Paper Award at IEEE Blockchain 2024 and includes an additional paper currently under review.'
      ]
    ],
    description: [
      'This project focuses on developing protocols for distributed and federated learning, enabling collaborative model training without the need to share raw data.',
      [
        'To eliminate reliance on centralized aggregators, I have integrated blockchain technologies (',
        { url: 'https://ethereum.org/', text: 'Ethereum' },
        ', ',
        { url: 'https://www.iota.org/', text: 'IOTA' },
        ') into federated and distributed learning systems.'
      ],
      [
        'To ensure privacy and security, I design zkSNARK circuits using tools such as ',
        { url: 'https://github.com/zkonduit/ezkl', text: 'EZKL' },
        ' and ',
        { url: 'https://zokrates.github.io/', text: 'ZoKrates' },
        ' to generate proof-of-training, proof-of-aggregation, and proof-of-knowledge-distillation. These zero-knowledge proofs make it possible to detect malicious behavior in machine learning processes, such as model training and knowledge distillation, while preserving data privacy.'
      ],
      'To address scalability, I develop novel zkRollup-based architectures. My system also supports heterogeneous devices and network conditions, enabling efficient training across diverse hardware platforms and communication protocols. ',
      'The project has resulted in a Best Paper Award at IEEE Blockchain 2024 and an additional paper currently under review.',
      'I am currently exploring additional applications, including federated unlearning and multimodal federated learning.',
    ],
  },
  {
    id: 'ssi',
    name: 'Zero-Knowledge Self-Sovereign Identity',
    startYear: 2023,
    endYear: undefined,
    imageUrl: '/src/assets/ssi.svg',
    highlightOrder: 1,
    shortDescription: [
      [
        'I collaborated with ',
        { url: 'https://www.iota.org/', text: 'IOTA Foundation' },
        ' to advance privacy-aware and secure real-world applications of self-sovereign identity by extending W3C standards and incorporating zero-knowledge proofs. The work has led to a conference publication and a journal paper currently under review.'
      ]
    ],
    description: [
      [
        'In this project, I collaborated with ',
        { url: 'https://www.iota.org/', text: 'IOTA Foundation' },
        ' to develop self-sovereign identity extensions for real-world applications. These applications were deployed on ',
        { url: 'https://www.iota.org/products/evm', text: 'IOTA EVM' },
        ' and ',
        { url: 'https://www.iota.org/learn/move', text: 'IOTA Move' },
        '.'
      ],
      [
        'To ensure privacy and security, I designed zkSNARK circuits using tools such as ',
        { url: 'https://docs.gnark.consensys.io', text: 'Gnark' },
        ' and ',
        { url: 'https://noir-lang.org', text: 'Noir' },
        ' to generate zero-knowledge verifiable presentations. These presentations enable users to prove possession of verifiable credentials without revealing sensitive data. ',
        'The applications support both on-chain and off-chain verification, helping secure blockchain-based services using real-world identity data (e.g., age verification). ',
        'Additionally, I proposed leveraging self-sovereign identity to enhance Know-Your-Customer (KYC) processes in a privacy-preserving manner, allowing users to prove their identity without disclosing personal information.'
      ],
      'This work has resulted in a conference publication and a journal paper that is currently under review.',
      'I am now exploring further applications of self-sovereign identity, including rights delegation and decentralized access control.'
    ]
  },
  {
    id: 'bi',
    name: 'Scalable Blockchain Interoperability',
    startYear: 2023,
    endYear: undefined,
    imageUrl: '/src/assets/zkSSI-cross-chain.svg',
    highlightOrder: 2,
    shortDescription: [
      [
        'I collaborated with ',
        { url: 'https://www.pantos.io/', text: 'Pantos' },
        ' to investigate blockchain interoperability with an emphasis on privacy, security, and KYC. The work supports use cases such as cross-chain identity, zk-rollups, zero-knowledge proofs, and zkMixers, resulting in two journal papers currently under review.'
      ]
    ],
    description: [
      [
        'This project focuses on enabling blockchain interoperability through decentralized oracle networks and mixers while ensuring the privacy, security, and regulatory compliance. ',
        'The zkSNARK circuits are designed in ',
        { url: 'https://docs.gnark.consensys.io', text: 'Gnark' },
        ' to facilitate privacy-preserving computations. I developed zk-rollup protocols to reduce gas costs of distributed oracles and mixers. ',
        'Additionally, I proposed to ensure Know-Your-Customer (KYC) by utilizing self-sovereign identity paradigms.',
        'The work is evaluated in EVM-compatible blockchains',
      ],
      'This project leads to two under-review journal papers. ',
      'I am currently exploring further applications of blockchain interoperability, including cross-chain identity and zero-knowledge proofs.'
    ]
  },
  {
    id: 'promark',
    name: 'Blockchain-Based Proximity Marketing',
    startYear: 2022,
    endYear: 2024,
    imageUrl: '/src/assets/promark.svg',
    highlightOrder: 4,
    shortDescription: [
      [
        'This project aims to leverage blockchain technology for proximity marketing, enabling targeted advertising based on user location while preserving privacy. It utilizes multi-party computation, homomorphic cryptography, and zero-knowledge proofs. This work results in a journal paper.'
      ]
    ],
    description: [
      [
        'This project ensures the transparency, privacy, and security of proximity marketing by using blockchain technologies. ',
        'It utilizes multi-party computation, homomorphic cryptography, and zero-knowledge proofs to prevent users from being monitored.',
        'I developed this project in ',
        { url: 'https://www.hyperledger.org/', text: 'Hyperledger Fabric' },
        ', a permissioned blockchain platform, to ensure transparency. ',
        'The project is evaluated in a real-world scenario, where users can receive targeted advertisements based on their location without revealing their personal information.',
      ],
      'The work results in a journal paper.',
      'I am currently exploring further applications of blockchain-based proximity marketing, including integrating with self-sovereign identity and enhancing privacy-preserving advertising techniques.'
    ]
  },
  {
    id: 'anony',
    name: 'Privacy-Preserving Data Publishing',
    startYear: 2011,
    endYear: 2024,
    imageUrl: '/src/assets/anonygraph.svg',
    // highlightOrder: 5,
    shortDescription: [
      [
        'This project develops k-anonymity methods for text, relational data, and knowledge graphs to prevent linking and inference attacks while preserving data utility for machine learning. It leverages techniques such as watermarking and discrete optimization, resulting in 6 conference and 2 journal papers.'
      ]
    ],
    description: [
      [
        'This project focuses on developing techniques for privacy-preserving data publishing, allowing organizations to share data while protecting individual privacy while maintaining data utility. ',
        'It includes k-anonymity methods for text, relational data, and knowledge graphs to prevent linking and inference attacks. ',
        'The project also explores watermarking techniques to ensure data integrity and prevent unauthorized use. ',
        'Additionally, it employs discrete optimization to enhance the efficiency of privacy-preserving data publishing.',
      ],
      'This work results in 6 conference and 2 journal papers.',
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
