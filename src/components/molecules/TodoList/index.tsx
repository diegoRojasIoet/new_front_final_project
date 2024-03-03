import { FC, PropsWithChildren, ReactNode } from 'react'
import styled from 'styled-components'

const Section = styled.section`
  position:relative;
  display:flex;
  justify-content: center;
  height:25rem;

  
`
const ListItem: FC<PropsWithChildren> = styled.ul`
  max-width:40rem;
  width:80%;
  display: flex;
  flex-direction: column;
  overflow-y:auto;
  overflow-x: hidden;
  background-color: #bcb39e78;
  padding: 10px;
  padding-right:1rem;
  border-radius: 5px;
    &::-webkit-scrollbar{
      background-color: white;
      color: grey;
      display: inline-block;
      width: 6px;
      border-radius: 5px
    }
    &::-webkit-scrollbar-thumb{
      background-color: #5e454b;
      border-radius: 5px;
      width: 0.2rem;
  }
  
`
interface TodoListProps {
    error: boolean;
    loading: boolean;
    filteredTodoList: Object[];
    totalTasks: number;
    onError: () => ReactNode;
    onLoading: () => ReactNode;
    onEmptyTodos: () => ReactNode;
    onEmptySearchResults: () => ReactNode;
    render: (todo: any, idx: number) => ReactNode;
}

const TodoList: FC<TodoListProps> = ({
    error,
    loading,
    filteredTodoList,
    totalTasks,
    onError,
    onLoading,
    onEmptyTodos,
    onEmptySearchResults,
    render

}) => {
    return (
        <Section>
            <ListItem>
                {error && onError()}
                {!loading && totalTasks === 0 && onEmptyTodos()}
                {/* {!loading && !(totalTasks === 0) && !filteredTodoList.length && onEmptySearchResults()} */}
                {loading && onLoading()}
                {filteredTodoList.map((todo,idx) => render(todo,idx))}

            </ListItem>
        </Section>
    )
}
export { TodoList };