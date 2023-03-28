import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Error, Form, Input } from "./Form.styled";
import { theme } from "../../styles/theme";
import { ThemeProvider } from "@emotion/react";

const schema = yup
  .object()
  .shape({
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  })
  .required();

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <ThemeProvider theme={theme}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Error>{errors.email?.message}</Error>
        <Input
          placeholder="Email Address"
          type="email"
          {...register("email")}
          required
          isError={!!errors.email}
        />
        <Error>{errors.password?.message}</Error>
        <Input
          placeholder="Password"
          type="password"
          {...register("password")}
          required
          isError={!!errors.password}
        />

        <Button type="submit">Login</Button>
      </Form>
    </ThemeProvider>
  );
}
