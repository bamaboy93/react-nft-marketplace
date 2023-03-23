import { IoIosSend } from "react-icons/io";
import { Button, Form, Input } from "./SubscribeForm.styled";

const SubcribeForm = () => {
  return (
    <Form>
      <Input type="email" placeholder="Enter your email here" />
      <Button type="submit">
        <IoIosSend />
        Subscribe
      </Button>
    </Form>
  );
};

export default SubcribeForm;
