import styled from "styled-components";
import UserAvater from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";

const StyleHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-green-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  return (
    <StyleHeader>
      <UserAvater />
      <HeaderMenu />
    </StyleHeader>
  );
}

export default Header;
