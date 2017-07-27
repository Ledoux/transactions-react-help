import React, { Component } from 'react'
const { getUpdatedSearchString } = require('../utils/navigation').default

import Helper from './Helper'

class Helpers extends Component {
  constructor () {
    super ()
    this.state = {
      isPrevious: false
    }
  }
  componentDidMount () {
    // reset the index
    const search = getUpdatedSearchString({
      helperStepIndex: 0
    })
    history.push({ search })
  }
  componentDidUpdate (prevProps) {
    // when we want to go back, we need actually
    // to force one time a refresh to reload all the tooltips
    // in the same group
    const { isPrevious,
      pathname,
      stepIndex } = this.props
    if (!isPrevious && stepIndex < prevProps.stepIndex) {
      this.setState({ isPrevious: true })
      return
    }
    if (isPrevious && stepIndex > prevProps.stepIndex) {
      this.setState({ isPrevious: false })
    }
  }
  render () {
    const { collectionName,
      helpersByCollectionName,
      history,
      pathname,
      stepIndex
    } = this.props
    const helpers = helpersByCollectionName[collectionName]
    return (<div>
      {
        helpers && helpers.map((helper, index) => {
          let isActive, isVisible
          // first we decide from custom reasons if the
          // helper has to be active
          if (helper.getIsVisible) {
            isVisible = helper.getIsVisible(this.props)
          }
          // for the last element, we want to disappear right after clicking
          // on the Got it! button
          const isForceDisappear = helper.isForceDisappear && isVisible
            && (helper.stepIndex === stepIndex - 1)
          // then we add the global condition
          isActive = isVisible && helper.stepIndex === stepIndex
          return !isForceDisappear && <Helper
            active={isActive}
            isVisible={isVisible}
            key={index}
            onNextClick={stepIndex => {
              history.push({
                search: getUpdatedSearchString({
                helperStepIndex: stepIndex + 1
              })})
            }}
            onPreviousClick={stepIndex => {
              history.push({
                search: getUpdatedSearchString({
                helperStepIndex: stepIndex - 1
              })})
            }}
            {...helper}
            />})
      }
    </div>)
  }
}

Helpers.helpersByCollectionName = {
  helpersByCollectionName: {}
}

export default Helpers
