import { Button, Text } from "./ButtonMain.styled";
const ButtonMain = ({ text, icon }) => {
  return (
    <Button>
      {icon}
      <Text>{text}</Text>
    </Button>
  );
};

export default ButtonMain;
