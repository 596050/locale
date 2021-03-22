import { APIError } from './'

export type APIResponse<T> = Partial<T> & Partial<APIError>

export type RequestOptions<T> = T & { options?: RequestInit }
