import React from 'react'

function MovieCard({title ="title", img = "https://picsum.photos/200/300?random=1"}) {
  return (
    <div className='col-3 m-3'>
        <div className="card">
        <img src={img} className="card-img" alt="..." />
        <div className="card-img-overlay text-center">
            {/* <h5 className="card-title">{title}</h5> */}
        </div>
        </div>
    </div>
    )
}

export default MovieCard