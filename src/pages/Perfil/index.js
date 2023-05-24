import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import ListSubheader from '@mui/material/ListSubheader';

const informacoes = [
  "Nome Completo",
  "Apelido",
  "Email",
  "Telefone",
  "Celular",
];

const conquistsAndFrequents = ["2° Batalha da Aldeia", "3° Batalha do Tanque"];

const Perfil = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <Card
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              padding: 3,
            }}
          >
            <Avatar
              sx={{ width: 180, height: 180 }}
              alt="Usuario"
              src="/static/images/avatar/1.jpg"
            />
            <h2>Usuario</h2>
          </Card>
        </Grid>
        <Grid item md={8}>
          <Card elevation={3}>
            <List sx={{ bgcolor: "background.paper" }}>
              {informacoes.map((value, key) => (
                  <ListItem key={key} sx={{ width: "50%" }}>
                    <ListItemText
                      sx={{ maxWidth: "200px" }}
                      primary={`${value}:`}
                    />
                    <ListItemText primary="Teste" />
                  </ListItem>
              ))}
            </List>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card elevation={3}>
            <List
              sx={{ bgcolor: "background.paper" }}
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Conquistas
                </ListSubheader>
              }
            >
              {conquistsAndFrequents.map((value, key) => (
                  <ListItem key={key} sx={{ width: "50%" }}>
                    <ListItemText
                      sx={{ maxWidth: "200px" }}
                      primary={`${value}`}
                    />
                  </ListItem>
              ))}
            </List>
          </Card>
        </Grid>
        <Grid item md={8}></Grid>
      </Grid>
    </Box>
  );
};

export default Perfil;
