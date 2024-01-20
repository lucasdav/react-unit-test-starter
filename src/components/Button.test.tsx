import { fireEvent, render, screen } from "@testing-library/react"
import Button from "./Button"

describe('Button Component', () => {
    it('should render with red background if disabled', () => {
        render(<Button disabled onClick={() => { }}>Click me</Button>);

        const button = screen.getByRole("button", { name: "Click me" });
        expect(button).toHaveStyle({ backgroundColor: "red" });
    });

    it('should render with blue background if not disabled', () => {
        render(<Button disabled={false} onClick={() => { }}>Click me</Button>);

        const button = screen.getByRole("button", { name: "Click me" });
        expect(button).toHaveStyle({ backgroundColor: "blue" });
    });

    it('should call onClick prop on click', () => {
        const onClick = jest.fn();
        render(<Button disabled={false} onClick={onClick}>Click me</Button>);

        const button = screen.getByText(/click me/i);

        fireEvent.click(button);

        expect(onClick).toHaveBeenCalled();
    });

    it('should call onClick prop on click with value 10', () => {
        const onClick = jest.fn();
        render(<Button disabled={false} onClick={onClick}>Click me</Button>);

        const button = screen.getByText(/click me/i);

        fireEvent.click(button);

        expect(onClick).toHaveBeenCalledWith(10);
    });
})