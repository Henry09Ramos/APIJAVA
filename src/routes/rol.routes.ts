//aquí crearemos todas kas t¡rutas que vamos a utilizar
//express es una biblioteca que nos ayuda a menejar las rutas  es una framework

import {  Router } from "express";
import RolController from "../controllers/role.controller" ;

//aquí ocupamos la biblioteca lo cual es express

const router = Router();

const rol = RolController
router.post("/", rol.createRol)
router.get("/",rol.GetRoles)
router.get("/:id",rol.GetIdRoles)
router.delete("/:id",rol.deleteRol)
router.put("/:id",rol.updateRol)


//hacemos exportacion para lo que vamos hacer uso
export default router 

