import express from "express";

import { movieRouter } from "./routes/movies.router.js";

const PORT = 5000;
const app = express();

app.use(express.json());

app.use("/movies", movieRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
