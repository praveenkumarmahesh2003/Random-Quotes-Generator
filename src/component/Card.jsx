import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Skeleton } from "@material-ui/lab";
import {
  FileCopy as FileCopyIcon,
  Refresh as RefreshIcon,
} from "@material-ui/icons";
import axios from "axios";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 500,
    minHeight: 100,
  },
  content: {
    fontSize: "1rem",
  },
  author: {
    marginTop: 12,
    fontSize: ".8rem",
  },
  errorMessage: {
    color: "red",
    textAlign: "center",
    fontSize: "15px",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
  },
  quoteCopiedMessage: {
    color: "green",
    fontSize: "13px",
    marginLeft: "10px",
  },
}));

export default function QuoteCard() {
  const classes = useStyles();

  const [quote, setQuote] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [loadingQuote, setLoadingQuote] = useState(false);
  const [quoteCopied, setQuoteCopied] = useState(false);
  const [bgColor, setBgColor] = useState('#f2f2f2');

  const lightColors = ['#f2f2f2', '#e6f2ff', '#f2e6ff', '#f2ffe6', '#fff2e6', '#e6fff2','#dbeee0','#fabfe4','#c4adc9','#fffee4','#f8f6d8','#faf0db','#ede9ad','#ededb7'];

  const handleClick= () => {
    let randomNum = Math.floor(Math.random() * lightColors.length);
    setBgColor(lightColors[randomNum]); 
    fetchRandomQuote();
  };
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  async function fetchRandomQuote() {
    try {
      setLoadingQuote(true);
      setErrorMessage("");
      setQuoteCopied(false);
      const quoteObject = await axios.get("https://api.quotable.io/random");
      setQuote(quoteObject.data);
      setLoadingQuote(false);
    } catch (error) {
      setErrorMessage(error.message);
      setLoadingQuote(false);
    }
  }

  function copyQuote() {
    navigator.clipboard.writeText(quote.content + " - " + quote.author);
    setQuoteCopied(true);
  }

  return (
    <Card className={classes.root}style={{backgroundColor:bgColor}}>
      <CardContent>
        {loadingQuote ? (
          <div>
            <Skeleton height={150} width={"38vw"} animation="wave" />
            <Skeleton height={150} width={"20vw"} animation="wave" />
          </div>
        ) : quote.content ? (
          <div>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.content}
            >
              {quote.content}
            </Typography>
            <Typography className={classes.author} color="textSecondary">
              - {quote.author}
            </Typography>
          </div>
        ) : (
          <p className={classes.errorMessage}>{errorMessage}</p>
        )}
      </CardContent>
      <CardActions disableSpacing className={classes.footer}>
        <div>
          {quoteCopied ? (
            <p className={classes.quoteCopiedMessage}>
              Quote copied to clipboard
            </p>
          ) : (
            <IconButton aria-label="copy-icon" onClick={copyQuote}>
              <FileCopyIcon />
            </IconButton>
          )}
        </div>
        <div>
          <IconButton aria-label="copy-icon" onClick={handleClick}>
            <RefreshIcon />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
}
