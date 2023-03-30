import styled from "@emotion/styled";

export const Form = styled.form`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: calc(100% - 20px);
  outline: none;
  border: none;
  border-radius: 20px;
  padding: 20px 0 20px 20px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.grey};

  font-size: ${(props) => props.theme.fontSizes.s};

  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 20px 30px;
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.s};
  transition: transform 250ms ease;

  @media (max-width: ${(props) => props.theme.breakpoint.lg}) {
    margin-top: ${(props) => props.theme.space[4]}px;
    width: 100%;
    justify-content: center;
  }

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    position: absolute;
    top: 0;
    right: 0;
  }

  :hover {
    transform: scale(0.95);
    transform-origin: center;
  }

  svg {
    width: 18px;
    height: 18px;
    margin-right: ${(props) => props.theme.space[2]}px;
    fill: currentColor;
  }
`;
