import { useState } from 'react';

interface Todo{
    text: string;
    completed: boolean;
}

function useTodos(initalState: Todo[]) {

    const [todoList, setTodoList] = useState<Todo[]>(initalState);
    const [openModal, setOpenModal] = useState(false);

    const [searchValue, setSearchValue] = useState('')
    //@ts-ignore
    const realizedTasks = todoList.filter((task) => task.completed).length
    const totalTasks = todoList.length
    const [loadingTasks, setLoadingTasks] = useState(false)
    //@ts-ignore
    const filteredTodoList = todoList.filter((task) => task.text.toLowerCase().includes(searchValue.toLowerCase()));



    const getIdxCopyList = (text: any) => {
        //@ts-ignore
        const idx = todoList.findIndex((todo) => todo.text.toLowerCase() === text.toLowerCase())
        const newTodos = [...todoList]
        return { idx, newTodos }
    }

    const toggleTodo = (text: any) => {
        let { idx, newTodos } = getIdxCopyList(text);
        //@ts-ignore
        let property = newTodos[idx].completed;
        //@ts-ignore
        (property) ? newTodos[idx].completed = false : newTodos[idx].completed = true;
        //@ts-ignore
        setTodoList(newTodos);
    }

    const deleteTodo = (text: string) => {
        let { idx, newTodos } = getIdxCopyList(text);
        newTodos.splice(idx, 1);
        setTodoList(newTodos);
    }
    const addTodo = (text: string) => {
        let newTodos = [...todoList];
        const exisitingTodo = newTodos.find((todo) => todo.text === text)
        if(exisitingTodo){
            alert(`Todo ${text} already exist` )
            return
        }
        newTodos.push({
          text:text,
          completed: false
        })
        setTodoList(newTodos)
    
      }

    const state = {
        openModal,
        totalTasks,
        filteredTodoList,
        realizedTasks,
        loadingTasks,
        searchValue
    }

    const stateUpdater = {
        toggleTodo,
        deleteTodo,
        setOpenModal,
        addTodo,
        setSearchValue
    }
    return {
        state,
        stateUpdater,

    }


}

export { useTodos };