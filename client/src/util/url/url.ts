import { keys } from '../object'

export const generateQueryParams = <T>(obj: T): string[] => {
  return keys<T>(obj).map((param) => `${param}=${obj[param] || ''}`)
}
