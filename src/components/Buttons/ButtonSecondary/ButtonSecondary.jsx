import { Button, Text } from "./ButtonSecondary.styled";
const ButtonSecondary = ({ text, icon }) => {
  return (
    <Button>
      {icon}
      <Text>{text}</Text>
    </Button>
  );
};

export default ButtonSecondary;
