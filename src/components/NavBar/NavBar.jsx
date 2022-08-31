import React, { useState } from 'react'

function NavBar({setSearch}) {
  const [input, setinput] = useState('')
  const handleClick = (e) => {
    e.preventDefault()
    setSearch(input)
  }
  
  const handleChange = (e) => {
    setinput(e.target.value)
  }

  return (
  <nav className="navbar navbar-dark bg-dark">
    <div className="container">
      <form className="w-100 d-flex justify-content-end" role="search">
        <div className='me-2'>
          <input className="form-control me-2" type="search" placeholder="Recherche" aria-label="Search" value={input} onChange={handleChange}/>  
        </div>
        <button className="btn btn-outline-success" type="submit" onClick={handleClick}>Recherche</button>
      </form>
    </div>
  </nav>  
)
}

export default NavBar