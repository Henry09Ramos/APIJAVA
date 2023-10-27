"use strict";
//importancion de librerias
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const Rol_1 = require("../models/Rol");
//creamos los metodos que utilizara el cliente ejemplo, eliminar, editar, modificar
const roleRepository = data_source_1.AppDataSource.getRepository(Rol_1.Rol);
class RoleController {
}
_a = RoleController;
RoleController.createRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //aqui se define los campos o mejor dicho estructuracion de objetos
    const { type } = req.body;
    try {
        const rol = new Rol_1.Rol();
        //OBTIENE  EL DATO QUE SE LE SOLICITA type=type
        rol.type = type;
        //le dice que va esperar que la promesa se cumpla funcion async  await hace que espere que se guarde 
        //save es para guardar otros utilizan create 
        yield roleRepository.save(rol);
        return res.json({
            ok: true,
            STATUS_CODES: 200,
            message: `Rol was create with successfully `
        });
    }
    catch (error) {
        return res.json({
            ok: false,
            STATUS_CODES: 500,
            message: `error = ${error.message}`
        });
    }
});
RoleController.GetRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rol = yield roleRepository.find({ where: { state: true } });
        return rol.length > 0
            ? res.json({ ok: true, rol }) : res.json({ ok: false, msg: "Not fount" });
    }
    catch (error) {
        ok: false;
        StatusCode: 500;
        message: `error = ${error.message}`;
    }
});
RoleController.GetIdRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const rol = yield roleRepository.findOne({ where: { id, state: true } });
        return rol
            ? res.json({ ok: true, rol }) : res.json({ ok: false, msg: "Not fount" });
    }
    catch (error) {
        ok: false;
        StatusCode: 500;
        message: `error = ${error.message}`;
    }
});
RoleController.deleteRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const rol = yield roleRepository.findOne({ where: { id, state: true } });
        if (!rol) {
            throw new Error("not found");
        }
        rol.state = false;
        yield roleRepository.save(rol);
        return res.json({
            ok: true,
            StatusCode: 200,
            msg: "Rol was delete"
        });
    }
    catch (error) {
        return res.json({
            ok: false,
            StatusCode: 500,
            message: `error = ${error.message}`
        });
        /* ok:false
         StatusCode: 500
         message:`error = ${error.message}`*/
    }
});
RoleController.updateRol = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { type } = req.body;
    //accedemos a nuestras variables const no se cambia let si puede cambiar
    let role;
    try {
        //hace una obtención de un id
        role = yield roleRepository.findOne({ where: { id, state: true } });
        //se maneja la excepción sobre el tipo de dato que vamos a obtener
        if (!type) {
            throw new Error("Not found");
        }
        //hace la desestructuración del tipo dato.
        role.type = type;
        //se guarda en nuestra variable
        yield roleRepository.save(role);
        return resp.json({
            ok: true,
            StatusCode: 200,
            msg: "Rol was update"
        });
    }
    catch (error) {
        return resp.json({
            ok: true,
            StatusCode: 500,
            message: `error = ${error.message}`
        });
    }
});
//hacemos la exportación 
exports.default = RoleController;
//# sourceMappingURL=role.controller.js.map