import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from "@mui/material";
const theme = createTheme({
    palette: {
        primary: {
          main: '#2680be', // Your primary color
        },
        background: {
          default: 'white', // Default background color for components like AppBar
        },
      },
});

const rootElement =document.getElementById('root');
ReactDOM.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
    document.getElementById("root")
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
