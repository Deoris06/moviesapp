import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Accept: 'application/json'
    },
    params: {
        api_key: '6237306c868ae04c6d8dcb290b517e37'
    }
})