import styled from "@emotion/styled";

export const Form = styled.form`
  position: relative;
  width: 100%;
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 20px 0 20px 20px;
  border: none;
  border-radius: 20px;
  outline: none;

  :focus {
    outline: 2px solid ${(props) => props.theme.colors.accent};
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${(props) => props.theme.colors.accent};
`;
