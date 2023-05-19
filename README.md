# react-step-by-step

> Introducing react-step-by-step, a delightful and charming npm package that offers a seamless way to navigate through components with captivating animations. With its user-friendly interface, react-step-by-step allows you to effortlessly traverse each step, creating an engaging and interactive experience for your users. Enhance your projects with this delightful package and let the enchanting animations guide your audience through a delightful journey.

[![NPM](https://img.shields.io/npm/v/react-step-by-step.svg)](https://www.npmjs.com/package/react-step-by-step) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add react-step-by-step
```

## Usage

```jsx
import React, { Component } from 'react'

import { StepsContainer, Step, OutlinedInput } from 'react-step-by-step'
import 'react-step-by-step/dist/index.css'

const [activeStep, setActiveStep] = useState(0)

  <StepsContainer
    fullArea={true}
    borderRadius='5px'
    activeStep={activeStep}
    setActiveStep={setActiveStep}
  >
  <Step title='Step 1' buttonText='Next Step' hideTitle={true}>
    <div>Customize Here</div>
    <OutlinedInput placeholder='E-mail' />
  </Step>
  <Step
    title='Step 2'
    customNextStepFunction={() => console.log('delightful journey')}
    buttonText='Step 2'
    hideTitle={true}
  >
    <div>Customize Here</div>
  </Step>
  <Step
    title='Step 3 !'
    onLastStep={() => console.log('button is hide here')}
    hideButton={true}
  >
    <div>Customize Here</div>
  </Step>
</StepsContainer>
```

## Example Video

[![example video](https://img.youtube.com/vi/2vb0SS0R2iw/0.jpg)](https://www.youtube.com/watch?v=2vb0SS0R2iw)

## License

MIT © [kursatsmsek](https://github.com/kursatsmsek)
