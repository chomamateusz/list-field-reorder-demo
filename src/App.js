import React from 'react'

import { AutoForm } from 'uniforms-material'

import { strings, arraysOfArrays } from './schemas'

const App = () => (
  <>
    <AutoForm
      schema={strings.bridge}
      model={strings.model}
      onSubmit={console.log}
    />
    <AutoForm
      schema={arraysOfArrays.bridge}
      model={arraysOfArrays.model}
      onSubmit={console.log}
    />
  </>
)

export default App 