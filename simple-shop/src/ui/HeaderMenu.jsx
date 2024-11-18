import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AddProduct from "../feature/AddProduct";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
  & li {
    list-style-type: none;
  }
`;

function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <li>
        <AddProduct />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
