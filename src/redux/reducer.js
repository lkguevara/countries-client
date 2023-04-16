// types
import { GET_COUNTRIES, GET_ACTIVITIES, GET_NAME_COUNTRIES, IS_LOADING, FILTER_CONTINENT, FILTER_ACTIVITY, ORDER_COUNTRY, ORDER_POPULATION, GET_COUNTRY, POST_ACTIVITIES } from './actions'

// Estado inicial
const initialState = {
    countries: [],
    allCountries: [],
    loading: false,
    activities: [],
    country: {} // para el detalle de un país en particular 
}

// Reducer

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        //* Loading mientras trae la inf
        case IS_LOADING:
            return {
                ...state,
                loading: true,
            }

        //* Get all countries
        case GET_COUNTRIES:
            return {
                ...state,
                //Mande toda la action de getCountries
                countries: action.payload,
                allCountries: action.payload,
                loading:false
            }
        
        //* Get all activities
        case GET_ACTIVITIES:
            return {
                ...state,
                //Mande toda la action de getCountries
                activities: action.payload,
                loading:false
            }
        
        //* Post activities
        case POST_ACTIVITIES:
            return {
                ...state,
            }


        // * Get name countries
        case GET_NAME_COUNTRIES:
            // si no hay paises con ese nombre, muestro un alert y devuelvo el estado con todos los paises
            if (!action.payload.length) {
                alert('No se encontraron países con ese nombre');
                return {
                ...state,
                countries: state.allCountries,
                loading: false
                }
            }
            return {
                ...state,
                countries: action.payload,
                loading: false
            }

        // * get country
        case GET_COUNTRY:
            return{
              ...state,
              countries: action.payload
            }

        
        // * Filter continent
        case FILTER_CONTINENT:
            // me traigo todos los paises del state countries
            const allCountries = state.allCountries
            // realizo el filtro según el option
            const filterContinent = action.payload === 'all' ? allCountries : allCountries.filter(country => country.continent === action.payload)
            return{
                ...state,
                countries: filterContinent
            }
        
        // * order country asc
        case ORDER_COUNTRY: 
            let orderName = action.payload === 'asc' ? 
                state.countries.sort((a, b) => {
                    if(a.name > b.name){
                        return 1;
                    }
                    if(b.name > a.name){
                        return -1;
                    }
                    return 0;
                }) :
                state.countries.sort((a, b) => {
                    if(a.name > b.name){
                        return -1;
                    }
                    if(b.name > a.name){
                        return 1;
                    }
                    return 0;
                })
            return{
                ...state,
                countries: orderName
            }
        // * order country asc
        case ORDER_POPULATION: 
            let orderPopulation = action.payload === 'asc' 
                ? state.countries.sort((a, b) => a.population - b.population)
                :state.countries.sort((a, b) => b.population - a.population)
            return{
                ...state,
                countries: orderPopulation
            }

        // * Filter activity
       // * Filter activity
        case FILTER_ACTIVITY:
            // obtener todos los países del estado
            const allCountriesActivities = state.allCountries;
            // obtener el nombre de la actividad que se está filtrando
            const activityName = action.payload;

            if (activityName === 'all') {
                return {
                    ...state,
                    countries: allCountriesActivities.filter(country => country.activities.length > 0)
                };
            }
            // realizar el filtro según el nombre de la actividad
            const filteredCountries = allCountriesActivities.filter(country =>
                country.activities.some(activity => activity.name === activityName));
            return {
                ...state,
                countries: filteredCountries
            };
        // *Default
        default:
            return state
    }
}

export default rootReducer