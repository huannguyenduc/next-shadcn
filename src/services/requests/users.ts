import { request } from '../axios';
import { AxiosResponse } from 'axios';
import { GetUsersRequest, GetUsersResponse } from '@/interfaces/users';

export const getUsers = (params?: GetUsersRequest) =>
  request.get<GetUsersRequest, AxiosResponse<GetUsersResponse>>('/users', params);
