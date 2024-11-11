import { AxiosResponse } from 'axios';

export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
  expiredAccess: string;
  expiredRefresh: string;
}

export interface Pagination {
  current?: number;
  pageSize?: number;
  total?: number;
}

export type MetaData = {
  data?: {
    pagination?: {
      total?: number;
      last_page?: number;
      per_page?: number;
      current_page?: number;
      total_pages?: number;
    };
    total?: number;
  };
};

export type ResponseData<T> = MetaData & {
  data: T;
  success: boolean;
  message?: string;
};

export type ValidationError = {
  detail: {
    [key: string]: {
      field: string;
      error: string;
      message: string;
      statusCode: number;
      success: boolean;
    };
  };
};

export type ServerError = {
  error: string;
  message: string;
  statusCode: number;
  success: boolean;
};

export type ApiError = AxiosResponse<ServerError | ValidationError>;
