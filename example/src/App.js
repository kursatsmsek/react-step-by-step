import React, { useState } from 'react'
import './App.css'

import { StepsContainer, Step, OutlinedInput } from 'react-step-by-step'
import 'react-step-by-step/dist/index.css'
import AnimalElephant from './pictures/AnimalElephant.png'
import AnimalLion from './pictures/AnimalLion.png'
import AnimalPanda from './pictures/AnimalPanda.png'

const App = () => {
  const [values, setValues] = useState({
    input1: '',
    input2: ''
  })

  const handleLastStep = () => {
    console.log('Credentials => ', values)
  }

  return (
    <div className='app'>
      <StepsContainer fullArea={false} borderRadius='5px'>
        <Step title='Sign In' buttonText='Next Step' hideTitle={true}>
          <div style={{ fontWeight: 'bold' }}>
            Hey there! Ready to join the fun?
            <img src={AnimalPanda} alt='elephant' width={'90%'} />
          </div>
          <div style={{ fontSize: 'x-small', marginBottom: '4px' }}>
            Fill in your email address below and let's get this party started!
          </div>
          <OutlinedInput
            placeholder='E-mail'
            value={values.input1}
            onChange={(e) => setValues({ ...values, input1: e.target.value })}
          />
        </Step>
        <Step
          title='Sign In'
          customNextStepFunction={handleLastStep}
          buttonText='Sign In'
          hideTitle={true}
        >
          <div style={{ fontWeight: 'bold' }}>
            Welcome to the sweet realm!
            <img src={AnimalLion} alt='lion' width={'90%'} />
          </div>
          <div style={{ fontSize: 'x-small', marginBottom: '4px' }}>
            To unlock the confectionery wonders, kindly share your password in
            the box below.
          </div>
          <OutlinedInput
            type='password'
            placeholder='Password'
            value={values.input2}
            onChange={(e) => setValues({ ...values, input2: e.target.value })}
          />
        </Step>
        <Step title='Signed Up !' onLastStep={handleLastStep} hideButton={true}>
          <div style={{ fontWeight: 'bold' }}>
            <img src={AnimalElephant} alt='panda' width={'90%'} />
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
    </div>
  )
}

export default App
