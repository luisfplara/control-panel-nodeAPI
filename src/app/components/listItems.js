import React, { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useNavigate } from "react-router-dom";
import { Collapse, List } from "@mui/material";
import StarBorder from "@mui/icons-material/StarBorder";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LockIcon from "@mui/icons-material/Lock";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { ItemButton } from "./itemButton";
import { ItemButtonNested } from "./itemButtonNested";


export function MainListItems() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ItemButton
        icon={DashboardIcon}
        tittle="Home"
        onClick={() => {
          navigate("/");
        }}
      />
      <ItemButtonNested
        icon={PermIdentityIcon}
        tittle="Users"
        onClick={() => {
          navigate("/users");
        }}
        children={[
          {
            icon: LockIcon,
            tittle: "Roles",
            onClick: () => navigate("/roles"),
          },

        ]}
      />

    </React.Fragment>
  );
}

export function SecondaryListItems() {
  return <React.Fragment></React.Fragment>;
}
