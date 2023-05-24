import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    --background-color: #1b1b1b;
  }
  
  [data-theme="light"] {
    --background-color:white;
    color: black;

    .MuiDrawer-paper{
      background-color: #fff;
    color: rgba(0, 0, 0, 0.87);
    }

    .MuiDataGrid-cell[data-field="imageEvent"]{
      padding-left: 0;
    }
  }
  
  [data-theme="dark"] {
    --background-color: #1b1b1b;
    color: white;

    .MuiDrawer-paper{
      background-color: rgb(5 42 54);
      color: #fff;
      border-right: 1px solid rgb(255 255 255 / 12%);
    }

    .MuiSvgIcon-root{
      color: #fff;
    }

    Button .MuiSvgIcon-root{
      color: rgb(5 42 54);
    }

    .MuiDivider-root{
      border-color: rgb(255 255 255 / 12%);
    }

    #sideMenuDrawer .MuiListItem-root:hover{
      background-color: rgb(34, 151, 120);
    }

    .MuiAppBar-root{
      background-color: #052a36;
    }

    .MuiDataGrid-columnHeaderTitle, .MuiDataGrid-cellContent, .MuiTablePagination-displayedRows{
      color: #fff;
    }

    .MuiButtonBase-root svg{
      color: #fff;
    }

    .MuiButtonBase-root[disabled] svg{
      color: rgb(137 137 137);
    }

    .MuiDataGrid-cell[data-field="imageEvent"]{
      padding-left: 0;
    }
  }
  
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background-color: var(--background-color) !important;
      font-family: Arial, Helvetica, sans-serif;
    }

    .MuiFormHelperText-root{
      -webkit-user-modify: read-write-plaintext-only;

    .MuiDataGrid-cell[data-field="imageEvent"]{
      padding-left: 0;
    }
  }
`;

export default GlobalStyle;
