import axios from 'axios';

export default () => {

    return axios.create({
            baseURL: process.env.SERVER_HOST
    });

};
