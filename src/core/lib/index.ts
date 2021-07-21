import { Task } from 'types/Task.model'

const ObjectId = require('bson-objectid')
const LAST_TASK_REMOVED: string = 'LAST_TASK_REMOVED'

export function makeId(): string {
  return ObjectId().toString()
}

export function persistLastTask(task: Task) {
  localStorage.setItem(LAST_TASK_REMOVED, JSON.stringify(task))
}

export function recoverLastTask(): Task {
  return JSON.parse(localStorage.getItem(LAST_TASK_REMOVED) || '')
}
