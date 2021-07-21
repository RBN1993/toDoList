import React, { FC, useCallback, useMemo, useState } from 'react'
import { List } from 'antd'
import { not } from 'ramda'
import TaskItem from 'components/ToDoList/Task/Task.component'
import { Task } from 'types/Task.model'
import Toolbar from './Toolbar/Toolbar.component'
import styles from './ToDoList.module.css'
interface ToDoListProps {
  dataSource: Task[]
  onCheck: (id: string) => void
  onRemove: (id: string) => void
  onUndo: () => void
  onSave: () => void
  onRemoveAll: () => void
}

const ToDoList: FC<ToDoListProps> = ({
  dataSource,
  onCheck,
  onRemove,
  onUndo,
  onSave,
  onRemoveAll
}) => {
  const [searchText, setSearchText] = useState('')
  const [sort, setSort] = useState(false)
  const handleSearch = useCallback(e => {
    const { value } = e.target
    setSearchText(value)
  }, [])
  const handleSort = useCallback(() => {
    setSort(not)
  }, [])

  const filteredDataSource = useMemo(() => {
    if (searchText === '' && !sort) return dataSource
    const regex = new RegExp(searchText, 'i')
    const data = dataSource.filter(task => regex.test(task.value))
    if (sort)
      return data.sort((a, b) => {
        let first = a.value.toUpperCase()
        let second = b.value.toUpperCase()
        return first === second ? 0 : a > b ? 1 : -1
      })
    return data
  }, [dataSource, searchText, sort])

  return (
    <List
      className={styles.list}
      header={
        <Toolbar
          onChange={handleSearch}
          onUndo={onUndo}
          onSave={onSave}
          onRemoveAll={onRemoveAll}
          onSort={handleSort}
          searchText={searchText}
        />
      }
      grid={{
        xs: 1,
        sm: 2,
        md: 2,
        lg: 2,
        xl: 2,
        xxl: 3
      }}
      dataSource={filteredDataSource}
      renderItem={task => (
        <TaskItem {...task} onCheck={onCheck} onRemove={onRemove} />
      )}
      pagination={{
        total: dataSource.length,
        size: 'small',
        hideOnSinglePage: true,
        defaultPageSize: 18
      }}
    />
  )
}

export default ToDoList
