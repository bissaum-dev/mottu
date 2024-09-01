export type Pages = '/home' | '/favorites'

export type Services = 'GraphQL' | 'RestApi'

export interface CharacterSchema {
  id: string
  name: string
  species: string
  image: string
}

export interface CharacterOptions {
  type: Services,
  page: number,
  search: string
}
