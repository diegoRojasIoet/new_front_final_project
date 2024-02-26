import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react"
import ErrorMessage from "./ErrorMessage";

describe ('Error Message', () => {
    it('render error', () => {
        render(<ErrorMessage></ErrorMessage>)
    })
})