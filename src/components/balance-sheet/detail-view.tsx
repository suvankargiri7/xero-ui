import React, { FunctionComponent } from "react";
import Card from "react-bootstrap/Card";

interface DetailProps {
  ReportName: string;
  ReportType: string;
  ReportTitles: Array<string>;
}

const DetailView: FunctionComponent<DetailProps> = (props) => {
  return (
    <Card className="mb-2">
      <Card.Body>
        <h2 data-testid="detail-title-tid">
          {props.ReportTitles.length > 0 &&
            props.ReportTitles.map((title) => `${title}  `)}
        </h2>
      </Card.Body>
      <Card.Body>{`Report Type: ${props.ReportType}`}</Card.Body>
    </Card>
  );
};

export default DetailView;
