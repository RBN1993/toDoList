import { useCallback, useEffect, useReducer } from 'react'
import { isEmpty } from 'ramda'
import reducer, { InitialState } from './reducer'
import * as Actions from './actions'
import { persistTaskList, recoverTaskList } from './lib'
import { message } from 'antd'

export default function useToDoList() {
  const [state, dispatch] = useReducer(reducer, InitialState)
  const { taskList } = state

  useEffect(() => {
    const storedTaskList = recoverTaskList()
    if (!storedTaskList || isEmpty(storedTaskList)) return
    Actions.loadList(storedTaskList)
  }, [])
  const handleSaveTaskList = useCallback(() => {
    persistTaskList(taskList)
  }, [taskList])
  const handleUndo = useCallback(() => {
    if (!taskList || isEmpty(taskList)) {
      message.warn('No es posible recuperar la tarea', 3)
      return
    }
  }, [taskList])
  return {
    taskList,
    handleToggle: (id: string) => dispatch(Actions.toggleTask(id)),
    handleAdd: (value: string) =>
      dispatch(Actions.addTaskWithCurrentValue(value)),
    handleRemove: (id: string) => dispatch(Actions.removeTask(id)),
    handleSaveTaskList,
    handleUndo,
    handleRemoveAll: () => dispatch(Actions.loadList([]))
  }
}
