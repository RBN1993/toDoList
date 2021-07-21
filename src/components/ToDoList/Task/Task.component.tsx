import React, { FC } from 'react'
import { Button, Checkbox, Tooltip } from 'antd'
import { Task } from 'types/Task.model'
import { DeleteOutlined } from '@ant-design/icons'
import styles from './Task.module.css'

interface OtherProps {
  onCheck: (id: string) => void
  onRemove: (id: string) => void
}

const TaskItem: FC<Task & OtherProps> = ({
  id,
  value,
  checked,
  onCheck,
  onRemove
}) => {
  return (
    <div className={styles.wrapper}>
      <Checkbox
        className={styles.checkbox}
        checked={checked}
        onClick={() => onCheck(id)}
      />
      <Tooltip title={value}>
        <span className={styles.text_value}>{value}</span>
      </Tooltip>
      <Button
        className={styles.button}
        type='link'
        danger
        icon={<DeleteOutlined />}
        onClick={() => onRemove(id)}
      />
    </div>
  )
}

export default TaskItem
