require("dotenv").config({ path: "variables.env" });
const express = require("express");
const app = express();
const port = 5001;
const cors = require("cors");
const Twitter = require("twitter");

let resultado;
let userTweet = [];
let params = { q: `%23RapportMH` };

app.use(express.json({ extended: true }));
app.use(cors());

let lector = new Twitter({
  consumer_key: process.env.KEY_TWITTER,
  consumer_secret: process.env.SECRET_KEY_TWITTER,
  access_token_key: process.env.TOKEN_TWITTER,
  access_token_secret: process.env.TOKEN_SECRET_TWITTER,
  bearer_token: process.env.BEARER_TWITTER_TWITTER,
});

app.get("/rapportCommunity", (req, res) => {
  lector.get("search/tweets", params, async function (error, tweets, response) {
    if (!error) {
      resultado = tweets.statuses;
      for (let index = 0; index < resultado.length; index++) {
        let username = await resultado[index].user.name;
        let text = await resultado[index].text;
        userTweet[index] = { username, text };
      }
    } else {
      console.log(error);
    }
  });
  res.send({ userTweet });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
