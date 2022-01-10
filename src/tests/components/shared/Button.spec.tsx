import { cleanup, fireEvent, render } from "@testing-library/react";
import AppButton from "../../../components/shared/Button";

afterEach(cleanup);

describe("AppButton", () => {
  it("Renders button", () => {
    const { getByRole } = render(<AppButton>Button text</AppButton>);

    const buttonElement = getByRole("button");

    expect(buttonElement).toBeInTheDocument();
  });

  it("Renders button with passed text", () => {
    const { getByText } = render(<AppButton>Button text</AppButton>);

    const buttonElement = getByText("Button text");

    expect(buttonElement).toBeInTheDocument();
  });

  it("Renders not disabled button by default", () => {
    const { getByRole } = render(<AppButton>Not Disabled button</AppButton>);
    const buttonElement = getByRole("button");

    expect(buttonElement).not.toBeDisabled();
  });

  it("Disables button based on prop", () => {
    const { getByRole } = render(
      <AppButton disabled={true}>Disabled button</AppButton>
    );
    const buttonElement = getByRole("button");

    expect(buttonElement).toBeDisabled();
  });

  it("Calls onClick prop on button click", () => {
    const onClickCb = jest.fn();

    const { getByRole } = render(
      <AppButton onClick={onClickCb}>Button</AppButton>
    );
    const buttonElement = getByRole("button");
    fireEvent.click(buttonElement);

    expect(onClickCb).toHaveBeenCalled();
  });
});
