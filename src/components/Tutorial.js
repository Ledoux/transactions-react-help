import React from 'react'
import { Tutorial as withState } from 'transactions-tooltip-state'

import Helper from './Helper'

const Tutorial = props => {
  const { collectionName,
    handleStepReset,
    helpers,
    onNextClick,
    onPreviousClick,
    pathname,
    stepIndex
  } = props
  return (
    <div>
      {
        helpers && helpers.map((helper, index) => {
          let isActive, isVisible
          // first we decide from custom reasons if the
          // helper has to be active
          if (helper.getIsVisible) {
            isVisible = helper.getIsVisible(props)
          }
          // for the last element, we want to disappear right after clicking
          // on the Got it! button
          const isForceDisappear = helper.isForceDisappear && isVisible
            && (helper.stepIndex === stepIndex - 1)
          // then we add the global condition
          isActive = isVisible && helper.stepIndex === stepIndex
          console.log('isActive', isActive, 'isVisible', isVisible)
          return !isForceDisappear && <Helper active={isActive}
            isVisible={isVisible}
            key={index}
            handleStepReset={handleStepReset}
            onNextClick={onNextClick}
            onPreviousClick={onPreviousClick}
            {...helper}
          />
        })
      }
    </div>
  )
}

export default withState(Tutorial)
