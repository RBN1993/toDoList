import { Task } from 'types/Task.model'
import { Actions, ActionTypes } from './actions'
import { makeId, persistLastTask } from './lib'
import * as R from 'ramda'

export type State = {
  taskList: Task[]
  textFilter: string
}

export const InitialState: State = {
  taskList: [],
  textFilter: ''
}

function getTaskToPersist(id: string, taskList: Task[]) {
  return R.pipe(
    (l: Task[]) => R.filter((task: Task) => task.id === id, l),
    R.head
  )(taskList)
}

function setCheckedPropertyById(targetId: string, currentList: Task[]) {
  return R.map(task => {
    if (task.id === targetId) return { ...task, checked: !task.checked }
    return task
  }, currentList)
}

export default function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LIST_LOADED: {
      return R.assoc('taskList', action.payload, state)
    }
    case ActionTypes.TASK_ADDED: {
      return R.over(
        R.lensProp('taskList'),
        R.append({ id: makeId(), value: action.payload }),
        state
      )
    }

    case ActionTypes.TASK_REMOVED: {
      persistLastTask(getTaskToPersist(action.payload, state.taskList) as Task)
      return R.over(
        R.lensProp('taskList'),
        R.reject(R.propEq('id', action.payload)),
        state
      )
    }

    case ActionTypes.TOGGLE_TASK: {
      return {
        ...state,
        taskList: setCheckedPropertyById(action.payload, state.taskList)
      }
    }

    default: {
      console.warn('Unknown action')
      return state
    }
  }
}
