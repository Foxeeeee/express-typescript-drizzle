import express from 'express';
import 'dotenv/config'
import router from './routes/route';

const app = express();

const port = process.env.PORT;

app.use('/tourrist-attraction', router);

app.listen(port, () => {
    console.log(`Apps running on http://localhost:${port}`)
})