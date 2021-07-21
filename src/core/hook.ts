import { useReducer } from 'react'
import reducer, { InitialState } from './reducer'
import * as Actions from './actions'
export default function useToDoList() {
  const [state, dispatch] = useReducer(reducer, InitialState)

  return {
    taskList: state.taskList,
    handleToggle: (id: string) => dispatch(Actions.toggleTask(id)),
    handleAdd: (value: string) =>
      dispatch(Actions.addTaskWithCurrentValue(value)),
    handleRemove: (id: string) => dispatch(Actions.removeTask(id))
  }
}
