import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react"
import { TodoList } from "../../TodoList";
import { TodosError } from "./Error";

describe('Empty Todos Testing', () => {
    it('it renders when there s no more todos', () => {
        render(
            <TodoList
                error={true}
                loading={false}
                filteredTodoList={[]}
                totalTasks={0}
                onError={() => <TodosError></TodosError>}
                onLoading={() => <></>}
                onEmptyTodos={() => <></>}
                onEmptySearchResults={() => <p> there's no match for {'search'} </p>}
                render={() => <></>}
            />
        )
        expect(screen.getByTestId("todoError")).toHaveTextContent("Error has been occurred, Please try again Later")
    })
})