import { Task } from 'types/Task.model'

const ObjectId = require('bson-objectid')
const LAST_TASK_REMOVED: string = 'LAST_TASK_REMOVED'
const FULL_TASK_LIST = 'FULL_TASK_LIST'
export function makeId(): string {
  return ObjectId().toString()
}

export function persistLastTask(task: Task) {
  localStorage.setItem(LAST_TASK_REMOVED, JSON.stringify(task))
}

export function recoverLastTask(): Task {
  const task = localStorage.getItem(LAST_TASK_REMOVED)
  return task ? JSON.parse(task) : null
}

export function persistTaskList(taskList: Task[]) {
  return localStorage.setItem(FULL_TASK_LIST, JSON.stringify(taskList))
}

export function recoverTaskList() {
  const taskList = localStorage.getItem(FULL_TASK_LIST)
  if (taskList) return JSON.parse(taskList)
}

export function clearLastTaskRecovered() {
  localStorage.setItem(LAST_TASK_REMOVED, '')
}
export function clearAllTasksStored() {
  localStorage.setItem(FULL_TASK_LIST, '')
}
