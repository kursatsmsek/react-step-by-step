import React, { useState } from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const StepsContainer = ({ fullArea, bgColor, children }) => {
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
    <div className={styles.stepsContainer} style={containerStyle}>
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

export const Step = ({
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
      if (customNextStepFunction) {
        customNextStepFunction()
      }
    }
  }

  return (
    <div className={styles.stepContainer}>
      {!hideTitle && (
        <div className={styles.stepTitleDiv}>
          <div className='stepTitle'>{title}</div>
        </div>
      )}

      <div className={styles.stepChildrenDiv}>{children}</div>

      <div className={styles.stepButtonDiv}>
        {!isCompleted && !onLastStep && (
          <button
            onClick={handleNextStep}
            style={customButtonStyle}
            className={styles.stepButton}
          >
            Next Step
          </button>
        )}
        {onLastStep && (
          <button
            onClick={onLastStep}
            style={customButtonStyle}
            className={styles.stepButton}
          >
            Finish
          </button>
        )}
      </div>
    </div>
  )
}

// export const StepsContainer = () => {
//   return <div className={styles.stepsContainer}>Aynen</div>
// }
