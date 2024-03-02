import { useState } from 'react';

function useTodos(initalState: any[]) {

    const [todoList, setTodoList] = useState(initalState);
    const [searchValue, setSearchValue] = useState('')
    //@ts-ignore
    const realizedTasks = todoList.filter((task) => task.completed).length
    const totalTasks = todoList.length
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
        let {idx,newTodos} = getIdxCopyList(text);
        newTodos.splice(idx, 1);
        setTodoList(newTodos);
      }

    const state = {
        totalTasks,
        filteredTodoList,
        realizedTasks
    }

    const stateUpdater = {
        toggleTodo,
        deleteTodo
    }
    return {
        state,
        stateUpdater,

    }


}

export { useTodos };