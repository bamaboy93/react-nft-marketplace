import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.li`
  max-width: 310px;
  padding: 10px 10px 30px 10px;
  text-align: center;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.background.light};
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
`;

export const ItemTitle = styled.h3`
  margin-top: ${(props) => props.theme.space[7]}px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.m};
  line-height: ${(props) => props.theme.lineHeights.body};
`;

export const ItemDesc = styled.p`
  margin-top: ${(props) => props.theme.space[2]}px;
`;
