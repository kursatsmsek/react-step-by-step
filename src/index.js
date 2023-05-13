import React, { useState } from 'react'
import styles from './styles.module.css'

export const StepsContainer = ({
  fullArea,
  bgColor,
  children,
  borderRadius
}) => {
  const [activeStep, setActiveStep] = useState(0)

  const handleNextStep = () => {
    setActiveStep(activeStep + 1)
  }

  const containerStyle = {
    width: fullArea ? '100%' : '368px',
    height: fullArea ? '100%' : 'auto',
    minHeight: '468px',
    backgroundColor: bgColor ? bgColor : 'transparent',
    borderRadius: borderRadius ? borderRadius : 0
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
  buttonText,
  children,
  onNextStep,
  onLastStep,
  hideTitle,
  hideButton,
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
          <div className={styles.stepTitle}>{title}</div>
        </div>
      )}

      <div className={styles.stepChildrenDiv}>{children}</div>

      {!hideButton && (
        <div className={styles.stepButtonDiv}>
          {!isCompleted && !onLastStep && (
            <button
              onClick={handleNextStep}
              style={customButtonStyle}
              className={styles.stepButton}
            >
              {buttonText}
            </button>
          )}
          {onLastStep && (
            <button
              onClick={onLastStep}
              style={customButtonStyle}
              className={styles.stepButton}
            >
              {buttonText}
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export const OutlinedInput = ({
  placeholder,
  value,
  onChange,
  disabled,
  maxLength,
  required,
  autoFocus,
  type
}) => {
  const className = 'pure-material-textfield-outlined'
  return (
    <label className={styles[className]}>
      <input
        type={type}
        placeholder=' '
        value={value}
        onChange={onChange}
        disabled={disabled}
        maxLength={maxLength}
        required={required}
        autoFocus={autoFocus}
      />
      <span>{placeholder}</span>
    </label>
  )
}
