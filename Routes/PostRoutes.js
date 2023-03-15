import  express  from "express";
import { v2 as cloudinary } from "cloudinary";
import Post from "../models/Post.js";
const Router=express.Router();



cloudinary.config({
    cloud_name: "dr0kkedgw",
    api_key: "476286938432661",
    api_secret: "gZSCaK-TNglAgQ4MtrBPxA9DxuI"
})




Router.route('/').post(async (req, res) => {
    try {
      const { name, prompt, photo } = req.body;
      if (!name || !prompt || !photo) {
        return res.status(400).json({ success: false, message: 'Please provide name, prompt, and photo' });
      }
      const photoUrl = await cloudinary.uploader.upload(photo);
    
      const newPost = await Post.create({
        name,
        prompt,
        photo:photoUrl.url,
      })
      res.status(200).json({ success: true, data: newPost });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
    }
  });
  
  
  Router.route('/').get(async (req, res) => {
      try {
        const posts = await Post.find({});
        console.log(posts); // Log the contents of the posts collection to the console
        res.status(200).json({ success: true, data: posts });
      } catch (err) {
        res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
      }
    });






export default Router;