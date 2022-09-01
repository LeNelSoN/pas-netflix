import './MovieCard.css'
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useState } from 'react';

function MovieCard({title , img, vote , id, setFav, fav,colNumber = 2,marge = 3, withButtonFav = false}) {

    const [isFav, setIsFav] = useState(false)
    const pillColor = vote < 5 ? vote < 2 ? 'bg-dark' : 'bg-danger' : vote > 7 ? 'bg-success' : 'bg-warning'

    const handleClick = () => {
        setIsFav(!isFav)
        setFav([...fav, {img, id, title, isFav}])
    }

  return (
    <div className={`col-${colNumber} m-${marge} `}>
            <div className="card bg-black position-relative ">
                <img src={img} className="card-img" alt={title} />
                <div className="card-img-overlay text-center">
            </div>
            <h2 className="card-title text-light text-center fs-7">{title}</h2>
                <span className={`position-absolute top-0 translate-middle badge rounded-pill ${pillColor}`}>
                {vote}
                </span>
                {withButtonFav && <div className='position-absolute top-0 start-100 translate-middle'>
                    <button disabled={isFav && true} className='btn btn-secondary' onClick={handleClick}>{isFav ?  <BsHeartFill /> : <BsHeart /> }</button>
                </div>}
        </div>
    </div>
    )
}

export default MovieCard