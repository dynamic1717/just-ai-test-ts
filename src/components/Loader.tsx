import React from 'react'
import { Spinner } from 'react-bootstrap'

export const Loader: React.FC = () => {
  return (
    <div className='text-center'>
      <Spinner animation='border' variant='primary' />
    </div>
  )
}
