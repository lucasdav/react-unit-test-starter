import { render, screen, fireEvent } from "@testing-library/react";
import AppV2 from "./AppV2";

const sum = (x: number, y: number) => {
    return x + y;
};

describe('App Component', () => {
    it('should sum correctly', () => {
        expect(sum(4, 4)).toBe(8);
    });

    it('should render App with hello message', () => {
        render(<AppV2 />)

        screen.getByText('Hello world!');
    });

    it('should change message on button click', () => {
        render(<AppV2 />)

        screen.getByText("Let's learn more about testing in React");

        const button = screen.getByText(/change message/i);

        fireEvent.click(button);

        screen.getByText(/new message!/i)

        // abaixo a queryByText se não encontra o texto na tela ela não testa o elemento
        const oldMessage = screen.queryByText("Let's learn more about testing in React");

        expect(oldMessage).toBeNull();

        expect(oldMessage).not.toBeInTheDocument();
    });
});

export default {};