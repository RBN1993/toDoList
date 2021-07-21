import { useCallback, useEffect, useReducer } from 'react'
import { isEmpty } from 'ramda'
import reducer, { InitialState } from './reducer'
import * as Actions from './actions'
import {
  clearAllTasksStored,
  clearLastTaskRecovered,
  persistTaskList,
  recoverLastTask,
  recoverTaskList
} from './lib'
import { message } from 'antd'

export default function useToDoList() {
  const [state, dispatch] = useReducer(reducer, InitialState)
  const { taskList } = state

  useEffect(() => {
    const storedTaskList = recoverTaskList()
    if (!storedTaskList || isEmpty(storedTaskList)) return
    dispatch(Actions.loadList(storedTaskList))
  }, [])
  const handleSaveTaskList = useCallback(() => {
    if (!taskList || isEmpty(taskList))
      return message.warn('No hay tareas por guardar', 3)
    persistTaskList(taskList)
    message.info('Todas las tareas guardadas correctamente', 3)
  }, [taskList])
  const handleUndo = useCallback(() => {
    const lastRemovedTask = recoverLastTask()
    if (/*!taskList || isEmpty(taskList) ||*/ !lastRemovedTask) {
      message.warn('No es posible recuperar la tarea', 3)
      return
    }
    dispatch(Actions.storeTaskInState(lastRemovedTask))
    clearLastTaskRecovered()
  }, [])

  const handleRemoveAll = useCallback(() => {
    dispatch(Actions.loadList([]))
    clearAllTasksStored()
  }, [])
  return {
    taskList,
    handleToggle: (id: string) => dispatch(Actions.toggleTask(id)),
    handleAdd: (textValue: string) =>
      dispatch(Actions.addTaskWithCurrentValue(textValue)),
    handleRemove: (id: string) => dispatch(Actions.removeTask(id)),
    handleSaveTaskList,
    handleUndo,
    handleRemoveAll
  }
}
