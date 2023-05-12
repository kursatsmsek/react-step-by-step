import React, { useState } from 'react'

const StepsContainerA = ({ fullArea, bgColor, children }) => {
  const [activeStep, setActiveStep] = useState(0)

  const handleNextStep = () => {
    setActiveStep(activeStep + 1)
  }

  const containerStyle = {
    width: fullArea ? '100%' : '368px',
    height: fullArea ? '100%' : '468px',
    backgroundColor: bgColor ? bgColor : 'transparent'
  }

  return (
    <div className='stepsContainer' style={containerStyle}>
      {React.Children.map(children, (child, index) => {
        if (index === activeStep) {
          return React.cloneElement(child, {
            onNextStep: handleNextStep
          })
        }
        return null
      })}
    </div>
  )
}

export default StepsContainerA
