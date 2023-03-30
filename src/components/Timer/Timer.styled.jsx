import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 300px;
  padding: 30px 20px;
  background: rgba(59, 59, 59, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  @media (max-width: ${(props) => props.theme.breakpoint.sm}) {
    margin-top: ${(props) => props.theme.space[8]}px;
  }
`;

export const Notification = styled.p`
  margin-bottom: ${(props) => props.theme.space[4]}px;
`;

export const Time = styled.p``;
export const NumbersRow = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: ${(props) => props.theme.space[1]}px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.l};
`;

export const Row = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Numbers = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.xl};
`;
export const Desc = styled.span`
  margin-left: ${(props) => props.theme.space[1]}px;
`;
