import NavigationMenu from "./NavigationMenu";
import styled, { css } from "styled-components";
import { Sun, Moon } from "styled-icons/feather";
import { ThemeContext } from "../../store/theme-context";
import { useContext } from "react";
import ContentContainer from "./ContentContainer";

const Container = styled.div`
  width: "100%";
  padding: 75px 0 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

const IconWrapper = styled.span`
  background-color: ${(props) => props.theme.text};
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 5px;
`;

const icon = css`
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.active};
  cursor: pointer;
  margin-right: 40px;
  border-radius: 50%;
  padding: 5px;
  &:hover {
    background-color: ${(props) => props.theme.hover};
    path {
      color: ${(props) => props.theme.text};
    }
  }
`;

const StyledSun = styled(Sun)`
  ${icon}
`;

const StyledMoon = styled(Moon)`
  ${icon}
`;

const TopBar = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <Container>
      <IconWrapper>
        {theme === "dark" ? (
          <StyledSun size={32} onClick={() => switchTheme("light")} />
        ) : (
          <StyledMoon size={32} onClick={() => switchTheme("dark")} />
        )}
      </IconWrapper>
    </Container>
  );
};

export default function Layout(props) {
  return (
    <div>
      <NavigationMenu />
      <TopBar />
      <ContentContainer>{props.children}</ContentContainer>
    </div>
  );
}
