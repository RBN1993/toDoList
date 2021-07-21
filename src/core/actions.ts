import { Task } from 'types/Task.model'

export enum ActionTypes {
  TASK_ADDED = 'TASK_ADDED',
  TASK_REMOVED = 'TASK_REMOVED',
  LIST_LOADED = 'LIST_LOADED',
  TOGGLE_TASK = 'TOGGLE_TASK',
  SAVE_ALL = 'SAVE_ALL'
}

type AddTaskAction = {
  type: ActionTypes.TASK_ADDED
  payload: string
}
export function addTask(textContent: string): AddTaskAction {
  return {
    type: ActionTypes.TASK_ADDED,
    payload: textContent
  }
}

type RemoveTaskAction = {
  type: ActionTypes.TASK_REMOVED
  payload: string
}

export function removeTask(id: string): RemoveTaskAction {
  return {
    type: ActionTypes.TASK_REMOVED,
    payload: id
  }
}

type LoadListAction = {
  type: ActionTypes.LIST_LOADED
  payload: Task[]
}
export function loadList(list: Task[]): LoadListAction {
  return {
    type: ActionTypes.LIST_LOADED,
    payload: list
  }
}

type ToggleTaskAction = {
  type: ActionTypes.TOGGLE_TASK
  payload: string
}

export function toggleTask(id: string): ToggleTaskAction {
  return { type: ActionTypes.TOGGLE_TASK, payload: id }
}

export type Actions =
  | AddTaskAction
  | RemoveTaskAction
  | LoadListAction
  | ToggleTaskAction
