import {
  AppBar,
  Box,
  CircularProgress,
  createMuiTheme,
  Grid,
  IconButton,
  Menu,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import MainGrid from './mainGrid'
import React from "react";
import ReactDOM from "react-dom";
import TopBar from "./topbar";
import wallaper from "../resources/polygon.jpg";
import loader from "../resources/1497.gif";
import VerticalTabs from "./verticalTabs";
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "rgba(0,0,0,1)",
    },
    secondary: {
      main: "rgba(62 197 110,1)",
      contrastText:"white"
    },
  },
});
const useStyles = makeStyles({
  root: {
    width: "100vw",
  },
  item:{
    margin:'3px 3px 0px 3px'
  },
  sideBar: {
    position: "fixed",
    borderRadius: "17px",
  },
  content:{
    height:'100%',

  }
});
function RootLayout() {
  
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <MainGrid
         header={<TopBar></TopBar>}
         body={<CircularProgress color='secondary' />}
         sidebar={<VerticalTabs></VerticalTabs>}
        />
        {/* <Grid container className={classes.root }>
          <Grid item xs={12}className={classes.item }>
            <TopBar></TopBar>
          </Grid>

          <Grid item container xs={12} className={`${classes.item} ${classes.content}`}>
            <Box className={classes.sideBar}>
              <VerticalTabs></VerticalTabs>
            </Box>
            <Box >
            <CircularProgress color='secondary' />
                       </Box>
          </Grid>
  </Grid> */}
      </CssBaseline>
    </ThemeProvider>
  );
}
export default RootLayout;
