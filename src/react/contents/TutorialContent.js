import React from 'react'
import { TutorialContent as withState } from 'transactions-tooltip-state'

import PartContent from './PartContent'

const TutorialContent = ({ decoration, part }) => {
  return <PartContent decoration={decoration} {...part} />
}

export default withState(TutorialContent)
