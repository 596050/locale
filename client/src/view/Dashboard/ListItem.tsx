import React, { ReactElement } from 'react'

import { Avatar, ListItem } from '../../component'
import { Location } from '../../model'

type Props = {
  data: Partial<Location>
}

const Description = ({ data }: { data: Partial<Location> }) => {
  return (
    <>
      <div>Country: {data.country}</div>
      <div>Longitude: {data.longitude}</div>
      <div>Latitude: {data.latitude}</div>
    </>
  )
}

const _ListItem = ({ data }: Props): ReactElement => {
  return (
    <div id="list-item">
      <ListItem
        avatar={<Avatar src={data.image} draggable={false} />}
        title={data.postcode}
        description={<Description data={data} />}
      />
    </div>
  )
}

export default _ListItem
