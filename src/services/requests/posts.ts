import { GetPostsRequest, GetPostsResponse } from '@/interfaces';
import { request } from '../axios';
import { AxiosResponse } from 'axios';

export const getPosts = (params?: GetPostsRequest) =>
  request.get<GetPostsRequest, AxiosResponse<GetPostsResponse>>('/posts', params);
