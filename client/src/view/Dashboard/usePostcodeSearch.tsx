import { useRef, useState } from 'react'

import { REMOVE_ERROR } from '../../actions'
import { searchLocation } from '../../api'
import { useErrorContext } from '../../context'
import { Location } from '../../model'

import { resolvePostcode } from './helpers'

export const usePostcodeSearch = () => {
  const cache: { [key in string]: any } = useRef({})
  const [location, setLocation] = useState<Location[]>()
  const [loading, setLoading] = useState<boolean>(false)
  const { state: errorState, dispatch: dispatchError } = useErrorContext()

  const handleSearch = async (input: string, id: string) => {
    if (!dispatchError) return
    setLoading(true)
    const { errorAction, postcode } = resolvePostcode(input, id)
    const cacheKey = `searchLocation:${postcode}`
    const resetAction = {
      payload: {
        errors: {
          [id]: {},
        },
      },
      type: REMOVE_ERROR,
    }

    if (cacheKey in cache.current && cache.current[cacheKey]?.data) {
      setLocation(cache.current[cacheKey].data)
      dispatchError(resetAction)
    } else if (postcode) {
      const { response } = await searchLocation({
        params: { postcode },
      })
      cache.current[cacheKey] = { data: response, timestamp: Date.now() }
      dispatchError(resetAction)
      setLocation(response)
    } else if (errorAction) {
      dispatchError(errorAction)
      setLocation(undefined)
    }
    setLoading(false)
  }

  return { errorState, handleSearch, loading, location }
}
