import { Button, Text } from "./ButtonSecondary.styled";
const ButtonSecondary = ({ text, icon, width }) => {
  return (
    <Button width={width}>
      {icon}
      <Text>{text}</Text>
    </Button>
  );
};

export default ButtonSecondary;
