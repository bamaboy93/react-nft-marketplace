import styled from "@emotion/styled";

export const MainSection = styled.section`
  padding: 40px 0;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 80px 0;
  }
`;
