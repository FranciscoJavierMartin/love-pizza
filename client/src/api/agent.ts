import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { JWT_LOCALSTORAGE } from '../constants/common';
import {
  LOGIN_SERVER_ROUTE,
  REGISTER_SERVER_ROUTE,
} from '../constants/serverRoutes';
import { IUserFormLogin, IUserFormRegister } from '../interfaces/forms';
import { IUser } from '../models/user';

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem(JWT_LOCALSTORAGE);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
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
        'Bearer error="invalid_token", error_description="The token expired at',
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

const responseBody = (response: AxiosResponse) => response.data;

const request = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
};

const User = {
  login: (user: IUserFormLogin): Promise<IUser> =>
    request.post(LOGIN_SERVER_ROUTE, user),
  register: (user: IUserFormRegister): Promise<IUser> =>
    request.post(REGISTER_SERVER_ROUTE, user),
};

export default {
  User,
};
