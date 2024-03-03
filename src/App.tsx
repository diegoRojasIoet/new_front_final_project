import { CreateTodoButton } from './Components/Atoms/CreateTodoButton/CreateTodoButton';
import { EmptyTodos } from './Components/Molecules/LoadingSkeletons/EmptyTodos';
import { TodosError } from './Components/Molecules/LoadingSkeletons/Error/Error';
import { Modal } from './Components/Molecules/Modal';
import { TodoCounter } from './Components/Molecules/TodoCounter'
import { TodoForm } from './Components/Molecules/TodoForm';
import { TodoList } from './Components/Molecules/TodoList';
import { TodoItem } from './Components/Molecules/TodoList/TodoItem';
import { TodoSearch } from './Components/Molecules/TodoSearch/TodoSearch'
import { useTodos } from './Hooks/useTodos';


function App() {

  const { state, stateUpdater } = useTodos([]);

  const {
    openModal,
    totalTasks,
    filteredTodoList,
    realizedTasks,
    loadingTasks,
    searchValue
  } = state;

  const {
    toggleTodo,
    deleteTodo,
    setOpenModal,
    addTodo,
    setSearchValue
  } = stateUpdater;

  return (
    <>
      <header >
        <TodoCounter totalTasks={totalTasks} realizedTasks={realizedTasks} loading={loadingTasks} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} loading={loadingTasks} />
      </header>

      <TodoList
        error={false}
        loading={loadingTasks}
        filteredTodoList={filteredTodoList}
        totalTasks={totalTasks}
        onError={() => <TodosError></TodosError>}
        onLoading={() => <></>}
        onEmptyTodos={() => <EmptyTodos></EmptyTodos>}
        onEmptySearchResults={() => <p> there's no match for {'search'} </p>}
        render={(todo: any, idx: number) => {
          return <TodoItem
            key={`${todo.text}-${idx}`}
            todo={todo}
            onComplete={() => toggleTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        }} />

      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

    </>
  )
}
export default App;