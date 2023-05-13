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

<StepsContainer fullArea={false} borderRadius='5px'>
  <Step title='Sign In' buttonText='Next Step' hideTitle={true}>
    <div style={{ fontWeight: 'bold' }}>
      Hey there! Ready to join the fun?
    </div>
    <div style={{ fontSize: 'x-small', marginBottom: '4px' }}>
      Fill in your email address below and let's get this party started!
    </div>
    <OutlinedInput
      placeholder='E-mail'
    />
  </Step>
  <Step
    title='Sign In'
    customNextStepFunction={() => console.log('delightful journey')}
    buttonText='Sign In'
    hideTitle={true}
  >
    <div style={{ fontWeight: 'bold' }}>
      Welcome to the sweet realm!
    </div>
    <div style={{ fontSize: 'x-small', marginBottom: '4px' }}>
      To unlock the confectionery wonders, kindly share your password in
      the box below.
    </div>
    <OutlinedInput
      type='password'
      placeholder='Password'
    />
  </Step>
  <Step title='Signed Up !' onLastStep={() => console.log("button is hide here")} hideButton={true}>
    <div style={{ fontWeight: 'bold' }}>
    </div>
    <div
      style={{
        fontWeight: 'bold',
        fontSize: 'small',
        marginBottom: '4px'
      }}
    >
      Welcome to our sweet sanctuary of indulgence! Join us for a
      delightful experience filled with delectable treats and sugary
      delights. Get ready to satisfy your cravings and embark on a
      mouthwatering adventure!
    </div>
  </Step>
</StepsContainer>
```

https://github.com/kursatsmsek/react-step-by-step/assets/80540635/070ead80-567e-495f-b184-724da4f4a092


## License

MIT © [kursatsmsek](https://github.com/kursatsmsek)
