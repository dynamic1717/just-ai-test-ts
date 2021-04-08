import { FavsAction, FavsActionTypes, FavsState } from '../../types/favs'

const initialState: FavsState = {
  favs: [],
  currentCard: null,
  isCardDragged: false,
}

export const favsReducer = (
  state = initialState,
  action: FavsAction
): FavsState => {
  switch (action.type) {
    case FavsActionTypes.SET_CURRENT_CARD:
      return { ...state, currentCard: action.payload }
    case FavsActionTypes.SET_FAVS:
      const addedFavs = state.favs.push(action.payload)
      return { ...state, favs: addedFavs }
    case FavsActionTypes.REMOVE_FAV_CARD:
      const filteredFavs = state.favs.filter(
        (user: any) => user.login.uuid !== action.payload.login.uuid
      )
      return { ...state, favs: filteredFavs }
    case FavsActionTypes.START_DRAG:
      return { ...state, isCardDragged: true }
    case FavsActionTypes.END_DRAG:
      return { ...state, isCardDragged: false }
    default:
      return state
  }
}
