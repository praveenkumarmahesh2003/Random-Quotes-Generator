import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from '../component/Card';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import {img} from "../assets/background.jpg";
import { useState } from "react";
import "../App.css";
import Footer from "./Footer";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles(() => ({
  
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
      
    },
  }));


export default function NestedGrid() {
    const classes = useStyles();
    // const bg = "../assets/background.jpg";
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data
  }
  
    return (
      <>
      <div className="ro" > 
        <AppBar position="fixed" style={{ backgroundColor: "#9c27b0" }}>
          <Toolbar style={{ justifyContent: "center" }}>
            <Typography variant="h6" className={classes.title} style={{color:"white"}}>
              Random Quote Generator
            </Typography>
            <div className="link">
              <ul>
                <li><a href="">HOME</a></li>
                <li><a href="#ab">ABOUT ME</a></li>
                <li><a href="#abc">CONTACT ME</a></li>
              </ul>
            </div>
          </Toolbar>
        </AppBar>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          className={classes.root}
        >
          <Grid item md={8} sm={8} xs={10}>
            <Card />
          </Grid>
        </Grid>
      </div>
      <div className="about" id="ab">
        <h1>ABOUT ME</h1>
        <p>I am a highly motivated and detail-oriented individual with a passion for technology and innovation. I have experience in web development and design, with a strong understanding of HTML, CSS, and JavaScript. I am also proficient in using popular front-end frameworks such as React and Angular. In addition to my technical skills, I am a great team player with excellent communication skills, always willing to go the extra mile to ensure that projects are delivered on time and to a high standard. I am constantly seeking opportunities to learn and grow both personally and professionally, and I am excited to bring my skills and enthusiasm to your organization.</p>
      </div>
      <div className="contact" id="abc">
        <h1>CONTACT ME</h1>
      <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    
      </div>
    <div className="f">
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-solid fa-envelope"></i>
      {/* <h1>
        ThankYou for visiting!
      </h1> */}

    </div>

</>
    );
  }