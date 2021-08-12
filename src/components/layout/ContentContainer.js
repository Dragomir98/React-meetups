import styled from "styled-components";

const ContentContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

export default ContentContainer;
