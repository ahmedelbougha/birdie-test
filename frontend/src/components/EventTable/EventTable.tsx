import { Fragment } from "react";
import { StyledTable, TableProps } from "./";

export function EventTable({ eventTypes, summaryTypes }: TableProps) {
  // Below building of the table row by row
  // Each row shall contain 2 event types
  return (
    <StyledTable>
      <tbody>
        {eventTypes.map((types: any, index: number) => {
          // types[0] + type[1] returns string like
          // "alert_qualifiedalert_raised" (a unique key)
          // type + cellIndex returns string like
          // "alert_qualified0" (a unique key)
          // "alert_raised1" (a unique key)
          return (
            <tr key={types[0] + types[1]}>
              {types.map((type: string, cellIndex: number) => (
                <Fragment key={type + cellIndex}>
                  <td>{type.replaceAll("_", " ")}</td>
                  <td>{summaryTypes[type] ? summaryTypes[type] : 0}</td>
                </Fragment>
              ))}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
}
