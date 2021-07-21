import React, { ChangeEventHandler, FC } from 'react'
import { Button, Form, Input } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import styles from './Form.module.css'

interface InputFormProps {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  onFinish: () => void
}

const InputForm: FC<InputFormProps> = ({ value = '', onChange, onFinish }) => {
  return (
    <div className=''>
      <Form name='custom-form' layout='inline' onFinish={onFinish}>
        <Form.Item name='task'>
          <Input value={value} onChange={onChange} />
        </Form.Item>
        <Form.Item>
          <Button
            className={styles.button}
            type='primary'
            htmlType='submit'
            icon={<PlusCircleOutlined />}
          />
        </Form.Item>
      </Form>
    </div>
  )
}

export default InputForm
