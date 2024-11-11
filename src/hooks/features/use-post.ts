import { SWRConfiguration } from 'swr';
import { useAppSWR } from '../common/useAppSWR';
import { getPosts } from '@/services/requests';
import { GetPostsRequest } from '@/interfaces';
import { SWRCacheKey } from '../common/cacheKeyGenerator';

export interface UsePostProps extends SWRConfiguration, Partial<unknown> {}

export const useGetPosts = (params?: GetPostsRequest) =>
  useAppSWR(SWRCacheKey.APP(), () => getPosts(params));
