import axios from 'axios';
import AuthApiClient from '@/services/clients/authApiClient';

// ----------------------------------------------------------------------

const base = axios.create({
  baseURL: 'https://one-to-one-backend.vercel.app',
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
}

export default ApiClient;
