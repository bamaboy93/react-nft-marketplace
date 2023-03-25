import { Paper, Grid, ThemeProvider } from "@mui/material";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import {
  Desc,
  FormWrapper,
  Main,
  PlaceholderGrid,
  Title,
} from "./Register.styled";
import { muiTheme } from "../../styles/muiTheme";

export default function Register() {
  return (
    <ThemeProvider theme={muiTheme}>
      <Main container component="main">
        <PlaceholderGrid item xs={12} sm={6} md={7} lg={6} />
        <Grid
          item
          xs={12}
          sm={6}
          md={5}
          lg={6}
          component={Paper}
          elevation={6}
          square
        >
          <FormWrapper>
            <Title component="h1">Create account</Title>
            <Desc component="p">
              Welcome! enter your details and start creating, collecting and
              selling NFTs.
            </Desc>
            <RegisterForm />
          </FormWrapper>
        </Grid>
      </Main>
    </ThemeProvider>
  );
}
