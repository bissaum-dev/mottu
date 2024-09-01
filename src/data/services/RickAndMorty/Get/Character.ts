import axios from 'axios';
import { Services, CharacterSchema } from '@/app/.types';
import { RickAndMorty } from '@/services/RickAndMorty';

interface Args {
  type: Services
  page: number
  search: string
}

export const Character = async ({ type, page, search }: Args): Promise<CharacterSchema[]> => {
  switch(type) {
    case 'GraphQL': {
      const query = `
        query {
          characters(page: ${page}, filter: { name: "${search}" }) {
            results {
              id
              name
              species
              image
            }
          }
        }
      `

      const response = await axios.request({
        url: RickAndMorty.GraphQL,
        method: 'POST',
        data: { query }
      });

      return response.data.data.characters.results;
    }

    case 'RestApi': {
      const query = new URLSearchParams({
        page: `${page}`,
        name: search
      }).toString();

      const response = await axios.request({
        url: RickAndMorty.Endpoint.character.All(query),
        method: 'GET',
        headers: RickAndMorty.Headers
      });

      return response.data.results;
    }
  }
}
