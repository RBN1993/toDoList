import reducer, { InitialState, State } from './reducer'
import {
  Actions,
  addTaskWithCurrentValue,
  loadList,
  removeTask,
  toggleTask
} from './actions'
import { Task } from 'types/Task.model'

const executeActions = (
  actions: Actions[] = [],
  initialState: State = InitialState
): State => actions.reduce(reducer, initialState)

describe('Reducer', () => {
  const mockedList: Task[] = [
    { id: '1', value: 'Content1', checked: true },
    { id: '2', value: 'Content2' }
  ]
  describe('TASK_ADDED', () => {
    test('returns state with one task added to toDoList', () => {
      const result = executeActions([addTaskWithCurrentValue('Add this task')])
      expect(result.taskList[0].id).toBeDefined()
      expect(result.taskList[0].value).toBe('Add this task')
      expect(result.taskList[0].checked).toBeUndefined()
    })
    test('returns state with two tasks added to toDoList', () => {
      const [task1, task2] = executeActions([
        addTaskWithCurrentValue('Add this task'),
        addTaskWithCurrentValue('Add this task2')
      ]).taskList
      expect(task1.id).toBeDefined()
      expect(task1.value).toBe('Add this task')
      expect(task1.checked).toBeUndefined()
      expect(task2.id).toBeDefined()
      expect(task2.value).toBe('Add this task2')
      expect(task2.checked).toBeUndefined()
    })
  })
  describe('LIST_LOADED', () => {
    test('stores tasks directly in state', () => {
      expect(executeActions([loadList(mockedList)])).toStrictEqual({
        taskList: mockedList,
        textFilter: ''
      })
    })
  })

  describe('TASK_REMOVED', () => {
    test('returns state without an especific task', () => {
      expect(
        executeActions([loadList(mockedList), removeTask('2')])
      ).toStrictEqual({
        taskList: [mockedList[0]],
        textFilter: ''
      })
    })
  })
  describe('TOGGLE_TASK', () => {
    test('task1: sets checked property to false', () => {
      expect(
        executeActions([loadList(mockedList), toggleTask('1')])
      ).toStrictEqual({
        taskList: [
          { id: '1', value: 'Content1', checked: false },
          { id: '2', value: 'Content2' }
        ],
        textFilter: ''
      })
    })
    test('toggle all tasks', () => {
      expect(
        executeActions([loadList(mockedList), toggleTask('1'), toggleTask('2')])
      ).toStrictEqual({
        taskList: [
          { id: '1', value: 'Content1', checked: false },
          { id: '2', value: 'Content2', checked: true }
        ],
        textFilter: ''
      })
    })
  })
})
