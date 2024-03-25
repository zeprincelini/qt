import "@testing-library/jest-dom";
import * as nextNavigation from "next/navigation";
import { fireEvent, render, screen } from "@testing-library/react";
import AddQuestionBtn from "../../src/components/AddQuestionBtn";

jest.mock("next/navigation");

jest.mock("next/router", () => {
  const router = {
    push: jest.fn(),
    query: {},
  };
  return {
    useRouter: jest.fn().mockReturnValue(router),
  };
});

describe("AddQuestionBtn", () => {
  it("renders a button", () => {
    render(<AddQuestionBtn />);

    const button = screen.getByRole("button", { name: "Add Question" });

    expect(button).toBeInTheDocument();
  });

  it("navigates to the add question page when clicked", () => {
    const mockPush = jest.fn();
    const mockedUseRouter = jest.mocked(nextNavigation.useRouter);
    //@ts-ignore
    mockedUseRouter.mockReturnValue({
      push: mockPush,
    });

    render(<AddQuestionBtn />);
    const button = screen.getByRole("button", { name: "Add Question" });
    fireEvent.click(button);

    expect(mockPush).toHaveBeenCalledWith("/questions/add");
  });
});
