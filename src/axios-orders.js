import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://aet-burgerbuilder.firebaseio.com/'
});

export default instance;