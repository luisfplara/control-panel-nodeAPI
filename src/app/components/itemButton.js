import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export function ItemButton(params) {
  
  return (
    <ListItemButton onClick={params.onClick}>
      <ListItemIcon>
        <params.icon />
      </ListItemIcon>
      <ListItemText primary={params.tittle} />
    </ListItemButton>
  );
}
