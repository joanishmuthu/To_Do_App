const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const routes = require("./routes/ToDoRoute");

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());

mongoose
    .connect("mongodb+srv://joanish:29101999@cluster0.ocienok.mongodb.net/TO_DO_APP?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.error(err));

// Routes
app.use(routes);

app.listen(PORT, () => console.log("Server running on port " + PORT));