import React from "react";
import { useForm } from "react-hook-form";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Stack from "@mui/material/Stack";

const CriarBatalha = () => {
  const { register, handleSubmit } = useForm();
  
  const onFormSubmit = (data) => console.log(data);
  const onErrors = (errors) => console.error(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
        <Grid container spacing={2}>
          <Stack
            spacing={{ xs: 1, sm: 1 }}
            direction="row"
            flexWrap="wrap"
            flexGrow={1}
            alignItems="end"
          >
            <TextField
              name="Titulo"
              type="text"
              label="Titulo"
              size="small"
              variant="outlined"
              {...register("Titulo")}
            />
            <TextField
              name="Edicao"
              type="number"
              label="Edicao"
              size="small"
              variant="outlined"
              {...register("Edicao")}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <DateTimePicker
                  label="Data da Batalha"
                  name="DataBatalha"
                  {...register("DataBatalha")}
                  slotProps={{
                    textField: { size: "small", variant: "outlined" },
                  }}
                  format="DD/MM/YYYY hh:mm"
                />
              </DemoContainer>
            </LocalizationProvider>

            <TextField
              name="Rua"
              type="text"
              label="Rua"
              size="small"
              variant="outlined"
              {...register("Rua")}
            />
          </Stack>
        </Grid>
      </form>
    </>
  );
};

export default CriarBatalha;
