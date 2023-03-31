// types
import {GET_COUNTRIES, IS_LOADING} from './actions'

// Estado inicial
const initialState = {
    countries: [],
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
                loading:false
            }

        // *Default
        default:
            return state
    }
}

export default rootReducer