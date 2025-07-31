import type { Contact, Link, ResearchInterest, Skill } from "../types";

const contact: Contact = {
  prefix: 'Dr',
  name: 'Anh-Tu Hoang',
  shortName: 'Tu Hoang',
  affiliation: {
    name: 'Hamburg University of Technology',
    url: 'https://www.tuhh.de/ide/homepage/people/anh-tu-hoang'
  },
  position: 'Postdoctoral Researcher',
  address: 'Hamburg, Germany',
  emails: ['tu.hoang@tuhh.de', 'contact@tuhoang.me'],
  description: [
    'My research focuses on bridging the gap between academia and industry through collaborations with companies (e.g., IOTA, Pantos) and involvement in European research projects (e.g., CONCORDIA, CDL-BOT).',
    `I supervise students at all levels, including Bachelor's, Master's, and Ph.D., and have worked internationally in Germany, Italy, Japan, and Vietnam.`,
    'I also contribute to the academic community by reviewing for top-ranked journals and international conferences.'
  ],
  footnoteMessage: `I'm open to industry collaboration and exploring new roles in privacy, security, machine learning, and decentralized systems. Feel free to reach out.`,
}

const researchInterests: ResearchInterest[] = [
  {
    title: 'Privacy / Security',
    url: '#',
    icon: 'pri-sec'
  },
  {
    title: 'Machine Learning',
    url: '#',
    icon: 'machine-learning'
  },
  {
    title: 'Distributed Systems',
    url: '#',
    icon: 'distributed-system'
  },
  {
    title: 'Cryptography',
    url: '#',
    icon: 'cryptography'
  }
]

const socialAccounts: Link[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tuhoag/",
    icon: "linkedin",
  },
  {
    name: "Google Scholar",
    url: "https://scholar.google.com/citations?user=FQdCUagAAAAJ",
    icon: "google-scholar",
  },
  {
    name: "GitHub",
    url: "https://github.com/tuhoag",
    icon: "github",
  },
  {
    name: "ORCID",
    url: "https://orcid.org/0000-0002-1027-3905",
    icon: "orcid",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/tuhoag/",
    icon: "leetcode",
  },
];

const skills: Skill[] = [
  {
    title: 'Programming',
    icon: 'programming',
    subSkills: [
      {
        title: 'Python',
        url: '',
        icon: '',
      },
      {
        title: 'Rust',
        url: '',
        icon: '',
      },
      {
        title: 'Go',
        url: '',
        icon: '',
      },
      {
        title: 'Typescript',
        url: '',
        icon: '',
      }
    ]
  },
  {
    title: 'Blockchain',
    icon: 'blockchain',
    subSkills: [
      {
        title: 'Ethereum',
        url: '',
        icon: '',
      },
      {
        title: 'Move',
        url: '',
        icon: '',
      },
      {
        title: 'Hyperledger Fabric',
        url: '',
        icon: '',
      }
    ]
  },
  {
    title: 'Machine Learning',
    icon: 'machine-learning-lib',
    subSkills: [
      {
        title: 'PyTorch',
        url: '',
        icon: '',
      },
      {
        title: 'Scikit-Learn',
        url: '',
        icon: '',
      }
    ]
  },
  {
    title: 'Zero-Knowledge Proofs',
    icon: 'zkp',
    subSkills: [
      {
        title: 'Gnark',
        url: '',
        icon: '',
      },
      {
        title: 'Noir',
        url: '',
        icon: '',
      },
      {
        title: 'Circom',
        url: '',
        icon: '',
      },
      {
        title: 'EZKL',
        url: '',
        icon: '',
      }
    ]
  },
];

export function getContact(): Contact {
  return contact;
}

export function getSocialAccounts(): Link[]  {
  return socialAccounts;
}

export function getResearchInterests(): ResearchInterest[] {
  return researchInterests;
}

export function getSkills(): Skill[] {
  return skills;
}