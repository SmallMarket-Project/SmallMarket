import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { config } from './config.js';
import { sequelize } from './database/database.js'; // ORM
import { initSocket } from './connect/socket.js';
import smsRouter from './router/smsRouter.js';
import userRouter from './router/userValidateRouter.js';
import itemRouter from './router/itemRouter.js';
import questionRouter from './router/questionRouter.js';
import * as itemRepository from './repository/itemRepository.js';

const app = express();
const corsOptions = {
    origin: config.cors.allowedCors,
    // origin: "http://localhost:3000",
    credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json()); // using json for http
app.use(morgan('tiny'));
app.use(helmet());

// router
app.use('/user', userRouter);
app.use('/items', itemRouter);
app.use('/board', questionRouter);
app.use('/sms', smsRouter);

// itemRepository.itemInitData()

app.use((error, request, response, next) => { // catch server error
    console.error(error);
    response.sendStatus(500);
});

sequelize.sync().then(() => {
    const server = app.listen(config.host.port);
    initSocket(server);
});
