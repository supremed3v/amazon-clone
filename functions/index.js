const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51JzaLJL2QG12Ag6q4AIBD159sV1gaxV7vgKsYRZSKIHl6xE7rJs4dGhq9eHa0YxIX2BckoVtm9j4UmLhzZqFc3jT00PKsD5Epj"
);

// API

// - App config
const app = express();

// -Middlwares
app.use(cors({ origin: true }));
app.use(express.json());
// -API routes
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// -Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-7c60d/us-central1/api
