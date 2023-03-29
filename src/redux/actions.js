import axios from 'axios';

// types
export const GET_COUNTRIES = 'GET_COUNTRIES';

export const getUsers = () => {
    return async (dispatch) => {
       try {
            const res = await axios.get('http://localhost:3001/countries')
            dispatch({
                type: GET_COUNTRIES,
                payload: res.data
            })
         } catch (error) {
            throw error
        }
    }
}



