import { Location } from './Location'

export interface Character { 
  id: number,
  name: string,
  status: string,
  type: string,
  species: string,
  gender: string,
  origin: Location,
  location: Location,
  image: string,
  created: string,
  episode: string[]
}