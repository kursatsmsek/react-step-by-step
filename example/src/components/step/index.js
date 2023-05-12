import React, { useState } from 'react'

const Step = ({ title, children, onNextStep, onLastStep }) => {
  const [isCompleted, setIsCompleted] = useState(false)

  const handleNextStep = () => {
    setIsCompleted(true)
    if (onNextStep) {
      onNextStep()
    }
  }

  return (
    <div className='stepContainer'>
      <div className='stepTitleDiv'>
        <div className='stepTitle'>{title}</div>
      </div>
      <div className='stepChildrenDiv'>{children}</div>
      <div className='stepButtonDiv'>
        {!isCompleted && !onLastStep && (
          <button onClick={handleNextStep} className='stepButton'>
            Next Step
          </button>
        )}
        {onLastStep && (
          <button onClick={onLastStep} className='stepButton'>
            Finish
          </button>
        )}
      </div>
    </div>
  )
}

export default Step
