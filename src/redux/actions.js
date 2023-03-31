import axios from 'axios';

// types
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const IS_LOADING = 'IS_LOADING'


export const getCountries = () => async (dispatch) => {
    
    dispatch({
        type: IS_LOADING
    })

    try {
        const response = await axios.get('http://localhost:3001/countries')
        dispatch({
            type: GET_COUNTRIES,
            payload: response.data
        });

    } catch (error) {
        throw error
    }
}




