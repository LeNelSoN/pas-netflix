import React from 'react'
import './FavoriteContainer.css'

function FavoriteContainer({children}) {
  return (
    <div class="offcanvas offcanvas-start bg-dark show" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
        <div className='d-flex'>
            <div className='row'>
                {children}
            </div>
        </div>
    </div>  
    )
}

export default FavoriteContainer