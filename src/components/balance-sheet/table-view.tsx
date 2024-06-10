import React, { FunctionComponent, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { RowObject, CellObject } from "../../interface";

interface TableViewProps {
  rows: Array<RowObject>;
}

const TableView: FunctionComponent<TableViewProps> = (props) => {
  const [rows, setRows] = useState<Array<RowObject>>(props.rows);
  const [headerCells, setHeaderCells] = useState<Array<CellObject>>([]);

  const findHeaders = () => {
    let obj = props.rows.find((o) => o.RowType === "Header");
    let headerCellsArr = obj?.Cells;
    setHeaderCells(headerCellsArr || headerCells);
  };
  useEffect(() => {
    findHeaders();
  }, [rows]);

  return (
    <Container>
      <Table responsive="lg" bordered bsPrefix="custom">
        <thead data-testid="table-header-tid">
          <tr>
            {headerCells.length > 0 &&
              headerCells.map((eachCell: CellObject) => (
                <td>{eachCell.Value}</td>
              ))}
          </tr>
        </thead>
        <tbody>
          {props.rows
            .filter((rows) => rows.RowType !== "Header")
            .map((eachRow: RowObject, index: number) => {
              if (eachRow.RowType === "Section") {
                return (
                  <>
                    {eachRow.Title && (
                      <tr
                        data-testid="section-tid"
                        key={index}
                        className={
                          eachRow.Rows && eachRow.Rows?.length > 0
                            ? "table-section-withrow"
                            : "table-section-withoutrow"
                        }
                      >
                        <td
                          colSpan={
                            eachRow.Rows && eachRow.Rows?.length > 0
                              ? 0
                              : headerCells.length
                          }
                        >
                          <strong>{eachRow.Title}</strong>
                        </td>
                      </tr>
                    )}

                    {eachRow.Rows &&
                      eachRow.Rows.length > 0 &&
                      eachRow.Rows.map((eachRow: RowObject, index: number) => {
                        return (
                          <tr
                            data-testid="row-tid"
                            key={index}
                            className={
                              eachRow.RowType === "SummaryRow"
                                ? "table-summary-row"
                                : ""
                            }
                          >
                            {eachRow.Cells &&
                              eachRow.Cells.length > 0 &&
                              eachRow.Cells.map(
                                (eachCell: CellObject, index: number) => (
                                  <td
                                    key={index}
                                    className={
                                      parseFloat(eachCell.Value) < 0
                                        ? "less-than-zero"
                                        : ""
                                    }
                                  >
                                    {eachCell.Value}
                                  </td>
                                )
                              )}
                          </tr>
                        );
                      })}
                  </>
                );
              }
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableView;
