import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import trashcan_icon from '../../icons/trashcan_icon.png'
import useParsedDate from '../../hooks/useParsedDate'
import { removeFavCard, setCurrentCard } from '../../redux/favsSlice'

type FavUserCardProps = {
  user: any
  dropHandlerSortFavs: (e: React.DragEvent<HTMLDivElement>, card: any) => void
}

export const FavUserCard: React.FC<FavUserCardProps> = ({
  user,
  dropHandlerSortFavs,
}) => {
  const dispatch = useDispatch()

  const username = user.name.first + ' ' + user.name.last
  const regDate = useParsedDate(user.registered.date)

  // Установка схваченной пользователем карточки
  const dragStartHandler = (
    e: React.DragEvent<HTMLDivElement>,
    card: object
  ) => {
    dispatch(setCurrentCard(card))
  }

  return (
    <Card
      draggable={true}
      onDragStart={(e: React.DragEvent<HTMLDivElement>) =>
        dragStartHandler(e, user)
      }
      onDrop={(e: React.DragEvent<HTMLDivElement>) =>
        dropHandlerSortFavs(e, user)
      }
      style={{ animation: 'inAnimation 500ms ease-in', cursor: 'move' }}
    >
      <Card.Body className='d-flex p-0 align-items-center'>
        <div className='m-2'>
          <img src={user.picture.medium} alt={username} />
        </div>
        <div>
          <p>
            {username}, дата регистрации: {regDate}
          </p>
          <p>Email: {user.email}</p>
        </div>
        <div style={{ marginLeft: 'auto', marginRight: '2rem' }}>
          <Button
            variant='outline-danger'
            style={{ width: '40px', padding: '0.2rem' }}
            onClick={() => dispatch(removeFavCard(user))}
          >
            <img src={trashcan_icon} alt='delete' style={{ width: '100%' }} />
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}
