import React from 'react'
import { Part as withState } from 'transactions-tooltip-state'

import Helper from './Helper'

const Part = ({ collectionName,
  handleStepReset,
  onNextClick,
  onPreviousClick,
  stepIndex,
  visibleHelpers
}) => {
  return (
    <div>
      {
        visibleHelpers && visibleHelpers.map((visibleHelper, index) => {
          let isActive
          // for the last element, we want to disappear right after clicking
          // on the Got it! button
          const isForceDisappear = visibleHelper.isForceDisappear &&
            (visibleHelper.stepIndex === stepIndex - 1)
          // then we add the global condition
          isActive = visibleHelper.stepIndex === stepIndex
          return !isForceDisappear && <Helper active={isActive}
            key={index}
            handleStepReset={handleStepReset}
            onNextClick={onNextClick}
            onPreviousClick={onPreviousClick}
            {...visibleHelper} />
        })
      }
    </div>
  )
}

export default withState(Part)
