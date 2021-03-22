import React from 'react'
import { Input } from 'antd'
import { SearchProps } from 'antd/lib/input/Search'

const { Search: AntSearch } = Input

type Props = SearchProps

export const Search = (props: Props) => {
  return <AntSearch {...props} />
}
