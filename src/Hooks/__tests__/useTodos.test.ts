import { useTodos } from "../useTodos";



describe('Use Todos', () => {
    // beforeEach(() => setup());
    it('should change the completed attribute of a todo', () => {
        const todoList = [{ text: 'test', completed: false }, { text: 'test2', completed: false }, { text: 'test3', completed: true }]
        const { state, stateUpdater } = useTodos(todoList);
        const {
            filteredTodoList
          } = state;
        const {
            toggleTodo,
        } = stateUpdater;
        const todo = todoList[0]
        toggleTodo(todo.text)
        
        expect(filteredTodoList[0].completed)

    })
});