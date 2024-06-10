import { render, screen, fireEvent } from "@testing-library/react";
import MainView from "./main-view";

test("renders main view component", () => {
  render(<MainView />);
  const element = screen.getByTestId("mainview-testid");
  expect(element).toBeTruthy();
});
