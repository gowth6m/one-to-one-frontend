import axios from 'axios';
import AuthApiClient from '@/services/clients/authApiClient';

import OneToOneApiClient from './clients/oneToOneApiClient';

// ----------------------------------------------------------------------

const base = axios.create({
  // baseURL: 'https://one-to-one-backend.vercel.app',
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

class ApiClient {
  static setAuthToken(
    props:
      | { type: 'Bearer'; token: string | null }
      | {
          type: 'Basic';
          username: string;
          password: string;
        }
  ) {
    if (props.type === 'Bearer') {
      base.defaults.headers.common['Authorization'] = `Bearer ${props.token}`;
    }
  }

  static auth = new AuthApiClient(base);

  static oneToOne = new OneToOneApiClient(base);
}

export default ApiClient;
