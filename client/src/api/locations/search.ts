import { APIResponse, Location, RequestOptions } from '../../model'
import { generateQueryParams } from '../../util'
import { get } from '../'

type SearchLocationRequestOptions = RequestOptions<{
  params: Partial<Location>
}>

export const searchLocation = async (
  opts?: SearchLocationRequestOptions
): Promise<APIResponse<{ response: Location[] }>> => {
  const params = opts?.params

  const paramsString = params
    ? generateQueryParams<SearchLocationRequestOptions['params']>(params)
    : ''

  const url = `${process.env.RAZZLE_API_BASE_URL}/locations?`.concat(
    [paramsString].join('&')
  )

  let error = undefined,
    response = undefined
  try {
    response = await get<Location[]>(url, opts?.options)
  } catch (err) {
    console.error(err)
    error = err
  }

  return { error, response }
}
