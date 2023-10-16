import React ,{useEffect, useState}from "react";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import UsersTable from "../../components/UsersTable";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useAuth } from "../../components/AuthProvider";
import apiMiddlewareRequest from "../../middleware/apiRequestMiddleware";
import { baseUrl } from "../../../config";

export default function Users() {
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
      <Container sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <UsersTable users={users}/>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
