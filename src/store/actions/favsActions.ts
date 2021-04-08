import { FavsActionTypes } from '../../types/favs'

export const setCurrentCard = (user: object) => {
  return { type: FavsActionTypes.SET_CURRENT_CARD, payload: user }
}

export const setFavs = (user: object) => {
  return { type: FavsActionTypes.SET_FAVS, payload: user }
}

export const removeFavCard = (user: object) => {
  return { type: FavsActionTypes.REMOVE_FAV_CARD, payload: user }
}

export const startDrag = () => {
  return { type: FavsActionTypes.START_DRAG }
}

export const endDrag = () => {
  return { type: FavsActionTypes.END_DRAG }
}
