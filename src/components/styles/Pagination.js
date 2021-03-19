import styled from "styled-components";

const Pagination = styled.a`
  background-color: black;
  color: silver;
  font-weight: bold;
  margin-left: 20px;
  text-decoration: none;
  padding: 5px;
  font-size: 0.85rem;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 5px;

  :hover {
    color: darkred;
  }
`;

export default Pagination;
