import React, { FC } from 'react'
import ToDoList from './components/ToDoList/ToDoList.component'
import InputForm from './components/InputForm/Form.component'
import './App.css'
import 'antd/dist/antd.css'
import useToDoList from 'core/useToDoList'

const App: FC = () => {
  const {
    taskList,
    handleToggle,
    handleAdd,
    handleRemove,
    handleSaveTaskList,
    handleUndo,
    handleRemoveAll
  } = useToDoList()
  return (
    <div className='app'>
      <div className='header'>
        <h1>To Do List</h1>
      </div>
      <div className='input-form'>
        <InputForm onFinish={handleAdd} />
      </div>
      <div className='todo-list'>
        <ToDoList
          dataSource={taskList}
          onCheck={handleToggle}
          onRemove={handleRemove}
          onSave={handleSaveTaskList}
          onUndo={handleUndo}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </div>
  )
}

export default App
