// import React from "react";
// import { Grid } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "./component/Card";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles(() => ({
//   root: {
//     minHeight: "100vh",
//     background: "#f1f1f1",
//     paddingTop: "64px", /* Add padding to account for AppBar height */
//   },
//   heading: {
//     fontFamily: "times, Times New Roman, times-roman, georgia, serif",
//     fontSize: "25px",
//     lineHeight: "40px",
//     letterSpacing: "-1px",
//     color: "#444",
//     fontWeight: "100",
//   },
//   footer: {
//     backgroundColor: "#9c27b0",
//     color: "white",
//     textAlign: "center",
//     width: "100%",
//     height: "60px",
//     position: "absolute",
//     bottom: 0,
//   },
// }));

// function Footer() {
//   const classes = useStyles();

//   return (
//     <div className={classes.footer}>
//       <Typography variant="subtitle1" align="center">
//         Thank You Visiting!!
//       </Typography>
//     </div>
//   );
// }

// export default function NestedGrid() {
//   const classes = useStyles();

//   return (
//     <div>
//       <AppBar position="fixed" style={{ backgroundColor: "#9c27b0" }}>
//         <Toolbar style={{ justifyContent: "center" }}>
//           <Typography variant="h6" className={classes.title}>
//             Random Quote Generator
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Grid
//         container
//         spacing={0}
//         direction="column"
//         alignItems="center"
//         justify="center"
//         className={classes.root}
//       >
//         <Grid item md={8} sm={8} xs={10}>
//           <Card />
//         </Grid>
//       </Grid>
//       <Footer />
//     </div>
//   );
// }
import React from 'react'
import NestedGrid from './component/Appbar'
import Footer from './component/Footer'

export default function App() {
  return (
    <div>
      <NestedGrid />
    </div>
  )
}

