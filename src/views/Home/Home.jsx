// Styles
import style from './Home.module.css'
// Hooks
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// components
import Search from '../../components/Search/Search'
import Filters from '../../components/Filters/Filters'
import Card from '../../components/Card/Card'
// actions
import {getCountries} from '../../redux/actions'
// imagenes
import loadingCountry from '../../assets/loading.gif';


const Home = () => {
  // dispatch y useSelector
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const loading = useSelector((state) => state.loading);

  // useEffect
  useEffect(() => {
    // !allCountries.length && dispatch (getCountries())
    dispatch (getCountries())
  }, []);

  return (
    <div className={style.containerHome}>
      <Filters />
      
      <Search />


    {
      loading 
      ? (
          <div>
            <img className= {style.loading} src={loadingCountry} alt="cargando" />
          </div>
        ) 
      : 
      allCountries?.map (country => {
        return (
          <Card 
          key = {country.id}
          image = {country.flag}
          name = {country.name}
          continent = {country.continent}
        />
        )
        
      })
    }


    </div>
  )
}

export default Home