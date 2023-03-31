import style from './Card.module.css'
import { Link } from 'react-router-dom'

const CardCountry = ({name, image, continent, id}) => {
  return (
    <>
        <div className= {style.card}>
            <Link className = {style.link} to={`/detail/${id}`}>
                <img className = {style.card__image} src={image} alt="imagen" />
                <h2 className={style.card__title}> {name}</h2>
                <h2 className={style.card__continent}> {continent}</h2>
            </Link>
        </div>
      
    </>
  )
}

export default CardCountry