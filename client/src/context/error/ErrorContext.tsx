import React, {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  Reducer,
  useContext,
  useMemo,
  useReducer,
} from 'react'
import omit from 'lodash.omit'

import { ADD_ERROR, REMOVE_ERROR } from '../../actions'
import { ErrorBoundary } from '../../component'
import { ErrorContextValues } from '../../model'
import { keys } from '../../util'

type ContextState = Partial<{
  errors: Maybe<{ [id in string]: Partial<ErrorContextValues> }>
}>

type Action = { payload: ContextState; type: string }

const ErrorContext = createContext<{
  state?: ContextState
  dispatch?: Dispatch<Action>
}>({})

export const useErrorContext = () => useContext(ErrorContext)

const reducer = (state: ContextState, action: Action) => {
  let newState: ContextState = {}
  switch (true) {
    case ADD_ERROR === action.type: {
      newState = {
        ...state,
        ...action.payload,
      }
      break
    }
    case REMOVE_ERROR === action.type: {
      newState = Object.assign({}, state)
      keys(action.payload.errors).forEach((key) => {
        if (newState.errors) {
          delete newState.errors[key]
        }
      })
      if (!keys(newState?.errors)?.length) {
        newState = omit(newState, 'errors')
      }
    }
    default: {
      return state
    }
  }
  return newState
}

const initialState = {
  errors: null,
}

function ErrorProvider({ children }: { children: ReactNode }): ReactElement {
  const [state, dispatch] = useReducer<Reducer<ContextState, Action>>(
    reducer,
    initialState
  )

  const handleErrorBoundary = (error: Partial<ErrorContextValues>): void => {
    dispatch({
      payload: {
        ...state,
        errors: {
          ...state.errors,
          ...(error.id ? { [error.id]: error } : {}),
        },
      },
      type: ADD_ERROR,
    })
  }

  const value = useMemo(
    () => ({
      dispatch,
      state,
    }),
    [dispatch, state]
  )

  return (
    <ErrorContext.Provider value={value}>
      <ErrorBoundary onError={handleErrorBoundary}>{children}</ErrorBoundary>
    </ErrorContext.Provider>
  )
}

export default ErrorProvider
