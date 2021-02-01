import axios from 'axios';
import { JWT_LOCALSTORAGE } from '../constants/common';
import {
  LOGIN_SERVER_ROUTE,
  REGISTER_SERVER_ROUTE,
  VOTE_SERVER_ROUTE,
  TOP10_SERVER_ROUTE
} from '../constants/serverRoutes';

axios.defaults.baseURL = `${process.env.VUE_APP_API_URL}`;

axios.interceptors.request.use(
  (config) => {
    const userFromLocalstorage = localStorage.getItem(JWT_LOCALSTORAGE);

    if (userFromLocalstorage) {
      const user = JSON.parse(userFromLocalstorage);
      config.headers.Authorization = `Bearer ${user.token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(undefined, (error) => {
  if (error.message === 'Network Error' && !error.message) {
    console.log('Network error');
  } else {
    const { status, data, config, headers } = error.response;

    if (status === 404) {
      //TODO: Go to Not found page
    } else if (
      status === 401 &&
      headers['www-authenticate'].includes(
        'Bearer error="invalid_token", error_description="The token expired at'
      )
    ) {
      localStorage.removeItem(JWT_LOCALSTORAGE);

      // TODO: Go to Home and show a toast
    } else if (status === 500) {
      // TODO: Show a toast
    }
  }

  throw error.response;
});

const responseBody = (response) => response.data;

const request = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
};

const Auth = {
  login: (user) => request.post(LOGIN_SERVER_ROUTE, user),
  register: (user) => request.post(REGISTER_SERVER_ROUTE, user),
};

const Users = {
  vote: (username) => request.put(`${VOTE_SERVER_ROUTE}/${username}`, {}),
  top10: () => request.get(`${TOP10_SERVER_ROUTE}`)
};

export default {
  Auth,
  Users,
};
