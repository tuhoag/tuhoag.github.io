export type DescriptionItem = string | {
  url: string,
  text: string
}

export type MultiPartDescription = string | DescriptionItem[];

export interface Project {
  id: string,
  name: string,
  startYear: number,
  endYear: undefined | number,
  imageUrl: string,
  // highlight: boolean,
  highlightOrder?: number, // Optional field for ordering highlights
  shortDescription: MultiPartDescription[],
  description: MultiPartDescription[],
}

export interface Link {
  name: string,
  url: string,
  icon: string
}
export interface Publication {
  id: string,
  project: string,
  title: string,
  authors: string[],
  venue: {
    title: string,
    rank?: string,
    type: string,
  },
  year: number,
  highlight: boolean,
  best_paper_award?: boolean,
  links?: Link[]
}
export interface Talk {
  title: string,
  year: number,
  month: number,
  location: string,
  description: string,
  links?: Link[]
}

export interface ResearchInterest {
  title: string,
  url: string,
  icon: string
}

export interface Skill {
  title: string,
  icon: string,
  subSkills: {
    title: string,
    url: string,
    icon: string
  }[]

}

export interface Contact {
  prefix: string,
  name: string,
  shortName: string,
  affiliation: Affiliation,
  position: string,
  address: string,
  emails: string[],
  description: MultiPartDescription[],
  footnoteMessage: string,
}

export interface Affiliation {
  name: string,
  url: string
}

export interface SiteLink {
  title: string,
  url: string
}