import React, { useEffect, useState } from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { baseUrl } from "../../config";
import axios from "axios";
import { useAuth } from "./AuthProvider";
import apiMiddlewareRequest from "../middleware/apiRequestMiddleware";

// Generate Order Data

function preventDefault(event) {
  event.preventDefault();
}

export default function RolesTable({roles}) {

  return (
    <div>
      <Title>Users</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roles
            ? roles.map((role, index) => (
                <TableRow key={index}>
                  <TableCell>{role._id}</TableCell>
                  <TableCell>{role.name}</TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </div>
  );
}
