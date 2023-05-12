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
      <h2>{title}</h2>
      {children}
      {!isCompleted && !onLastStep && (
        <button onClick={handleNextStep}>Next Step</button>
      )}
      {onLastStep && <button onClick={onLastStep}>Finish</button>}
    </div>
  )
}

export default Step
