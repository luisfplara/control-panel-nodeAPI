import React, { useEffect, useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "../../components/listItems";
import Chart from "../../components/Chart";
import Deposits from "../../components/Deposits";

import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import UsersTable from "../../components/UsersTable";
import { useAuth } from "../../components/AuthProvider";
import apiMiddlewareRequest from "../../middleware/apiRequestMiddleware";
import { baseUrl } from "../../../config";

export default function Home() {
  const auth = useAuth();

  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    apiMiddlewareRequest(auth.user?.access_token, "get", `${baseUrl}/user/`, "")
      .then((resp) => {

        setUsers(resp.data);
      })
      .catch((resp) => {
        navigate("/login");
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  useEffect(() => {}, [users]);
  return (
    <Box
      component="main"
      sx={{

        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Toolbar />
      <Container bgcolor="background.main"   sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <Chart />
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <Deposits />
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <UsersTable users ={users}/>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
