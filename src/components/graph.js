import React from 'react'
import _ from 'lodash'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

let average = (data) => {
  return _.round(_.sum(data) / data.length)
}

// const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;


export default (props) => {
  return (
    <Sparklines data={props.data}>
      <SparklinesLine color={props.color} />
      <SparklinesReferenceLine type='avg' />
      <div>{average(props.data)} {props.unit}</div>
    </Sparklines>
  )
}
