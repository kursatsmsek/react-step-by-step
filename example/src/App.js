import React, { useState } from 'react'
import './App.css'

import { StepsContainer, Step, OutlinedInput } from 'react-step-by-step'
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
          buttonText='Next Step'
          hideTitle={false}
          buttonClassName='aynenn'
          customNextStepFunction={() => alert('as')}
        >
          <div>First</div>
          <OutlinedInput
            placeholder='aa'
            value={values.input1}
            onChange={(e) => setValues({ ...values, input1: e.target.value })}
          />
        </Step>
        <Step title='Step 2' buttonText='Next Step'>
          <p>Second</p>
          <OutlinedInput
            placeholder='aa'
            value={values.input2}
            onChange={(e) => setValues({ ...values, input2: e.target.value })}
          />
        </Step>
        <Step title='Last Step' onLastStep={handleLastStep} buttonText='Finish'>
          <p>Last</p>
          <OutlinedInput
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
