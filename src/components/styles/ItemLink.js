import styled from "styled-components";
import { Link } from "react-router-dom";

const ItemLink = styled(Link)`
  color: seashell;
  background: linear-gradient(black, red);
  text-decoration: none;
  border-radius: 20px;
  padding: 2px;
  font-style: italic;
  font-weight: bold;
  font-size: 0.85rem;
  display: block;

  :hover {
    color: #000;
  }
`;

export default ItemLink;
