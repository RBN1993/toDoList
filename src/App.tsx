import React, { FC } from 'react'
import ToDoList from './components/ToDoList/ToDoList.component'
import InputForm from './components/InputForm/Form.component'
import './App.css'
import 'antd/dist/antd.css'
const App: FC = () => {
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
          dataSource={[
            {
              id: '1',
              value:
                'Esto es una prueba larga Esto es una prueba larga Esto es una prueba larga'
            },
            { id: '1', value: 'Task1' },
            { id: '1', value: 'Recoger a Alina' },
            { id: '1', value: 'HOla' }
          ]}
          onCheck={() => {}}
          onRemove={() => {}}
        />
      </div>
    </div>
  )
}

export default App
