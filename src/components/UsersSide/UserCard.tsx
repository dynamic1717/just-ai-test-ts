import React from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import useParsedDate from '../../hooks/useParsedDate'
import { setCurrentCard, startDrag, endDrag } from '../../redux/favsSlice'

type UserCardProps = {
  user: any
  searchedValue: string
}

export const UserCard: React.FC<UserCardProps> = ({ user, searchedValue }) => {
  const dispatch = useDispatch()
  const username = user.name.first + ' ' + user.name.last
  const regDate = useParsedDate(user.registered.date)

  // Функция выделения найденой подстроки
  const markFindedValue = (string: string, value: string) => {
    const parts: any[] = string.split(' ')
    const res: any[] = []
    // Перебираем слова для поиска совпадения символов
    for (let i = 0; i < parts.length; i++) {
      const part: string = parts[i]

      // Ищем совпадения символов в каждой части
      if (part.toLowerCase().includes(value.toLowerCase())) {
        // Получаем индекс вхождения подстроки
        const regex = new RegExp(value, 'i')
        const indexOfSearch = part.search(regex)

        // Отделяем подстроку
        const replacedValue = part.slice(
          indexOfSearch,
          indexOfSearch + value.length
        )

        // Встравляем в нужную позицию найденую выделенную подстроку
        const replaced: any[] = [
          part.slice(0, indexOfSearch),
          <strong key={i}>{replacedValue}</strong>,
          part.slice(indexOfSearch + value.length),
        ]

        // Возвращаем измененную часть
        res.push(...replaced)
      } else {
        // Если нет совпадения, просто возвращаем часть
        res.push(part)
      }

      // Добавление пробелов между словами
      i !== parts.length - 1 && res.push(' ')
    }
    return res
  }

  // Установка схваченной пользователем карточки
  const dragStartHandler = (
    e: React.DragEvent<HTMLDivElement>,
    card: object
  ) => {
    dispatch(setCurrentCard(card))
    dispatch(startDrag())
  }

  // При отпускании карточки
  const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
    dispatch(endDrag())
  }

  return (
    <Card
      draggable={true}
      onDragStart={(e: React.DragEvent<HTMLDivElement>) =>
        dragStartHandler(e, user)
      }
      onDragEnd={(e: React.DragEvent<HTMLDivElement>) => dragEndHandler(e)}
      style={{ cursor: 'grab' }}
    >
      <Card.Body className='d-flex p-0'>
        <div className='m-2'>
          <img src={user.picture.thumbnail} alt={username} />
        </div>
        <div className='d-flex flex-column justify-content-center'>
          <p className='m-0'>
            {searchedValue
              ? markFindedValue(username, searchedValue)
              : username}
            , дата регистрации: {regDate}
          </p>
          <p className='m-0'>Email: {user.email}</p>
        </div>
      </Card.Body>
    </Card>
  )
}
