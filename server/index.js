const express = require("express");
const cors = require("cors");
const app = express();
const ctrl = require("./controller");

const PORT = 3999;

app.use(cors());
app.use(express.json());

// app.get("/api/posts", (req, res) => {
//   return res.status(200).send(babyGift);
// });

app.get("/api/posts", ctrl.getGifts);
app.post("/api/posts", ctrl.addGifts);
app.delete("/api/posts/:newId", ctrl.deleteGifts);
app.put("/api/posts/:newId", ctrl.editGifts);

app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));
