import { EmptyTodos } from './Components/Molecules/LoadingSkeletons/EmptyTodos';
import { TodosError } from './Components/Molecules/LoadingSkeletons/Error/Error';
import { TodoCounter } from './Components/Molecules/TodoCounter'
import { TodoList } from './Components/Molecules/TodoList';
import { TodoItem } from './Components/Molecules/TodoList/TodoItem';
import { TodoSearch } from './Components/Molecules/TodoSearch/TodoSearch'
import { useTodos } from './Hooks/useTodos';


function App() {

  const { state, stateUpdater } = useTodos([]);

  const {
    totalTasks,
    filteredTodoList
  } = state;

  const {
    toggleTodo,
    deleteTodo
  } = stateUpdater;

  return (

    <header >

      <TodoCounter />
      <TodoSearch searchValue={'searchValue'} setSearchValue={() => { }} loading={false} />

      <TodoList
        error={false}
        loading={false}
        filteredTodoList={filteredTodoList}
        totalTasks={totalTasks}
        onError={() => <TodosError></TodosError>}
        onLoading={() => <></>}
        onEmptyTodos={() => <EmptyTodos></EmptyTodos>}
        onEmptySearchResults={() => <p> there's no match for {'search'} </p>}
        render={todo => {
          return <TodoItem
            key={todo.text}
            todo={todo}
            onComplete={()=> toggleTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)} 
          />
        }} />
    </header>
  )
}

export default App;