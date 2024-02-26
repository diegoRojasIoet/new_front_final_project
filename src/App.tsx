import { EmptyTodos } from './components/molecules/LoadingSkeletons/EmptyTodos';
import { TodosError } from './components/molecules/LoadingSkeletons/Error/Error';
import { TodoCounter } from './components/molecules/TodoCounter'
import { TodoList } from './components/molecules/TodoList';
import { TodoItem } from './components/molecules/TodoList/TodoItem';
import { TodoSearch } from './components/molecules/TodoSearch/TodoSearch'


function App() {


  return (

    <header >

      <TodoCounter />
      <TodoSearch searchValue={'searchValue'} setSearchValue={() => { }} loading={false} />

      <TodoList
        error={true}
        loading={false}
        filteredTodoList={[]}
        totalTasks={5}
        onError={() => <TodosError></TodosError>}
        onLoading={() => <></>}
        onEmptyTodos={() => <EmptyTodos></EmptyTodos>}
        onEmptySearchResults={() => <p> there's no match for {'search'} </p>}
        render={todo => {
          return <TodoItem
            key={todo.text}
            todo={todo}
            onComplete={() => () => { }}
            onDelete={() => () => { }}
          />
        }} />
    </header>
  )
}

export default App;