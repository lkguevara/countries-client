// types
import { GET_COUNTRIES, IS_LOADING, FILTER_CONTINENT, ORDER_ACTIVITY, ORDER_COUNTRY, ORDER_POPULATION } from './actions'

// Estado inicial
const initialState = {
    countries: [],
    allCountries: [],
    loading: false,
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

        // *Default
        default:
            return state
    }
}

export default rootReducer