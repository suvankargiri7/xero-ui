import { render, screen } from "@testing-library/react";
import DetailView from "./detail-view";

const mockedData = {
  ReportName: "TestingReport Name",
  ReportType: "TestingReportType",
  ReportTitles: ["String1", "String2"],
};

test("detail view report type", () => {
  render(
    <DetailView
      ReportName={mockedData.ReportName}
      ReportType={mockedData.ReportType}
      ReportTitles={mockedData.ReportTitles}
    />
  );
  const linkElement = screen.getByText("Report Type: TestingReportType");
  expect(linkElement).toBeInTheDocument();
});

test("detail view title", () => {
  render(
    <DetailView
      ReportName={mockedData.ReportName}
      ReportType={mockedData.ReportType}
      ReportTitles={mockedData.ReportTitles}
    />
  );
  const element = screen.getByTestId("detail-title-tid");
  expect(element).toHaveTextContent("String1 String2");
});
