import express from "express";
import cors from "cors";
import connectDb from "./mongodb/Connect.js";
import ApiRoutes from "./Routes/ApiRoutes.js";
import PostRoutes from "./Routes/PostRoutes.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: '500mb' }));

app.use('/api/post',ApiRoutes)
app.use('/api/posts',PostRoutes)



app.get('/', (req, res) => {
    res.send('hello DALL-E')
});

const startServer = async () => {

    try {
        connectDb();
        app.listen(8080, () => console.log('server started!', 8080));

    } catch (error) {
        console.log(error)
    }

}

startServer();