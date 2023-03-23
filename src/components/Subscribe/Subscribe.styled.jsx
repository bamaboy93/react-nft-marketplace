import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 100px;
  background-color: ${(props) => props.theme.colors.background.light};
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
`;

export const Image = styled.img`
  width: 425px;
  heigth: 310px;
  display: block;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
`;

export const InfoWrapper = styled.div`
  width: 425px;
  padding: 20px 0;
`;

export const Title = styled.h2`
  margin-bottom: ${(props) => props.theme.space[1]}px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.xl};
  line-height: ${(props) => props.theme.lineHeights.body};
`;

export const Info = styled.p`
  margin-bottom: ${(props) => props.theme.space[7]}px;
  font-size: ${(props) => props.theme.fontSizes.m};
`;
