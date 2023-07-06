"use client";
import {
  Avatar,
  Button,
  Checkbox,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import WifiProtectedSetupOutlinedIcon from "@mui/icons-material/WifiProtectedSetupOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import MoneyOffCsredOutlinedIcon from "@mui/icons-material/MoneyOffCsredOutlined";
import { useRouter } from "next/navigation";
import DoorFrontOutlinedIcon from "@mui/icons-material/DoorFrontOutlined";
import Newsletter from "../Dashboard/NewsLetterPage";
const ListOptions = [
  {
    name: "Dashboard",
    icon: DashboardOutlinedIcon,
    link: "/dashboard/",
  },
  {
    name: "Productos",
    icon: Inventory2OutlinedIcon,
    link: "/dashboard/productos",
  },
  {
    name: "Clientes",
    icon: Person3OutlinedIcon,
    link: "/dashboard/clientes",
  },
  {
    name: "Proveedores",
    icon: WifiProtectedSetupOutlinedIcon,
    link: "/dashboard/proveedores",
  },
  {
    name: "Ingresos",
    icon: AttachMoneyOutlinedIcon,
    link: "/dashboard/ingresos",
  },
  {
    name: "Egresos",
    icon: MoneyOffCsredOutlinedIcon,
    link: "/dashboard/egresos",
  },
];

function LayoutDashboard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <Grid container className="" spacing={2}>
      <Grid item className="bg-blue-700 rounded-xl h-screen relative " xs={3}>
        <div className="h-5/6">
          <List>
            {ListOptions.map((item) => (
              <>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => router.push(item.link)}
                    className="text-white"
                  >
                    <ListItemIcon>
                      <item.icon className="text-white" />
                    </ListItemIcon>
                    <ListItemText className="font-bold">
                      {item.name}
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <Divider light />
              </>
            ))}
          </List>
          <Newsletter />
        </div>

        <div className="bg-black h-1/5">
          <ListItem
            alignItems="flex-start"
            secondaryAction={
              <Button
                variant="text"
                color="error"
                endIcon={<DoorFrontOutlinedIcon color="error" />}
              >
                Cerrar
              </Button>
            }
          >
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbbYUk3TNQ-hpvDYQcg-QqqwWVwfxZYqWCh-uNuuoWgKfcGopr"
              />
            </ListItemAvatar>
            <ListItemText
              className="text-white"
              primary="Anthony Lamilla "
              secondary={
                <React.Fragment>
                  <Button variant="outlined">Ver cuenta</Button>
                </React.Fragment>
              }
            />
          </ListItem>

          <div></div>
        </div>
      </Grid>

      <Grid item xs={9} className="bg-white ">
        <div className="relative h-screen  overflow-y-scroll">{children}</div>
      </Grid>
    </Grid>
  );
}

export default LayoutDashboard;
