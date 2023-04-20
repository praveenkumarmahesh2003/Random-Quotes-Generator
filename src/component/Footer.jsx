import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
    root: {
      minHeight: "100vh",
      background: "#f1f1f1",
      paddingTop: "64px", /* Add padding to account for AppBar height */
    },
    heading: {
      fontFamily: "times, Times New Roman, times-roman, georgia, serif",
      fontSize: "25px",
      lineHeight: "40px",
      letterSpacing: "-1px",
      color: "#444",
      fontWeight: "100",
    },
    footer: {
      backgroundColor: "#9c27b0",
      color: "white",
      textAlign: "center",
      width: "100%",
      height: "60px",
      position: "absolute",
      bottom: 0,
    },
  }));

export default function Footer() {
    const classes = useStyles();
  
    return (
      <div className={classes.footer}>
        <Typography variant="subtitle1" align="center">
          Thank You Visiting!!
        </Typography>
      </div>
    );
  }