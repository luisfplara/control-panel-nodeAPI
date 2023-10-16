import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./app/pages/Login";
import Layout from "./app/pages/Layout";

import { createTheme, ThemeProvider, ThemeOptions } from "@mui/material/styles";
import Home from "./app/pages/Home/Home";
import Users from "./app/pages/Users/Users";
import Roles from "./app/pages/Users/Roles/Roles";
import { AuthProvider } from "./app/components/AuthProvider";

const defaultTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ffd614',
    },
    secondary: {
      main: '#E2ECF1',
    },
    background: {
      default: '#263641',
      
    },
  },
});

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={defaultTheme}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/roles" element={<Roles />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
