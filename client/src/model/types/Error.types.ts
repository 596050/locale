export enum ErrorType {
  'FORM_ELEMENT' = 'FORM_ELEMENT',
  'API_RESPONSE' = 'API_RESPONSE',
  'SECTION' = 'SECTION',
  'APP' = 'APP',
}

export type ErrorContextValues = {
  hasError: boolean
  message: string
  type: ErrorType
  id: string
  meta: any
  result: any
}

export interface APIError {
  error: Error
}
