"use strict";
//aquí crearemos todas kas t¡rutas que vamos a utilizar
//express es una biblioteca que nos ayuda a menejar las rutas  es una framework
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const role_controller_1 = __importDefault(require("../controllers/role.controller"));
//aquí ocupamos la biblioteca lo cual es express
const router = (0, express_1.Router)();
const rol = role_controller_1.default;
router.post("/", rol.createRol);
router.get("/", rol.GetRoles);
router.get("/:id", rol.GetIdRoles);
router.delete("/:id", rol.deleteRol);
router.put("/:id", rol.updateRol);
//hacemos exportacion para lo que vamos hacer uso
exports.default = router;
//# sourceMappingURL=rol.routes.js.map