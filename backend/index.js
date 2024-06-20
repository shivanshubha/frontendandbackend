import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.static("dist"));

app.get("/api/v1/", (req, res) => {
  res.send("Welcome to home page!");
});
app.get("/api/v1/userInfo", (req, res) => {
  const userDetails = [
    {
      id: 1,
      name: "shivanshu",
      age: 23,
      Passion: "Coder, Trader , Money maker and make a big house",
      single: "yes",
    },
    {
      id: 2,
      name: "Rishi",
      age: 21,
      Passion: "Coder",
      single: "yes",
    },
    {
      id: 3,
      name: "John",
      age: 23,
      Passion: "Youtuber",
      single: "yes",
    },
    {
      id: 4,
      name: "Pradeep",
      age: 23,
      Passion: "UPSC",
      single: "yes",
    },
    {
      id: 5,
      name: "Sunil",
      age: 22,
      Passion: "Teachers",
      single: "yes",
    },
    {
      id: 6,
      name: "Ram",
      age: 23,
      Passion: "Bussnessman",
      single: "yes",
    },
  ];
  res.json(userDetails);
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`The server is now running on port ${port}`);
});
