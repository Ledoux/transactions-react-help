import React from 'react'
import { PartContent as withState } from 'transactions-tooltip-state'

import HelperContent from './HelperContent'

const PartContent = ({ collectionName,
  decoration,
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
          return !isForceDisappear && (
            <HelperContent active={isActive}
              decoration={decoration}
              key={index}
              handleStepReset={handleStepReset}
              onNextClick={onNextClick}
              onPreviousClick={onPreviousClick}
              {...visibleHelper}
            />
          )
        })
      }
    </div>
  )
}

export default withState(PartContent)
