import  React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import UsersTable from "../../../components/UsersTable";
import RolesTable from "../../../components/RolesTable";
import { useNavigate, useOutletContext } from "react-router-dom";
import apiMiddlewareRequest from "../../../middleware/apiRequestMiddleware";
import { baseUrl } from "../../../../config";
import { useAuth } from "../../../components/AuthProvider";

export default function Roles() {
  const auth = useAuth();
  const [roles, setRoles] = useState([]);
  const navigate = useNavigate();

  const fetchUserData = () => {
    apiMiddlewareRequest(auth.user?.access_token, "get", `${baseUrl}/role/`, "")
      .then((resp) => {
        setRoles(resp.data);
      })
      .catch((resp) => {
        navigate("/login");
      });
  };
 useEffect(() => {
    fetchUserData();
  }, []);

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
              <RolesTable roles={roles} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
