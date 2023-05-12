import React, { useState } from 'react'
import './App.css'

import { StepsContainer, Step } from 'react-step-by-step'
import 'react-step-by-step/dist/index.css'

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
        <Step
          title='Step 1'
          hideTitle={false}
          customNextStepFunction={() => alert('as')}
        >
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
