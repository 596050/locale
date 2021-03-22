import React, { ReactElement } from 'react'
import { useVirtual } from 'react-virtual'

import { List } from '../../component'
import { Location } from '../../model'

import ListItem from './ListItem'

type Props = {
  data: Location[]
}

const _List = ({ data = [] }: Props): ReactElement => {
  const parentRef = React.useRef(null)

  const rowVirtualizer = useVirtual({
    overscan: 10,
    paddingStart: 20,
    parentRef,
    size: data?.length,
  })

  return (
    <List className="posts-list" ref={parentRef}>
      <div
        className="row-visualizer-container"
        style={{
          height: `${rowVirtualizer.totalSize}px`,
        }}
      >
        {rowVirtualizer.virtualItems.map((virtualRow) => {
          const item = data[virtualRow.index]
          return (
            <div
              key={virtualRow.index}
              ref={virtualRow.measureRef}
              style={{
                height: `${item}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
              className="list-item-container"
            >
              <ListItem data={item} />
            </div>
          )
        })}
      </div>
    </List>
  )
}

export default _List
