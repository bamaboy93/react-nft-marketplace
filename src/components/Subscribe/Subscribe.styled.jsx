import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 40px 20px;
  background-color: ${(props) => props.theme.colors.background.light};
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 100px;
  }
`;

export const Image = styled.img`
  width: 100%;
  display: block;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 300px;
    height: 300px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 425px;
    height: 310px;
  }
`;

export const InfoWrapper = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 300px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 425px;
  }
`;

export const Title = styled.h2`
  margin-bottom: ${(props) => props.theme.space[3]}px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.l};
  line-height: ${(props) => props.theme.lineHeights.body};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: ${(props) => props.theme.space[3]}px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    font-size: ${(props) => props.theme.fontSizes.xl};
  }
`;

export const Info = styled.p`
  margin-bottom: ${(props) => props.theme.space[7]}px;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    font-size: ${(props) => props.theme.fontSizes.m};
  }
`;
