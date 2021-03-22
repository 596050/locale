import { fix, isValid, match, parse } from 'postcode'

/**
 * Will attempt to find postcodes in a string and return an array of postcodes
 * @param {string} value A string containing postcodes
 * @return {string[]} postcodes returned
 */
export const extractPostcodes = (value: string): string[] => {
  const postcodes = match(value)
  return postcodes
}

/**
 * Will attempt to fix errors in postcode and parse it from value string
 * @param {string} value A string containing a single postcode
 * @return {string | null} postcode returned
 */
export const cleanPostcode = (value: string): Maybe<string> => {
  const { postcode } = parse(fix(value))
  return postcode
}

export const isValidPostcode = (value: string): boolean => {
  return isValid(value)
}
