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
    venue: 'Proceedings of the Workshops of the EDBT/ICDT Joint Conference',
    year: 2023,
    highlight: true,
  },
  {
    id: 'zkfl-agg',
    project: 'dl',
    title: 'Blockchain-based Federated Learning Utilizing Zero-Knowledge Proofs for Verifiable Training and Aggregation',
    authors: ['Elmira Ebrahimi', 'Michael Sober', 'Anh-Tu Hoang', 'Can Umut Ileri', 'William Sanders', 'Stefan Schulte'],
    venue: 'IEEE International Conference on Blockchain',
    year: 2024,
    highlight: true,
  },
  {
    id: 'zkssi',
    project: 'ssi',
    title: 'zkSSI: A Zero-Knowledge-Based Self-Sovereign Identity Framework',
    authors: ['Anh-Tu Hoang', 'Can Umut Ileri', 'William Sanders', 'Stefan Schulte'],
    venue: 'IEEE International Conference on Blockchain',
    year: 2024,
    highlight: true,
  },
  {
    id: 'promark',
    project: 'promark',
    title: 'ProMark: Ensuring Transparency and Privacy-Awareness in Proximity Marketing Advertising Campaigns',
    authors: ['Anh-Tu Hoang', 'Barbara Carminati', 'Elena Ferrari'],
    venue: 'IEEE Transactions on Dependable and Secure Computing',
    year: 2025,
    highlight: false,
  },
  {
    id: 'per-anonykg',
    project: 'anony',
    title: 'Protecting Privacy in Knowledge Graphs With Personalized Anonymization',
    authors: ['Anh-Tu Hoang', 'Barbara Carminati', 'Elena Ferrari'],
    venue: 'IEEE Transactions on Dependable and Secure Computing',
    year: 2024,
    highlight: false,
  },
  {
    id: 'seq-anonykg',
    project: 'anony',
    title: 'Time-aware Anonymization of Knowledge Graphs',
    authors: ['Anh-Tu Hoang', 'Barbara Carminati', 'Elena Ferrari'],
    venue: 'ACM Transactions on Privacy and Security',
    year: 2023,
    highlight: false,
  },
  {
    id: 'seq-anonykg-ori',
    project: 'anony',
    title: 'Privacy-Preserving Sequential Publishing of Knowledge Graphs',
    authors: ['Anh-Tu Hoang', 'Barbara Carminati', 'Elena Ferrari'],
    venue: 'IEEE International Conference on Data Engineering',
    year: 2021,
    highlight: false,
  },
  {
    id: 'anonykg',
    project: 'anony',
    title: 'Cluster-Based Anonymization of Knowledge Graphs',
    authors: ['Anh-Tu Hoang', 'Barbara Carminati', 'Elena Ferrari'],
    venue: 'Applied Cryptography and Network Security',
    year: 2020,
    highlight: false,
  },
  {
    id: 'anonydg',
    project: 'anony',
    title: 'Cluster-Based Anonymization of Directed Graphs',
    authors: ['Anh-Tu Hoang', 'Barbara Carminati', 'Elena Ferrari'],
    venue: 'IEEE International Conference on Collaboration and Internet Computing',
    year: 2019,
    highlight: false,
  },
  {
    id: 'anonytext',
    project: 'anony',
    title: 'Anonymizing Temporal Phrases in Natural Language Text to be Posted on Social Networking Services',
    authors: ['Hoang-Quoc Nguyen-Son', 'Anh-Tu Hoang', 'Minh-Triet Tran', 'Hiroshi Yoshiura', 'Noboru Sonehara', 'Isao Echizen'],
    venue: 'Digital-Forensics and Watermarking',
    year: 2014,
    highlight: false,
  },
  {
    id: 'anony-watermark',
    project: 'anony',
    title: 'Detecting Traitors in Re-publishing Updated Datasets',
    authors: ['Anh-Tu Hoang', 'Hoang-Quoc Nguyen-Son', 'Minh-Triet Tran', 'Isao Echizen'],
    venue: 'Digital-Forensics and Watermarking',
    year: 2014,
    highlight: false,
  },
  {
    id: 'anonyrd',
    project: 'anony',
    title: 'An Indexed Bottom-up Approach for Publishing Anonymized Data',
    authors: ['Anh-Tu Hoang', 'Minh-Triet Tran', 'Anh-Duc Duong', 'Isao Echizen'],
    venue: 'IEEE International Conference on Computational Intelligence and Security',
    year: 2012,
    highlight: false,
  },
];

export function fetchHighlightPublications() {
  return publications.filter(publication => publication.highlight);
}