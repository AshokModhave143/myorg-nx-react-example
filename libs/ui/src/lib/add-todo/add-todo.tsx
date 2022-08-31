import { Todo } from '@myorg-nx-react-example/data';
import React, { useState } from 'react';
import styles from './add-todo.module.scss';

/* eslint-disable-next-line */
export interface AddTodoProps {
  onAddTodo: (todo: Todo) => void;
}

export function AddTodo(props: AddTodoProps) {
  const [title, setTitle] = useState('');
  const [description, setDescripton] = useState('');
  const [err, setErr] = useState('');

  const resetFields = () => {
    setTitle('');
    setDescripton('');
    setErr('');
  };

  const handleOnAddTodo = () => {
    if (title && description) {
      props.onAddTodo({ id: 0, title, description });
      resetFields();
    } else {
      setErr('Please enter title or description');
    }
  };

  const isFieldError = () => err !== '';

  return (
    <div>
      <div className={styles['container']}>
        <InputField
          label={'Title'}
          id="title"
          value={title}
          onChange={(e: any) => setTitle(e.target.value)}
          isError={isFieldError()}
        />
        <InputField
          label={'Description'}
          id="description"
          value={description}
          onChange={(e: any) => setDescripton(e.target.value)}
          isError={isFieldError()}
        />

        <button name="addTodo" onClick={handleOnAddTodo}>
          Add ToDo
        </button>
      </div>
      <span className={styles['error']}>{err}</span>
    </div>
  );
}

const InputField = ({
  label,
  value,
  id,
  onChange,
  isError = false,
}: {
  label: string;
  value: string;
  id: string;
  onChange: any;
  isError?: boolean;
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={isError ? styles['inputError'] : ''}
      />
    </div>
  );
};

export default AddTodo;
