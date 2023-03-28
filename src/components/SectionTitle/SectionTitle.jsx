import { Desc, Title, Wrapper } from "./SectionTitle.styled";

const SectionTitle = ({ title, text, children }) => {
  return (
    <Wrapper>
      <div>
        <Title>{title}</Title>
        <Desc>{text}</Desc>
      </div>
      {children}
    </Wrapper>
  );
};

export default SectionTitle;
