import { CreateTodoButton } from './Components/Atoms/CreateTodoButton/CreateTodoButton';
import { ChangeAlertWithStorageLister } from './Components/Molecules/ChangeAlert';
import { EmptyTodos } from './Components/Molecules/LoadingSkeletons/EmptyTodos';
import { TodosError } from './Components/Molecules/LoadingSkeletons/Error/Error';
import { TodosLoading } from './Components/Molecules/LoadingSkeletons/TodosLoading';
import { Modal } from './Components/Molecules/Modal';
import { TodoCounter } from './Components/Molecules/TodoCounter'
import { TodoForm } from './Components/Molecules/TodoForm';
import { TodoList } from './Components/Molecules/TodoList';
import { TodoItem } from './Components/Molecules/TodoList/TodoItem';
import { TodoSearch } from './Components/Molecules/TodoSearch/TodoSearch'
import { useTodos } from './Hooks/useTodos';


function App() {

  const { state, stateUpdater } = useTodos();

  const {
    openModal,
    totalTasks,
    filteredTodoList,
    realizedTasks,
    loadingTasks,
    searchValue,
    error
  } = state;

  const {
    toggleTodo,
    deleteTodo,
    setOpenModal,
    addTodo,
    setSearchValue,
    setSincronizedItem
  } = stateUpdater;

  return (
    <>
      <header >
        <TodoCounter totalTasks={totalTasks} realizedTasks={realizedTasks} loading={loadingTasks} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} loading={loadingTasks} />
      </header>

      <TodoList
        error={error}
        loading={loadingTasks}
        filteredTodoList={filteredTodoList}
        totalTasks={totalTasks}
        onError={() => <TodosError></TodosError>}
        onLoading={() => <TodosLoading/>}
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

      <ChangeAlertWithStorageLister setSincronizedItem={setSincronizedItem} />

    </>
  )
}
export default App;