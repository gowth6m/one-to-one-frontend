/**
 * Generic type for pollen API response
 */
export interface CoreApiResponse<T> {
  data: T;
  errors?: CoreApiError[];
  message: string;
  status: number;
}

/**
 * Pollen API error response
 */
export type CoreApiError = {
  fieldName: string | null;
  code: string;
  arguments: any[] | null;
  message: string;
};
