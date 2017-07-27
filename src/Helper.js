import classnames from 'classnames'
import ToolTip from 'react-portal-tooltip'
import React, { Component } from 'react'

import Button from './Button'
import { IS_FIREFOX } from '../utils/config'

class Helper extends Component {
  constructor () {
    super ()
    this.state = { hasScrolled: false,
      parentElement: null
    }
    this.getHelperElement = this._getHelperElement.bind(this)
    this.getParentElement = this._getParentElement.bind(this)
  }
  async _getParentElement () {
    // maybe the element was not there yet
    // so we set an interval for searching it
    const { parent } = this.props
    return document.querySelector(parent) ||
      new Promise((resolve, reject) => {
        this.findParentElementInterval = setInterval(() => {
          const parentElement = document.querySelector(parent)
          if (parentElement) {
            clearInterval(this.findParentElementInterval)
            resolve(parentElement)
          }
        }, 100)
      })
  }
  async _getHelperElement () {
    // maybe the element was not there yet
    // so we set an interval for searching it
    return this.helperElement ||
      new Promise((resolve, reject) => {
        this.findHelperElementInterval = setInterval(() => {
          if (this.helperElement) {
            clearInterval(this.findHelperElementInterval)
            resolve(this.helperElement)
          }
        }, 100)
      })
  }
  componentDidMount () {
    if (this.props.isVisible) {
      this.getParentElement().then(parentElement => {
        this.setState({ parentElement })
      })
    }
  }
  componentDidUpdate (prevProps) {
    const { active,
      position,
      stepIndex
    } = this.props
    const { hasScrolled,
      parentElement
    } = this.state
    if (parentElement && !hasScrolled && active && stepIndex !== 0) {
      this.setState({ hasScrolled: true })
      this.getHelperElement().then(helperElement => {
        // as this is an absolute positioned
        // element, it will not work in Firefox
        const scrollElement = IS_FIREFOX ? parentElement : this.helperElement
        scrollElement.scrollIntoView({
            behavior: 'smooth',
            block: position === 'top' ? 'end' : 'start'
          })
      })
    }
  }
  componentWillUnmount () {
    if (this.findHelperElementInterval) {
      clearInterval(this.findHelperElementInterval)
    }
    if (this.findParentElementInterval) {
      clearInterval(this.findParentElementInterval)
    }
  }
  render () {
    const { active,
      arrow,
      ChildComponent,
      childProps,
      globalStepIndex,
      group,
      onNextClick,
      onPreviousClick,
      pathname,
      parent,
      position,
      stepIndex,
      style,
      text
    } = this.props
      let defaultGroup
      if (pathname) {
        defaultGroup = `${defaultGroup}-${pathname}`
      }
      // const isPreviousButton = stepIndex !== 0
      const isPreviousButton = false
      return (<ToolTip
        active={active}
        arrow={arrow}
        group={group || defaultGroup}
        parent={parent}
        position={position}
        style={style}
      >
        <div
          className='helper'
          ref={_e => this.helperElement = _e}
        >
          <div className='helper__child'>
            <ChildComponent {...childProps} />
          </div>
          <div className={classnames('helper__interaction', {
            'helper__interaction--large': isPreviousButton
          })}>
            {
              isPreviousButton && (<div className='helper__interaction__previous col'>
                <Button
                  className='button helper__interaction__previous__button'
                  onClick={() => onPreviousClick(stepIndex)}
                >
                  Previous
                </Button>
              </div>)
            }
            <div className='helper__interaction__next col'>
              <Button
                className='button helper__interaction__next__button'
                onClick={() => onNextClick(stepIndex)}
              >
                { text || 'Next' }
              </Button>
            </div>
          </div>
        </div>
      </ToolTip>)
  }
}

export default Helper
