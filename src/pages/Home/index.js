import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <div>
      <h4>Eventos em Hype</h4>
      <hr
        className="MuiDivider-root MuiDivider-fullWidth"
        style={{ width: "100%", display: "inline-table" }}
      ></hr>
      <Card sx={{ maxWidth: 300 }} elevation={2}>
        <CardMedia
          sx={{ height: "100%", minHeight: 360 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title=""
        />
        <CardActions sx={{ justifyContent: "end" }}>
          <Button size="small">Assitir</Button>
        </CardActions>
      </Card>
      <br/>
      <h4>Próximos Eventos</h4>
      <hr
        className="MuiDivider-root MuiDivider-fullWidth"
        style={{ width: "100%", display: "inline-table" }}
      ></hr>
      <Card sx={{ maxWidth: 300 }} elevation={2}>
        <CardMedia
          sx={{ height: "100%", minHeight: 360 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title=""
        />
        <CardActions sx={{ justifyContent: "end" }}>
          <Button size="small">Assitir</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Home;
