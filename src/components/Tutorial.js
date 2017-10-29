import React from 'react'
import { Tutorial as withState } from 'transactions-tooltip-state'

import Part from './Part'

const Tutorial = ({ part }) => {
  return <Part {...part} />
}

export default withState(Tutorial)
