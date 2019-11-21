import { JSONSchemaBridge } from 'uniforms-bridge-json-schema'

import ListFieldReorder from '@bit/amazingdesign.uniforms.list-field-reorder'

import createValidator from '../createValidator'

export const schema = {
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

export const model = {
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

export const schemaValidator = createValidator(schema)
export const bridge = new JSONSchemaBridge(schema, schemaValidator)

export default {
  schema,
  schemaValidator,
  bridge,
  model,
}