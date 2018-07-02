import axios from 'axios';

/** Require and configure dotenv and specify absolute path to .env */

export default() => {
  return axios.create({
    baseURL:  process.env.SERVER_HOST
  });
};
