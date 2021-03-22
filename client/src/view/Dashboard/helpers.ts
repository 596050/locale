import { ADD_ERROR } from '../../actions'
import { ErrorType } from '../../model'
import { cleanPostcode, extractPostcodes } from '../../util'

export const resolvePostcode = (input: string, id: string) => {
  const postcodes = extractPostcodes(input)
  let postcode = undefined
  const error = {
    id,
    message: '',
    type: ErrorType.FORM_ELEMENT,
  }
  let type = undefined
  let errorAction = undefined

  if (postcodes?.length > 1) {
    error.message = 'Please provide one postcode'
    type = ADD_ERROR
  } else if (postcodes?.length < 1) {
    error.message = 'Invalid postcode'
    type = ADD_ERROR
  }
  if (type) {
    errorAction = {
      payload: {
        errors: {
          [id]: error,
        },
      },
      type,
    }
  } else {
    postcode = cleanPostcode(postcodes[0]) || ''
  }
  return { errorAction, postcode }
}
