import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { baseUrl } from "../../config";
import { FormControl } from "@mui/material";
import User from "../models/user";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useAuth } from "../components/AuthProvider";
// TODO remove, this demo shouldn't need to reset the theme.

export default function Login() {
  //let [email, setEmail] = React.useState("");
  //let [password, setPassword] = React.useState("");
  const [validated, setValidated] = React.useState(false);

  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (form.checkValidity() === true) {
      var email = data.get("email");
      var password = data.get("password");

      axios
        .post(
          `${baseUrl}/auth/signin`,
          {
            email: email,
            password: password,
          },
          { withCredentials: true }
        )
        .then(async (resp) => {
          setValidated(false);

          if (resp.status == 200) {
            if (resp.data.access_token) {
              auth.login(resp.data);

              navigate("/");
            }
          }
        });
    }
    setValidated(true);
  };
  /*       backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],*/
  return (
    <Container component="main" maxWidth="xs">
      <Box
        bgcolor="background.default"
        sx={{
          padding: 10,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "16px",
        }}
      >
        <Typography component="h1" variant="h5" color="secondary.main">
          Saffi CP
        </Typography>

        <FormControl
          component="form"
          onSubmit={handleSubmit}
          noValidate={validated}
          sx={{ mt: 1 }}
          onChange={() => {}}
        >
          <TextField
            variant="filled"
            sx={{ input: { color: "white" } }}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            sx={{ input: { color: "white" } }}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
}
