import express from 'express';
import { OpenAIApi, Configuration } from 'openai'
const Router = express.Router()

const configuration = new Configuration({
    apiKey: "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"
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
                    size: '1024x1024',
                    
                });
        
                const image = response.data.data[0].url;
                res.status(200).json({ photo: image });
            } catch (error) {
                console.error(error);
            }
    }
)



export default Router;
