import { Link } from "react-router-dom";

import { HeaderContainer, Logo, LogoText, LogoWrap } from "./Header.styled";
import logo from "../../assets/3K-logo.jpg";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { useAuth } from "../../hooks/useAuth";

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoWrap>
          <Logo src={logo} alt="3kWords logo" />
          <LogoText>Words</LogoText>
        </LogoWrap>
      </Link>
      {isLoggedIn && <UserMenu />}
      {!isLoggedIn && <AuthNav />}
    </HeaderContainer>
  );
};
