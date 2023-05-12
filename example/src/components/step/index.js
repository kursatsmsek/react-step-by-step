import React, { useState } from 'react'

const StepA = ({
  title,
  children,
  onNextStep,
  onLastStep,
  hideTitle,
  customButtonStyle,
  customNextStepFunction
}) => {
  const [isCompleted, setIsCompleted] = useState(false)

  const handleNextStep = () => {
    setIsCompleted(true)
    if (onNextStep) {
      onNextStep()
      customNextStepFunction()
    }
  }

  return (
    <div className='stepContainer'>
      {!hideTitle && (
        <div className='stepTitleDiv'>
          <div className='stepTitle'>{title}</div>
        </div>
      )}

      <div className='stepChildrenDiv'>{children}</div>

      <div className='stepButtonDiv'>
        {!isCompleted && !onLastStep && (
          <button
            onClick={handleNextStep}
            style={customButtonStyle}
            className='stepButton'
          >
            Next Step
          </button>
        )}
        {onLastStep && (
          <button
            onClick={onLastStep}
            style={customButtonStyle}
            className='stepButton'
          >
            Finish
          </button>
        )}
      </div>
    </div>
  )
}

export default StepA
