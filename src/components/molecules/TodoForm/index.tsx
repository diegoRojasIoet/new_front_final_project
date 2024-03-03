import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

const ContainerForm = styled.div`
  width: 65%;
  max-width: 28rem;
  height: 13rem;
  padding: 15px;
  background-color: #d5c6a6;
  z-index: 2;
`;

const Form = styled.form`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  color: black;
`;

const ContainerButton = styled.div`
  display: flex;
  width: 85%;
  justify-content: space-between;
`;

const AddButton = styled.button`
  background-color: #cee3cf;
  border-radius: 10px;
  width: 5rem;
  padding: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  &&:hover {
    background-color: #fff;
  }
`;

const CancelButton = styled(AddButton)`
  background-color: grey;
`;

const TextArea = styled.textarea`
  width: 85%;
  height: 100%;
  border-radius: 5px;
  border: 2px solid #5e454b;
`;

interface TodoFormProps {
    addTodo: (value: string) => void;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoForm = ({ addTodo, setOpenModal }: TodoFormProps): JSX.Element => {
    const [newTodoValue, setNewTodoValue] = useState<string>('');

    const handleClick = (event: MouseEvent) => {
        if ((event.target as HTMLElement).className.includes('Modal-container')) {
            setOpenModal(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setNewTodoValue(event.target.value);
    };

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setNewTodoValue('');
    };

    return (
        <ContainerForm>
            <Form onSubmit={onSubmit}>
                <label>Add new TODO</label>
                <TextArea
                    value={newTodoValue}
                    onChange={onChange}
                    placeholder="Write TODO"
                    required
                />
                <ContainerButton>
                    <CancelButton type="button" onClick={onCancel}>
                        Cancel
                    </CancelButton>
                    <AddButton type="submit">Add</AddButton>
                </ContainerButton>
            </Form>
        </ContainerForm>
    );
}

export { TodoForm };