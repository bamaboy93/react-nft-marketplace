import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  width: ${(props) => props.width};
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 12px 36px;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  transition: scale 250ms ease-out;

  &:hover {
    scale: 0.95;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: ${(props) => props.theme.colors.accent};
  }
`;

export const Text = styled.span`
  margin-left: ${(props) => props.theme.space[2]}px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.s};
  line-height: ${(props) => props.theme.lineHeights.body};
`;
