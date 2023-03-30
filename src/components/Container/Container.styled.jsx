import styled from "@emotion/styled";

export const MainContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  @media (min-width: ${(props) => props.theme.breakpoint.sm}) {
    width: 560px;
  }
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    width: 860px;
  }
  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    width: 1200px;
  }
`;
