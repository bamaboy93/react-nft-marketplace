import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.space[8]}px;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    margin-bottom: ${(props) => props.theme.space[10]}px;
  }
`;

export const Title = styled.h2`
  margin-bottom: ${(props) => props.theme.space[3]}px;
  font-size: ${(props) => props.theme.fontSizes.l};
  font-weight: ${(props) => props.theme.fontWeights.bold};

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    font-size: ${(props) => props.theme.fontSizes.xl};
  }
`;

export const Desc = styled.p`
  font-size: ${(props) => props.theme.fontSizes.s};

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    font-size: ${(props) => props.theme.fontSizes.m};
  }
`;
