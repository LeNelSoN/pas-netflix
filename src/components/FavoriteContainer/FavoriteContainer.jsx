import React from 'react'
import './FavoriteContainer.css'

function FavoriteContainer({children}) {
  return (
    <div class="offcanvas scroll offcanvas-start bg-black show" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
        <div className='d-flex'>
            <div className='row'>
                {children}
            </div>
        </div>
    </div>  
    )
}

export default FavoriteContainer