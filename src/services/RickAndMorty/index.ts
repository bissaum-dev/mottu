import { Character } from './Get/Character';

export const RickAndMorty = {
  GraphQL: 'https://rickandmortyapi.com/graphql',
  RestApi: 'https://rickandmortyapi.com/api',
  Headers: {
    'Content-Type': 'application/json',
  },
  Endpoint: {
    character: {
      All: (query?: string) => `${RickAndMorty.RestApi}/character${query?'?'+query:''}`,
      One: (id: string, query?: string) => `${RickAndMorty.RestApi}/character/${id}${query?'?'+query:''}`
    }
  },
  Get: {
    Character
  }
}
