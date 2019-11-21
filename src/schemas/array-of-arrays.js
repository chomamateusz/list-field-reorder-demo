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
          },
          exams: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                mark: {
                  type: 'number',
                  enum: [2, 3, 4, 5],
                },
                subject: {
                  type: 'string',
                  enum: ['ES5', 'ES6', 'React', 'jQuery'],
                }
              }
            },
            uniforms: {
              component: ListFieldReorder
            }
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
      name: 'Student',
      teacher: 'Jane Doe',
      exams: [
        { mark: 2, subject: 'React' },
        { mark: 5, subject: 'jQuery' }
      ]
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