import { FavoriteStore } from '@/stores/Characters/.reducer'
import { AddFavorites, RemoveFavorites } from '@/stores/Characters/.actions'

export const DataStores = {
  Characters: {
    Store: FavoriteStore,
    AddFavorites,
    RemoveFavorites
  }
}
