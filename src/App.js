import React from 'react'

import { AutoForm } from 'uniforms-material'
import { JSONSchemaBridge } from 'uniforms-bridge-json-schema'

import ListFieldReorder from '@bit/amazingdesign.uniforms.list-field-reorder'

import createValidator from './createValidator'

const schema = {
  type: 'object',
  required: [
    'lessons'
  ],
  properties: {
    lessons: {
      type: 'array',
      items: {
        type: 'object',
        required: [
          'name',
          'teacher'
        ],
        properties: {
          name: {
            type: 'string'
          },
          teacher: {
            type: 'string'
          }
        }
      },
      uniforms: {
        component: ListFieldReorder
      }
    }
  }
}

const schemaValidator = createValidator(schema)
const bridge = new JSONSchemaBridge(schema, schemaValidator)

const model = {
  lessons: [
    {
      name: 'JS Skills',
      teacher: 'John Doe',
    },
    {
      name: 'React Skills',
      teacher: 'Jane Doe',
    }
  ]
}

const App = () => (
  <AutoForm
    schema={bridge}
    model={model}
    onSubmit={console.log}
  />
)

export default App 