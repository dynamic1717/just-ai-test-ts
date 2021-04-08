import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { endDrag, setFavs } from '../../redux/favsSlice'
import { FavUserCard } from './FavUserCard'

export const FavsSide: React.FC = () => {
  const { favs, currentCard, isCardDragged } = useTypedSelector(
    (state) => state.favsData
  )
  const dispatch = useDispatch()

  const [favsWithOrder, setFavsWithOrder] = useState([] as any[])

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  // Добаление карточки в Избранное
  const dropHandlerAddFav = (e: React.DragEvent<HTMLDivElement>, card: any) => {
    e.preventDefault()
    // Не добавляем карту, если она уже есть
    if (
      favs.filter((user) => user.login.uuid === card.login.uuid).length <= 0
    ) {
      dispatch(setFavs(card))
      dispatch(endDrag())
    }
  }

  // Упарвление сменой мест карточек
  const dropHandlerSortFavs = (
    e: React.DragEvent<HTMLDivElement>,
    card: any
  ) => {
    e.preventDefault()
    if (currentCard) {
      setFavsWithOrder(
        favsWithOrder.map((c: any) => {
          if (c.login.uuid === card.login.uuid) {
            return { ...c, order: currentCard.order }
          }
          if (c.login.uuid === currentCard.login.uuid) {
            return { ...c, order: card.order }
          }
          return c
        })
      )
    }
  }

  // Добавление карточкам номера по порядку
  const addOrderToFavs = (favs: any[]) => {
    const newFavs = favs.map((fav, index) => {
      if (fav.order) {
        return fav
      } else {
        return { ...fav, order: index + 1 }
      }
    })
    setFavsWithOrder(newFavs)
  }

  // Сортировка по номеру карточки
  const sortCards = (a: any, b: any) => {
    if (a.order > b.order) {
      return 1
    } else {
      return -1
    }
  }

  useEffect(() => {
    addOrderToFavs(favs)
  }, [favs])

  return (
    <div
      style={{ width: '50%', minHeight: '100vh' }}
      className={`${isCardDragged ? 'card-dragged' : ''}`}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandlerAddFav(e, currentCard)}
    >
      <div
        className='d-flex justify-content-center align-items-center border-bottom'
        style={{ height: '50px' }}
      >
        <h5 className='m-0'>Избранные</h5>
      </div>

      <div>
        {favsWithOrder.sort(sortCards).map((user, index) => (
          <FavUserCard
            key={index}
            user={user}
            dropHandlerSortFavs={dropHandlerSortFavs}
          />
        ))}
      </div>
    </div>
  )
}
