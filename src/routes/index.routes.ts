import {Router} from "express";
import dotenv from "dotenv";
import routerRol from "./rol.routes";

//le decimos que vamos a obtener o ocupar los archivos que tenemmos en .env
dotenv.config()

// .env  es donde se encuentra las variables de entorno
const URL = process.env.URL  

const routes = Router()

routes.use(`${URL}/rol`,routerRol)

export default routes 




