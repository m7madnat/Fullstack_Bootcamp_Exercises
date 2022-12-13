import express from 'express';
import './db/mongoose.js';
import { productRoute } from './routers/index.router.js';


const app = express();

app.use(express.json());

app.use('/api', productRoute);


const PORT = 5000;

app.listen(PORT, () => {
  console.log('Listening to PORT ' + PORT);
});
