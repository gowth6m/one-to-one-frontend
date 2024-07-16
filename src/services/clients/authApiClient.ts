import { AxiosInstance, AxiosResponse } from 'axios';
import { LoginResponse, CurrentResponse, CreateUserPayload } from '@/sections/auth';

import { CoreApiResponse } from '../responses.model';

export default class AuthApiClient {
  private base: AxiosInstance;

  constructor(base: AxiosInstance) {
    this.base = base;
  }

  async loginUser({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<AxiosResponse<CoreApiResponse<LoginResponse>>> {
    const payload = {
      email,
      password,
    };

    return await this.base.post(`/user/login`, payload);
  }

  async currentSession(): Promise<AxiosResponse<CoreApiResponse<CurrentResponse>>> {
    return await this.base.get(`/user/current`);
  }

  async registerUser(
    payload: CreateUserPayload
  ): Promise<AxiosResponse<CoreApiResponse<CurrentResponse>>> {
    return await this.base.post(`/user/create`, payload);
  }

  async addReportee(reporteeId: number): Promise<AxiosResponse<CoreApiResponse<CurrentResponse>>> {
    return await this.base.post(`/user/reportee`, { reporteeId });
  }

  async removeReportee(
    reporteeId: number
  ): Promise<AxiosResponse<CoreApiResponse<CurrentResponse>>> {
    return await this.base.delete(`/user/reportee/${reporteeId}`);
  }

  async addReportsTo(
    reportsToId: number
  ): Promise<AxiosResponse<CoreApiResponse<CurrentResponse>>> {
    return await this.base.post(`/user/reportsTo`, { reportsToId });
  }
}
