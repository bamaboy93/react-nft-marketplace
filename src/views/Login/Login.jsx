import { Paper, Grid, ThemeProvider } from "@mui/material";
import LoginForm from "../../components/Form/LoginForm";
import {
  Desc,
  FormWrapper,
  Main,
  PlaceholderGrid,
  Title,
} from "./Login.styled";
import { muiTheme } from "../../styles/muiTheme";

export default function Login() {
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
            <Title component="h1">Log In</Title>
            <Desc component="p">
              Welcome! Enter your credentials and start creating, collecting and
              selling NFTs.
            </Desc>
            <LoginForm />
          </FormWrapper>
        </Grid>
      </Main>
    </ThemeProvider>
  );
}
