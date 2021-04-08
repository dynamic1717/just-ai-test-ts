export interface FavsState {
  favs: any[] | any
  currentCard: any
  isCardDragged: boolean
}

export enum FavsActionTypes {
  SET_CURRENT_CARD = 'SET_CURRENT_CARD',
  SET_FAVS = 'SET_FAVS',
  REMOVE_FAV_CARD = 'REMOVE_FAV_CARD',
  START_DRAG = 'START_DRAG',
  END_DRAG = 'END_DRAG',
}

interface SetCurrentCardAction {
  type: FavsActionTypes.SET_CURRENT_CARD
  payload: any
}

interface SetFavsAction {
  type: FavsActionTypes.SET_FAVS
  payload: any
}

interface RemoveFavCardAction {
  type: FavsActionTypes.REMOVE_FAV_CARD
  payload: any
}

interface StartDragAction {
  type: FavsActionTypes.START_DRAG
}

interface EndDragAction {
  type: FavsActionTypes.END_DRAG
}

export type FavsAction =
  | SetCurrentCardAction
  | SetFavsAction
  | RemoveFavCardAction
  | StartDragAction
  | EndDragAction
