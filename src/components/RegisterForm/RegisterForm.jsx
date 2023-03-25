import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Error, Form, Input } from "./RegisterForm.styled";
import { theme } from "../../styles/theme";
import { ThemeProvider } from "@emotion/react";

const schema = yup
  .object()
  .shape({
    userName: yup.string().required("Username is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
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
        <Error>{errors.userName?.message}</Error>
        <Input
          placeholder="Username"
          {...register("userName")}
          required
          isError={!!errors.userName}
        />
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
        <Error>{errors.confirmPassword?.message}</Error>
        <Input
          placeholder="Confirm Password"
          type="password"
          {...register("confirmPassword")}
          required
          isError={!!errors.confirmPassword}
        />
        <Button type="submit">Create account</Button>
      </Form>
    </ThemeProvider>
  );
}
