import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { fetchUsers } from '../../redux/thunk'
import { Loader } from '../Loader'
import { UsersGroup } from './UsersGroup'

export const UsersSide: React.FC = () => {
  const { users } = useTypedSelector((state) => state.usersData)
  const dispatch = useDispatch()

  const [group1, setGroup1] = useState([] as any[])
  const [group2, setGroup2] = useState([] as any[])
  const [group3, setGroup3] = useState([] as any[])

  const [search, setSearch] = useState('')

  // Распределение пользователей по группам
  const sortByGroups = (users: any[]) => {
    setGroup1([])
    setGroup2([])
    setGroup3([])
    for (let user of users) {
      if (user.registered.age <= 10) {
        setGroup1((prev: any[]) => [...prev, user])
      } else if (user.registered.age <= 20) {
        setGroup2((prev: any[]) => [...prev, user])
      } else if (user.registered.age <= 30) {
        setGroup3((prev: any[]) => [...prev, user])
      }
    }
  }

  // Поиск пользователей при вводе текста
  const searchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.trim().toLowerCase()
    if (value.length >= 2) {
      const finded = users.filter((user) => {
        const username = user.name.first + ' ' + user.name.last
        return username.toLowerCase().includes(value)
      })
      sortByGroups(finded)
      setSearch(value)
    } else {
      sortByGroups(users)
      setSearch('')
    }
  }

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  useEffect(() => {
    sortByGroups(users)
  }, [users])

  return (
    <div style={{ width: '50%' }}>
      <Form onSubmit={(e) => e.preventDefault()} style={{ height: '50px' }}>
        <Form.Group controlId='formSearch'>
          <Form.Control
            type='text'
            placeholder='Поиск от 2-х символов...'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              searchOnChange(e)
            }
          />
        </Form.Group>
      </Form>

      {users.length ? (
        <>
          <UsersGroup
            usersGroup={group1}
            groupName={'1-10'}
            searchedValue={search}
          />
          <UsersGroup
            usersGroup={group2}
            groupName={'11-20'}
            searchedValue={search}
          />
          <UsersGroup
            usersGroup={group3}
            groupName={'21-30'}
            searchedValue={search}
          />
        </>
      ) : (
        <Loader />
      )}
    </div>
  )
}
