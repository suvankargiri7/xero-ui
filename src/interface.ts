export interface Report {
  ReportID: string;
  ReportName: string;
  ReportType: string;
  ReportTitles: Array<string>;
  Rows: Array<RowObject>;
}

export interface RowObject {
  RowType: "Header" | "Section" | "Row" | "SummaryRow";
  Title?: string;
  Cells?: Array<CellObject>;
  Rows?: Array<RowObject>;
}

export interface CellObject {
  Value: string;
  Attributes?: Array<AttributesObject>;
}

export interface AttributesObject {
  Value: string;
  Id: string;
}
