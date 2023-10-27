"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dotenv_1 = __importDefault(require("dotenv"));
const rol_routes_1 = __importDefault(require("./rol.routes"));
//le decimos que vamos a obtener o ocupar los archivos que tenemmos en .env
dotenv_1.default.config();
// .env  es donde se encuentra las variables de entorno
const URL = process.env.URL;
const routes = (0, express_1.Router)();
routes.use(`${URL}/rol`, rol_routes_1.default);
exports.default = routes;
//# sourceMappingURL=index.routes.js.map