import React from 'react'
import { Pick } from 'transactions-cms-web'
import { Guide as withState } from 'transactions-tooltip-state'

const Guide = ({ location: { query: { tutorialName } } }) => {
  return (
    <div>
      {
        tutorialName && <Pick collectionName='tutorials'
        query={{ name: tutorialName }} />
      }
    </div>
  )
}

export default withState(Guide)
