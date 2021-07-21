import React, { ChangeEventHandler, FC } from 'react'
import { Row, Col, Input, Button } from 'antd'
import ButtonGroup from 'antd/lib/button/button-group'
import {
  DeleteOutlined,
  SaveOutlined,
  SortAscendingOutlined,
  UndoOutlined
} from '@ant-design/icons'
import styles from './Toolbar.module.css'

interface ToolbarProps {
  onChange: ChangeEventHandler<HTMLInputElement>
  onUndo: () => void
  onSave: () => void
  onRemoveAll: () => void
  onSort: () => void
  searchText: string
}

const Toolbar: FC<ToolbarProps> = ({
  onChange,
  onUndo,
  onSave,
  onRemoveAll,
  onSort,
  searchText
}) => {
  return (
    <Row className={styles.row} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={6} push={1}>
        <Input
          onChange={onChange}
          value={searchText}
          placeholder='Buscar...'
          allowClear
        />
      </Col>
      <Col span={12} className={styles.sort}>
        <Button
          icon={<SortAscendingOutlined />}
          title='Ordenar'
          onClick={onSort}
        />
      </Col>
      <Col span={6}>
        <ButtonGroup>
          <Button
            type='primary'
            icon={<SaveOutlined />}
            title='Guardar'
            onClick={onSave}
          />
          <Button
            type='primary'
            icon={<UndoOutlined />}
            title='Deshacer'
            onClick={onUndo}
          />
          <Button
            type='primary'
            danger
            icon={<DeleteOutlined />}
            title='Eliminar'
            onClick={onRemoveAll}
          />
        </ButtonGroup>
      </Col>
    </Row>
  )
}

export default Toolbar
