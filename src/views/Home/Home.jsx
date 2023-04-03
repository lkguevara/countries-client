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
import {getCountries, getActivities} from '../../redux/actions'
// imagenes
import loadingCountry from '../../assets/loading.gif';
import Paginate from '../../components/Paginate/Paginate'


const Home = () => {
  const dispatch = useDispatch();
  //* useSelector => get/countries
  const allCountries = useSelector((state) => state.countries);
  const allActivities = useSelector((state) => state.activities);
  const loading = useSelector((state) => state.loading);

  // Verificar que allCountries sea un array antes de llamar a slice, De esta forma, si allCountries no es un array, simplemente se creará un array vacío para evitar el error.
  const countriesToShow = Array.isArray(allCountries) ? allCountries.slice(0, 8) : [];

  //* useState paginado
  const [currentPage, setCurrentPage] = useState(1); // Página actual que arranca en 1
  const [countriesPage, setCountriesPage] = useState(10); // paises por página
  const indexLastCountry = currentPage * countriesPage; // indice del último pais
  const indexFirstCountry = indexLastCountry - countriesPage; // indice del primer pais 
  const currentCountries = countriesToShow.slice(indexFirstCountry, indexLastCountry); // Const que guardará todos los personajes que vayan a haber por page. El slice lo que hace es cortar el array de paises y nos devuelve un array con los paises de la página actual

  const paginate = (pageNumber) => setCurrentPage(pageNumber); // función para cambiar de página

  const [order, setOrder] = useState('');

  // useEffect
  useEffect(() => {
    dispatch (getCountries())
    dispatch (getActivities())
  }, []);

  return (
    <>
      <div className={style.filters}>
        <Filters
          setCurrentPage={setCurrentPage}
          setOrder={setOrder}
        />
        <Search />
      </div>
      

      <div className={style.containerHome}>
        


      {
        loading 
        ? (
            <div>
              <img className= {style.loading} src={loadingCountry} alt="cargando" />
            </div>
          ) 
        : 
        
        currentCountries.map (country => {
          return (
            <Card 
            key = {country.id}
            id = {country.id}
            image = {country.flag}
            name = {country.name}
            continent = {country.continent}
            population = { country.population}
            activities = {country.activities ? country.activities.map(activity => activity.name) : []}
          />
          )
          
        })
      }



      </div>
      <Paginate
          countriesPage={countriesPage}
          allCountries={allCountries.length}
          paginate={paginate}
      />
    </>
  )
}

export default Home