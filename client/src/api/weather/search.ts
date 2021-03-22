import { Weather } from '../../model'
import { generateQueryParams } from '../../util'
import { get } from '../'

type RequestOptions = { params: Partial<Weather>; options?: RequestInit }

export const searchWeather = (opts?: RequestOptions): Promise<Weather> => {
  const params = opts?.params

  const paramsString = params
    ? generateQueryParams<RequestOptions['params']>(params)
    : ''

  const url = `${process.env.RAZZLE_API_BASE_URL}/weather?`.concat(
    [paramsString].join('&')
  )

  const response = get<Weather>(url, opts?.options)
    .then((res) => res)
    .catch((err) => {
      console.error(err)
      throw new Error(err)
    })

  return response
}
