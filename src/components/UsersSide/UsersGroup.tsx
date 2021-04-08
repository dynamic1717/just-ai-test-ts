import React, { useState } from 'react'
import { Collapse, ListGroup } from 'react-bootstrap'
import { UserCard } from './UserCard'

type UsersGroupProps = {
  usersGroup: any[]
  groupName: string
  searchedValue: string
}

export const UsersGroup: React.FC<UsersGroupProps> = ({
  usersGroup,
  groupName,
  searchedValue,
}) => {
  const [showGroup, setShowGroup] = useState(true)

  const handleShow = () => {
    setShowGroup(!showGroup)
  }

  const sortByRegAge = (a: any, b: any) => {
    if (a.registered.age > b.registered.age) {
      return 1
    } else {
      return -1
    }
  }

  return (
    <ListGroup>
      <ListGroup.Item
        disabled={usersGroup.length ? false : true}
        active={usersGroup.length && showGroup ? true : false}
        style={{ cursor: 'pointer' }}
        onClick={handleShow}
        aria-controls='example-collapse-text'
        aria-expanded={showGroup}
      >
        <h5>{groupName}</h5>
      </ListGroup.Item>

      <Collapse in={showGroup}>
        <div id='example-collapse-text'>
          {usersGroup &&
            showGroup &&
            usersGroup.sort(sortByRegAge).map((user, index) => (
              <div key={index}>
                <UserCard user={user} searchedValue={searchedValue} />
              </div>
            ))}
        </div>
      </Collapse>
    </ListGroup>
  )
}
