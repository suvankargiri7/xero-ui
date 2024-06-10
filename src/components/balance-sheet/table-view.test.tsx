import { render, screen } from "@testing-library/react";
import TableView from "./table-view";
import { RowObject } from "../../interface";

const mockedData: Array<RowObject> = [
  {
    RowType: "Header",
    Cells: [
      {
        Value: "TestHeader1",
      },
      {
        Value: "TestHeader2",
      },
      {
        Value: "TestHeader3",
      },
    ],
  },
  {
    RowType: "Section",
    Title: "Assets",
    Rows: [],
  },
  {
    RowType: "Section",
    Title: "Bank",
    Rows: [
      {
        RowType: "Row",
        Cells: [
          {
            Value: "My Bank Account",
          },
          {
            Value: "000.00",
          },
          {
            Value: "111.11",
          },
        ],
      },
      {
        RowType: "SummaryRow",
        Cells: [
          {
            Value: "Total Bank",
          },
          {
            Value: "104076.70",
          },
          {
            Value: "104049.60",
          },
        ],
      },
    ],
  },
];

test("table view header", () => {
  render(<TableView rows={mockedData} />);
  const element = screen.getByTestId("table-header-tid");
  expect(element).toHaveTextContent("TestHeader1");
  expect(element).toHaveTextContent("TestHeader2");
  expect(element).toHaveTextContent("TestHeader3");
});

test("table view section", () => {
  render(<TableView rows={mockedData} />);
  const element = screen.getAllByTestId("section-tid");
  expect(element.length).toBe(2);
});

test("table view summaryrow and row", () => {
  render(<TableView rows={mockedData} />);
  const element = screen.getAllByTestId("row-tid");
  expect(element.length).toBe(2);
});
