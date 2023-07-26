import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>Nothing found :( </h1>
      <Link to ='/'>go Home</Link>
    </div>
  )
}

export default NotFound
