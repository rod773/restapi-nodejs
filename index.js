import express from "express";
import fs from "fs";

const app = express();

const port = 5000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

app.get("/", function (req, res) {
  fs.readFile("./users,json", "utf8", (err, data) => {
    if (err) console.log(err);
    console.log(data);
    res.end(data);
  });
});

app.get("/:id", function (req, res) {
  console.log(req.params.id);

  const id = req.params.id;

  fs.readFile("./users,json", "utf8", (err, data) => {
    if (err) console.log(err);

    const users = JSON.parse(data); // string to object

    let user = users
      .filter((user) => {
        return user.id == 1;
      })
      .map((user) => {
        return {
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
        };
      });

    user = JSON.stringify(user[0]); //object to string

    console.log(user);

    res.end(user);
  });
});
