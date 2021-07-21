import React, { FC } from 'react'
import { List } from 'antd'
import TaskItem from 'components/Task/Task.component'
import { Task } from 'types/Task.model'

interface ToDoListProps {
  dataSource: Task[]
  onCheck: (id: string) => void
  onRemove: (id: string) => void
}

const ToDoList: FC<ToDoListProps> = ({ dataSource, onCheck, onRemove }) => {
  return (
    <List
      grid={{
        xs: 1,
        sm: 2,
        md: 2,
        lg: 2,
        xl: 2,
        xxl: 3
      }}
      dataSource={dataSource}
      renderItem={task => (
        <TaskItem {...task} onCheck={onCheck} onRemove={onRemove} />
      )}
    />
  )
}

export default ToDoList
