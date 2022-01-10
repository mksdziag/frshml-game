import { cleanup, fireEvent, render } from "@testing-library/react";
import AppSelect from "../../../components/shared/Select";

afterEach(cleanup);

describe("AppButton", () => {
  it("Renders select element", () => {
    const { getByTestId } = render(
      <AppSelect
        name="example-selelct"
        id="example-selelct"
        initialValue="one"
        onChange={() => undefined}
        options={["one", "two"]}
      />
    );

    const selectElement = getByTestId("app-select");

    expect(selectElement).toBeInTheDocument();
  });

  it("Renders select with default value", () => {
    const { getByDisplayValue } = render(
      <AppSelect
        name="example-selelct"
        id="example-selelct"
        initialValue="one"
        onChange={() => undefined}
        options={["one", "two"]}
      />
    );

    const selectElement = getByDisplayValue("one");

    expect(selectElement).toBeInTheDocument();
  });

  it("Renders select with provided options", () => {
    const { container } = render(
      <AppSelect
        name="example-selelct"
        id="example-selelct"
        initialValue="one"
        onChange={() => undefined}
        options={["one", "two"]}
      />
    );

    const options = container.querySelectorAll("option");

    expect(options).toHaveLength(2);
  });

  it("Updates value on user select action", () => {
    const { getByTestId } = render(
      <AppSelect
        name="example-selelct"
        id="example-selelct"
        initialValue="one"
        onChange={() => undefined}
        options={["one", "two"]}
      />
    );

    const selectElement = getByTestId("app-select");
    expect(selectElement).toHaveValue("one");

    fireEvent.change(selectElement, { target: { value: "two" } });

    expect(selectElement).toHaveValue("two");
  });

  it("Emits updated value on user select action", () => {
    const onClickCb = jest.fn();
    const { getByTestId } = render(
      <AppSelect
        name="example-selelct"
        id="example-selelct"
        initialValue="one"
        onChange={onClickCb}
        options={["one", "two"]}
      />
    );

    const selectElement = getByTestId("app-select");

    fireEvent.change(selectElement, { target: { value: "two" } });

    expect(onClickCb).toHaveBeenCalledWith("two");
  });
});
