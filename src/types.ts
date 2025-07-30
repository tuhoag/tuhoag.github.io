export interface Project {
  id: string,
  name: string,
  startYear: number,
  endYear: undefined | number,
  imageUrl: string,
  highlight: boolean,
  shortDescription: string
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