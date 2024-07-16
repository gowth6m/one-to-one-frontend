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
    return await this.base.post(`/weekly-report/create`, payload);
  }

  async getAllWeeklyReportsAsReportee(): Promise<AxiosResponse<CoreApiResponse<WeeklyReport[]>>> {
    return await this.base.get(`/reportee/weekly-report/all`);
  }

  async updateWeeklyReportAsReportee(
    payload: UpdateWeeklyReportRequest
  ): Promise<AxiosResponse<CoreApiResponse<WeeklyReport>>> {
    return await this.base.put(`/weekly-report/update`, payload);
  }

  async getWeeklyReportByWeekAndYearAsReportee(
    week?: number,
    year?: number
  ): Promise<AxiosResponse<CoreApiResponse<WeeklyReport>>> {
    let query = '';
    if (!!week && !!year) {
      query = `?week=${week}&year=${year}`;
    }
    return await this.base.get(`/weekly-report/reportee${query}`);
  }

  // --------- Reporting To ------------

  async getAllWeeklyReportsAsReportingTo(): Promise<
    AxiosResponse<CoreApiResponse<WeeklyReport[]>>
  > {
    return await this.base.get(`/reporting/weekly-report/all`);
  }
}
