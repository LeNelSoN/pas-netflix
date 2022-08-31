import React from 'react'

function Movies({children}) {
  return (
    <div className="container">
        <div className="row d-flex justify-content-center">
            {children}
        </div>
    </div>  )
}

export default Movies