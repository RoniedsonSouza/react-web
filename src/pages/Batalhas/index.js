import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Grid } from "@mui/material";
import batalhaService from "../../services/batalhaService";
import { useNavigate } from "react-router-dom";

const columns = [
  { field: "idBatalha", headerName: "Id", sortable: false },
  {
    field: "imageEvent",
    headerName: "",
    width: 360,
    renderCell: (params) => (
      <Box
        sx={{
          backgroundImage: `url(${params.value})`,
          backgroundRepeat: "no-repeat",
          height: "100px",
          width: "360px",
          backgroundSize: "100%",
          backgroundPosition: "center",
          borderRadius: "8px"
        }}
      />
    ),
    sortable: false,
  },
  { 
    field: "infosBatalha", 
    headerName: "Batalha", 
    sortable: false,
    renderCell: (params) => (
      <Box>
        <Grid sx={{ color: "white" }}>{params.row.titulo}</Grid>
      </Box>
    ),
    width: 160
  },
  { field: "data", headerName: "Data", sortable: false },
  {
    field: "age",
    headerName: "Edição",
    type: "number",
    sortable: false,
  },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   valueGetter: (params) =>
  //     `${params.row.infosBatalha || ""} ${params.row.data || ""}`,
  // },
];

const rows = [
  {
    id: 1,
    imageEvent: "imgs/bannerBatalha.jpg",
    data: "25/06/2022",
    infosBatalha: "Jon",
    titulo: "Batalha da Aldeia",
    age: 35,
  }
];

const Batalhas = () => {
  const [batalhas, setBatalhas] = useState([]);
  const navigate = useNavigate();

  const getBatalhas = async () => {
    var batalha = await batalhaService.GetBatalhas({});
    console.log(batalha);
    setBatalhas(batalha);
  }

  useEffect(() => {
    getBatalhas();
  }, [])
  

  return (
    <div>
      <Button width="auto" text="Nova Batalha" StartIcon={<AddIcon />} onClick={() => {navigate("/batalhas/criar-batalha")}}></Button>
      <div style={{ width: "100%" }}>
        <DataGrid
          sx={{ mt: 3 }}
          rows={batalhas}
          columns={columns}
          paginationModel={{ page: 0, pageSize: 5 }}
          columnVisibilityModel={{
            idBatalha: false,
          }}
          rowHeight={100}
          disableColumnMenu
        />
      </div>
    </div>
  );
};

export default Batalhas;
