import { Fragment } from 'react';
import { StyledTable, TableProps } from '.';

export function EventTable({ eventTypes, summaryTypes }: TableProps) {
  // Below building of the table row by row
  // Each row shall contain 2 event types
  return (
    <StyledTable>
      <tbody>
        {eventTypes.map((types: any, index: number) => {
          return (
            <tr key={index}>
              {types.map((type: string, cellIndex: number) => (
                <Fragment key={cellIndex}>
                  <td>{type.replaceAll('_', ' ')}</td>
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
