import React, { ReactElement } from 'react'
import { Empty as AntEmpty, EmptyProps } from 'antd'

type Props = EmptyProps

const Empty = (props: Props): ReactElement => {
  return <AntEmpty {...props} />
}

export default Empty
