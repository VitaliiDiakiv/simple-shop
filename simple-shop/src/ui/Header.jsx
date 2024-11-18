import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.header`
  background-color: #3a3a3a;
  padding: 1.2rem 4.8rem;
  border: 1px solid grey;
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;
function Header() {
  return (
    <StyledHeader>
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
