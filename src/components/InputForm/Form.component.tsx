import React, { ChangeEvent, FC, useCallback, useState } from 'react'
import { Button, Form, Input } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import styles from './Form.module.css'

interface InputFormProps {
  onFinish: (textValue: string) => void
}

const InputForm: FC<InputFormProps> = ({ onFinish }) => {
  const [text, setText] = useState('')
  const handleSubmit = useCallback(() => {
    onFinish(text)
    setText('')
  }, [onFinish, text])
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }, [])
  return (
    <Form name='custom-form' layout='inline'>
      <Form.Item>
        <Input
          placeholder='Añade una tarea'
          size='large'
          value={text}
          onChange={handleChange}
          allowClear
        />
      </Form.Item>
      <Form.Item>
        <Button
          disabled={!text}
          className={styles.button}
          type='primary'
          icon={<PlusCircleOutlined />}
          onClick={handleSubmit}
        />
      </Form.Item>
    </Form>
  )
}

export default InputForm
