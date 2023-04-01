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

        // *Default
        default:
            return state
    }
}

export default rootReducer