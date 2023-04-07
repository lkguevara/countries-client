import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getCountry, getActivities, getCountries } from '../../redux/actions'

import style from './Detail.module.css'




 const Detail = () => {
	 
	const dispatch = useDispatch();
	const country = useSelector(state=>state.countries)
	const {id} = useParams()


  useEffect(() => {
    dispatch(getCountry(id))
  }, [dispatch,id])

  


	 return (
    <>
		 <div className={style.containerDetails}>
     
      <div className={style.titleFlag}>
        <img src={country.flag} alt={`${country.name} flag`} />
        <h1>{country.name}</h1>
        <p>{country.id}</p>
      </div>

      <div className={style.continent}>
          <p className={style.detail__continent}><strong>Continent:</strong> {country.continent}</p>
          {country.continent === 'Americas' && <img src={require('../../assets/americasMap.png')} alt="America Map" />}
          {country.continent === 'Africa' && <img src={require('../../assets/africaMap.png')} alt="Africa Map" />}
          {country.continent === 'Asia' && <img src={require('../../assets/asiaMap.png')} alt="Asia Map" />}
          {country.continent === 'Europe' && <img src={require('../../assets/europaMap.png')} alt="Europe Map" />}
          {country.continent === 'Oceania' && <img src={require('../../assets/oceaniaMap.png')} alt="Oceania Map" />}
          {country.continent === 'Antarctic' && <img src={require('../../assets/antarticMap.png')} alt="Antartic Map" />}
      </div>
    </div>
     
      <div className={style.extraInfoBox}>
          <p><strong>Capital: </strong>{country.capital}</p>
          <p><strong>Subregion: </strong>{country.subregion}</p>
          <p><strong>Area: </strong>{country.area} km2</p>
          <p><strong>Population: </strong>{country.population}</p>
      </div>
      
      <Link className={style.linkDetail} to="/home">
        <button className={style.buttonDetail}>Return to Home</button>
      </Link>
      
  
    </> 
  )
}




export default Detail