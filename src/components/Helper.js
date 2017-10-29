import classnames from 'classnames'
import ToolTip from 'react-portal-tooltip'
import React from 'react'
import { Button } from 'transactions-interface-web'
import { Helper as withState } from 'transactions-tooltip-state'

const Helper = ({ active,
  arrow,
  ChildComponent,
  childProps,
  globalStepIndex,
  group,
  handleStepReset,
  isLast,
  onNextClick,
  onPreviousClick,
  pathname,
  parent,
  position,
  setHelperElement,
  stepIndex,
  style,
  text
}) => {
    let defaultGroup
    if (pathname) {
      defaultGroup = `${defaultGroup}-${pathname}`
    }
    // const isPreviousButton = stepIndex !== 0
    const isPreviousButton = false
    console.log('BEN ALORS', active, parent, position, arrow)
    return (
      <ToolTip active={active}
        arrow={arrow}
        group={group || defaultGroup}
        parent={parent}
        position={position}
        style={style}>
        <div className='helper'
          ref={_e => setHelperElement(_e)} >
          <div className='helper__child'>
            <ChildComponent {...childProps} />
          </div>
          <div className={classnames('helper__interaction flex items-center justify-center', {
            'helper__interaction--large': isPreviousButton
          })}>
            {
              isPreviousButton && (
                <div className='helper__interaction__previous'>
                  <Button className='button helper__interaction__previous__button'
                    onClick={() => onPreviousClick(stepIndex)}>
                    Previous
                  </Button>
                </div>
              )
            }
            <div className='helper__interaction__next'>
              <Button className='button helper__interaction__next__button'
                onClick={() => {
                  onNextClick(stepIndex)
                  if (isLast) {
                    handleStepReset && handleStepReset()
                  }
                }} >
                { text || 'Next' }
              </Button>
            </div>
          </div>
        </div>
      </ToolTip>
    )
}

export default withState(Helper)
