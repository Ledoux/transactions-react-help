import React from 'react'
import { Guide as withState } from 'transactions-tooltip-state'

import Tutorial from './Tutorial'

const Guide = ({ tutorial }) => <Tutorial {...tutorial} />

export default withState(Guide)
