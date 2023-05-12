import React, { useState } from 'react'
import './App.css'

import 'react-step-by-step/dist/index.css'
import StepsContainer from './components/steps-container'
import Step from './components/step'

const App = () => {
  const [values, setValues] = useState({
    input1: '',
    input2: '',
    input3: ''
  })

  const handleLastStep = () => {
    console.log('Completed => ', values)
  }
  return (
    <div>
      <StepsContainer fullArea={false} bgColor={'cyan'}>
        <Step title='Step 1'>
          <div>First</div>
          <input
            placeholder='aa'
            value={values.input1}
            onChange={(e) => setValues({ ...values, input1: e.target.value })}
          />
        </Step>
        <Step title='Step 2'>
          <p>Second</p>
          <input
            placeholder='aa'
            value={values.input2}
            onChange={(e) => setValues({ ...values, input2: e.target.value })}
          />
        </Step>
        <Step title='Last Step' onLastStep={handleLastStep}>
          <p>Last</p>
          <input
            placeholder='aa'
            value={values.input3}
            onChange={(e) => setValues({ ...values, input3: e.target.value })}
          />
        </Step>
      </StepsContainer>
    </div>
  )
}

export default App
