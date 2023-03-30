import styled from "@emotion/styled";

export const HeroWrapper = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Wrapper = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    width: 420px;
  }
  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    width: 610px;
  }
`;

export const MainCard = styled.div`
  width: "100%";
  background-color: ${(props) => props.theme.colors.background.light};
  border-radius: 20px;
  padding-bottom: ${(props) => props.theme.space[4]}px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  @media (max-width: ${(props) => props.theme.breakpoint.md}) {
    margin-bottom: ${(props) => props.theme.space[10]}px;
  }

  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    width: 360px;
  }
  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    width: 510px;
  }
`;

export const MainImage = styled.img`
  display: block;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    height: 280px;
  }
  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    height: 410px;
  }
`;

export const CardTitle = styled.p`
  margin-top: ${(props) => props.theme.space[4]}px;
  margin-bottom: ${(props) => props.theme.space[3]}px;
  margin-left: ${(props) => props.theme.space[3]}px;
  font-size: ${(props) => props.theme.fontSizes.m};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const Author = styled.p`
  margin-left: ${(props) => props.theme.space[3]}px;
`;

export const Title = styled.h1`
  margin-bottom: ${(props) => props.theme.space[2]}px;
  font-size: ${(props) => props.theme.fontSizes.l};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    margin-bottom: ${(props) => props.theme.space[4]}px;
    font-size: ${(props) => props.theme.fontSizes.xl};
  }
  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    font-size: ${(props) => props.theme.fontSizes.xxxl};
  }
`;

export const Desc = styled.p`
  margin-bottom: ${(props) => props.theme.space[3]}px;
  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }
`;

export const List = styled.ul`
  display: flex;
  @media (max-width: ${(props) => props.theme.breakpoint.sm}) {
    justify-content: space-between;
  }
  margin-top: ${(props) => props.theme.space[7]}px;
`;

export const Item = styled.li`
  :not(:last-child) {
    @media (min-width: ${(props) => props.theme.breakpoint.sm}) {
      margin-right: ${(props) => props.theme.space[7]}px;
    }
  }
`;

export const Number = styled.p`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.l};
`;

export const Name = styled.p`
  font-size: ${(props) => props.theme.fontSizes.s};
  color: ${(props) => props.theme.colors.accent};
  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    font-size: ${(props) => props.theme.fontSizes.m};
  }
`;
