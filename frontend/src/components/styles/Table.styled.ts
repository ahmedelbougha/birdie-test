import styled from 'styled-components';

export const StyledTable = styled.table`
  border: 1px solid lightgrey;
  border-collapse: collapse;
  font-size: 0.85rem;

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  td {
    padding: 5px;
    text-transform: capitalize;
  }
`;
