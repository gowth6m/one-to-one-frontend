import { AxiosInstance, AxiosResponse } from 'axios';
import {
  WeeklyReport,
  CreateWeeklyReportRequest,
  UpdateWeeklyReportRequest,
} from '@/sections/one-to-ones/types';

import { CoreApiResponse } from '../responses.model';

export default class OneToOneApiClient {
  private base: AxiosInstance;

  constructor(base: AxiosInstance) {
    this.base = base;
  }

  async createWeeklyReport(
    payload: CreateWeeklyReportRequest
  ): Promise<AxiosResponse<CoreApiResponse<WeeklyReport>>> {
    return await this.base.post(`/one-to-one/create`, payload);
  }

  async getAllWeeklyReportsAsReportee(): Promise<AxiosResponse<CoreApiResponse<WeeklyReport[]>>> {
    return await this.base.get(`/one-to-one/reportee/all`);
  }

  async updateWeeklyReportAsReportee(
    payload: UpdateWeeklyReportRequest,
    id: string
  ): Promise<AxiosResponse<CoreApiResponse<WeeklyReport>>> {
    const data = {
      ...payload,
      id: id,
    };

    return await this.base.put(`/one-to-one/reportee/update`, data);
  }

  async getWeeklyReportByWeekAndYearAsReportee(
    week?: number,
    year?: number
  ): Promise<AxiosResponse<CoreApiResponse<WeeklyReport>>> {
    let query = '';
    if (!!week && !!year) {
      query = `?week=${week}&year=${year}`;
    }
    return await this.base.get(`/one-to-one/reportee${query}`);
  }

  // --------- Reporting To ------------

  async getAllWeeklyReportsAsReportingTo(): Promise<
    AxiosResponse<CoreApiResponse<WeeklyReport[]>>
  > {
    return await this.base.get(`/one-to-one/reports-to/all`);
  }
}
