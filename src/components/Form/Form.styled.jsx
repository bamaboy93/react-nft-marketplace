import styled from "@emotion/styled";

export const Form = styled.form`
  width: 100%;
  margin-top: ${(props) => props.theme.space[8]}px;
  margin-bottom: ${(props) => props.theme.space[8]}px;
  text-align: center;
`;

export const Input = styled.input`
  width: calc(100% - 20px);
  outline: none;
  border-radius: 20px;
  border: ${(props) => (props.isError ? "3px solid #c1121f" : "none")};
  padding: 14px 0 14px 20px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.grey};
  font-size: ${(props) => props.theme.fontSizes.s};
  margin-bottom: ${(props) => props.theme.space[5]}px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
`;

export const Button = styled.button`
  padding: 20px 50px;
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.s};
  transition: transform 250ms ease-out;
  :hover {
    transform: scale(0.95);
  }
`;

export const Error = styled.p`
  color: red;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.xs};
`;
