import { app } from "../app.js";
import cloudinary from "cloudinary";
import connection from "../config/connection.js"; 

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});


export default async function handler(req, res) {
  await connection();   
  return app(req, res); 
}


