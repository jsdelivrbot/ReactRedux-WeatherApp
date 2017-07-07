import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'

export default (props) => {
  return (
    <Sparklines data={props.data}>
      <SparklinesLine color={props.color} />
    </Sparklines>
  )
}
