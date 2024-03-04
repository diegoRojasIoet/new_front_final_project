import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react"
import { EmptyTodos } from "./EmptyTodos";
import { TodoList } from "../TodoList";

describe('Empty Todos Testing', () => {
    it('it renders when there s no more todos', () => {
        render(
            <TodoList
                error={false}
                loading={false}
                filteredTodoList={[]}
                totalTasks={0}
                onError={() => <> Error</>}
                onLoading={() => <></>}
                onEmptyTodos={() => <EmptyTodos></EmptyTodos>}
                onEmptySearchResults={() => <p> there's no match for {'search'} </p>}
                render={() => <></>}
            />
        )
        expect(screen.getByTestId("emptyTextContainer"))
    })
})