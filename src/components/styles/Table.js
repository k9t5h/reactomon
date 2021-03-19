import styled from "styled-components";

const Table = styled.table`
  border: black solid 2px;
`;

const TableHeader = styled.th`
  border: 1px solid #999;
  padding: 0.5rem;
  color: ${(props) => props.theme.text};
`;

const TableData = styled.td`
  border: 1px solid #999;
  padding: 0.5rem;
  color: ${(props) => props.theme.text};
`;

export { Table, TableHeader, TableData };
