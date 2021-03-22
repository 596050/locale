import React, { ReactElement } from 'react'
import {
  Col as AntCol,
  ColProps as AntColProps,
  Row as AntRow,
  RowProps as AntRowProps,
} from 'antd'

type RowProps = AntRowProps

export const Row = (props: RowProps): ReactElement => {
  return <AntRow {...props} />
}

type ColProps = AntColProps

export const Col = (props: ColProps): ReactElement => {
  return <AntCol {...props} />
}
