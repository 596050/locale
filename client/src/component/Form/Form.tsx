import React, { memo, ReactElement, useEffect, useState } from 'react'
import {
  Form as AntForm,
  FormItemProps as AntFormItemProps,
  FormProps as AntFormProps,
} from 'antd'

import { useErrorContext } from '../../context'

type FormProps = AntFormProps

const Form = ({ children, ...rest }: FormProps): ReactElement => {
  return <AntForm {...rest}>{children}</AntForm>
}

export default Form

interface FormElementProps extends AntFormItemProps {
  loading?: boolean
}

const _FormElement = ({
  children,
  id,
  loading,
  ...rest
}: FormElementProps): ReactElement => {
  const { state: errorState = {} } = useErrorContext()
  const [help, setHelp] = useState<string>()
  const validateStatus = !!help ? 'error' : !!loading ? 'validating' : undefined
  const htmlFor = id

  const errorMessage =
    id && errorState?.errors?.hasOwnProperty(id)
      ? errorState?.errors[id].message
      : undefined

  useEffect(() => {
    if (id && errorState?.errors?.hasOwnProperty(id)) {
      setHelp(errorState?.errors[id].message)
    } else {
      setHelp(undefined)
    }
  }, [errorMessage])

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        id,
      })
    }
    return child
  })

  return (
    <AntForm.Item
      id={id}
      validateStatus={validateStatus}
      htmlFor={htmlFor}
      help={help}
      {...rest}
    >
      {childrenWithProps}
    </AntForm.Item>
  )
}

export const FormElement = memo(_FormElement)
