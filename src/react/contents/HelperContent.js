import classnames from 'classnames'
import ToolTip from 'react-portal-tooltip'
import React from 'react'
import { Button } from 'transactions-interface-web'
import { HelperContent as withState } from 'transactions-tooltip-state'

const HelperContent = ({ active,
  arrow,
  ContentComponent,
  content,
  cta,
  decoration,
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
  text
}) => {
  let defaultGroup
  if (pathname) {
    defaultGroup = `${defaultGroup}-${pathname}`
  }
  const isPreviousButton = false
  return (
    <ToolTip active={active}
      arrow={arrow}
      group={group || defaultGroup}
      parent={parent}
      position={position}
      style={decoration}>
      <div className='helper-content'
        ref={_e => setHelperElement(_e)} >
        <div className='helper-content__box'>
          <ContentComponent {...content} text={text} />
        </div>
        <div className={classnames('helper-content__interaction flex items-center justify-center', {
          'helper-content__interaction--large': isPreviousButton
        })}>
          {
            isPreviousButton && (
              <div className='helper-content__interaction__previous'>
                <Button className='button helper-content__interaction__previous__button'
                  onClick={() => onPreviousClick(stepIndex)}>
                  Previous
                </Button>
              </div>
            )
          }
          <div className='helper-content__interaction__next'>
            <Button className='button helper-content__interaction__next__button'
              onClick={() => {
                onNextClick(stepIndex)
                if (isLast) {
                  handleStepReset && handleStepReset()
                }
              }} >
              { cta || 'Next' }
            </Button>
          </div>
        </div>
      </div>
    </ToolTip>
  )
}

export default withState(HelperContent)
