import React, { FC } from 'react'
import ToDoList from './components/ToDoList/ToDoList.component'
import InputForm from './components/InputForm/Form.component'
import './App.css'
import 'antd/dist/antd.css'
import useToDoList from 'core/hook'

const App: FC = () => {
  const { taskList, handleToggle, handleAdd, handleRemove } = useToDoList()
  return (
    <div className='app'>
      <div className='header'>
        <h1>To Do List</h1>
      </div>
      <div className='input-form'>
        <InputForm value='a' onChange={() => {}} onFinish={() => {}} />
      </div>
      <div className='todo-list'>
        <ToDoList
          dataSource={taskList}
          onCheck={handleToggle}
          onRemove={handleRemove}
        />
      </div>
    </div>
  )
}

export default App
