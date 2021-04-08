import React from 'react'
import { FavsSide } from './components/FavsSide/FavsSide'
import { UsersSide } from './components/UsersSide/UsersSide'

const App: React.FC = () => {
  return (
    <div className='d-flex justify-content-center'>
      <UsersSide />
      <FavsSide />
    </div>
  )
}

export default App
