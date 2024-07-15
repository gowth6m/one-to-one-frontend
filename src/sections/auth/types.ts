import { AxiosResponse } from 'axios';
import { CoreApiResponse } from '@/services/responses.model';
import { UseQueryResult, UseMutationResult } from 'react-query';

export type AuthSession = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  reportsTo?: string;
  reportees?: string[];
  createdAt?: string;
  updatedAt?: string;
};

export type AuthContextProps = {
  session: AuthSession | null;
  isLoading: boolean;
  loginMutation: UseMutationResult<
    AxiosResponse<any, any>,
    unknown,
    {
      email: string;
      password: string;
    },
    unknown
  >;
  logoutMutation: UseMutationResult<void, unknown, void, unknown>;
  currentSessionQuery: UseQueryResult<AxiosResponse<CoreApiResponse<any>, any>, unknown>;
};

export type User = AuthSession;

export interface LoginResponse {
  token: string;
  user: User;
}

export type CurrentResponse = AuthSession;

export type CreateUserPayload = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};
