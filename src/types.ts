export interface Project {
  id: string,
  name: string,
  startYear: number,
  endYear: undefined | number,
  imageUrl: string,
  highlight: boolean,
  shortDescription: string
}

export interface Publication {
  id: string,
  project: string,
  title: string,
  authors: string[],
  venue: string,
  year: number,
  highlight: boolean,
  type: string,
  links?: {
    name: string,
    url: string,
    icon: string
  }[]
}

export interface Talk {
  title: string,
  year: number,
  month: number,
  location: string,
  description: string,
  links?: {
    name: string,
    url: string,
    icon: string
  }[]
}