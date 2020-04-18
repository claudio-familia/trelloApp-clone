import { uuid } from '../utils'

export default {
  name: 'agileBoard',
  columns: [
    {
      name: 'To-do',
      tasks: [
        {
          description: '',
          name: 'First task',
          id: uuid(),
          userAssigned: null
        },
        {
          description: '',
          name: 'Second task',
          id: uuid(),
          userAssigned: null
        },
        {
          description: '',
          name: 'And third task',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'In-progress',
      tasks: [
        {
          description: '',
          name: 'First task',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'Done',
      tasks: [
        {
          description: '',
          name: 'First task',
          id: uuid(),
          userAssigned: null
        }
      ]
    }
  ]
}
