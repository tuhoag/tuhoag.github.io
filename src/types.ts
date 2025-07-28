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
}