import { ListItemButton, ListItemText, ListItemIcon } from "@mui/material";
import { Fragment, useState } from "react";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
export function ItemButtonNested(params) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Fragment>
      <ListItemButton
        onClick={() => {
          params.onClick();
          handleClick();
        }}
      >
        <ListItemIcon>
          <params.icon />
        </ListItemIcon>
        <ListItemText primary={params.tittle} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {params.children.map((children, index) => {

            return (
              <Fragment key={index}>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => {
                    children.onClick();
                  }}
                >
                  <ListItemIcon>
                    <children.icon />
                  </ListItemIcon>
                  <ListItemText primary={children.tittle} />
                </ListItemButton>
              </Fragment>
            );
          })}
        </List>
      </Collapse>
    </Fragment>
  );
}
