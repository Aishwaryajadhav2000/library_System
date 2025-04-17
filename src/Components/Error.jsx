import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div>
      <h1>404 Error - Page Not Found. </h1>

      <h2>
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </h2>
      <div>
        <Link to="/">
        <button className="submit" >Back To Home Page</button>
        </Link>
      </div>
    </div>
  )
}
