import { FunctionComponent, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import TableView from "./table-view";
import DetailView from "./detail-view";
import { Report } from "../../interface";

const MainView: FunctionComponent<{}> = (props) => {
  const [reports, setReports] = useState<Array<Report>>([]);
  const [selectedReport, setSeletedReport] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/balance-sheet")
      .then((response) => response.json())
      .then((data) => setReports(data.Reports));
  }, []);

  return (
    <Container data-testid="mainview-testid">
      <Container className="mb-2">
        <select
          data-testid="select"
          value={selectedReport}
          defaultValue={selectedReport}
          onChange={(e) => {
            setSeletedReport(e.target.value);
          }}
        >
          <option>Please select a report</option>
          {reports.length > 0 &&
            reports.map((report: Report, index: number) => (
              <option
                value={report.ReportID}
                key={index}
                data-testid="select-option"
              >
                {report.ReportName}
              </option>
            ))}
        </select>
      </Container>

      {selectedReport && (
        <DetailView
          ReportName={reports[0].ReportName}
          ReportType={reports[0].ReportType}
          ReportTitles={reports[0].ReportTitles}
        />
      )}

      {selectedReport && <TableView rows={reports[0].Rows} />}
    </Container>
  );
};

export default MainView;
