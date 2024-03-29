import express from 'express';
import { OpenAIApi, Configuration } from 'openai'
import * as dotenv from 'dotenv'

dotenv.config();
const Router = express.Router();



const configuration = new Configuration({
    apiKey: process.env.OPENAPI_KEY,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAPI_KEY}`,
    }
})


const openapi = new OpenAIApi(configuration)

Router.route('/').get((req, res) => res.status(200).json({ data: 'hii' })

)
Router.route('/').post( async (req, res) => {
    try {
                const { prompt } = req.body;
        
                const response = await openapi.createImage({
                    prompt,
                    n: 1,
                    size: '256x256',
                
                    
                });
        
                const image = response.data.data[0].url;
              
                res.status(200).json({ photo: image });
            } catch (error) {
                console.error(error);
            }
    }
)



export default Router;