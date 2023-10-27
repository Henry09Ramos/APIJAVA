//importancion de librerias

import { Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { Rol } from "../models/Rol"
import { stat } from "fs/promises"

//creamos los metodos que utilizara el cliente ejemplo, eliminar, editar, modificar
const roleRepository = AppDataSource.getRepository(Rol)

class RoleController {
    //creamos una instancia
    //metodo estatico

    static guardarRol

    static createRol = async (req: Request, res: Response) => {
        //aqui se define los campos o mejor dicho estructuracion de objetos
        const { type } = req.body
        try {
            const rol = new Rol()
            //OBTIENE  EL DATO QUE SE LE SOLICITA type=type
            rol.type = type
            //le dice que va esperar que la promesa se cumpla funcion async  await hace que espere que se guarde 
            //save es para guardar otros utilizan create 
            await roleRepository.save(rol)
            return res.json({
                ok: true,
                STATUS_CODES: 200 ,
                message: `Rol was create with successfully `

            })
        } catch (error) {
            return res.json({
                ok: false,
                STATUS_CODES: 500,
                    message: `error = ${error.message}`
            })
           


        }
    }

    static GetRoles = async(req:Request, res:Response)=>{
        try {
            const rol = await roleRepository.find({where:{state:true}})
            return rol.length > 0
            ?res.json({ok:true, rol})  : res.json({ok:false, msg:"Not fount"})   
        } catch (error) {
                ok: false
                StatusCode: 500
                    message: `error = ${error.message}`
            
        }
    }

    static GetIdRoles = async(req:Request, res:Response)=>{
        const id = parseInt(req.params.id)
        try {
            const rol = await roleRepository.findOne({where:{id, state:true}})
            return rol
            ?res.json({ok:true, rol}) :res.json({ok:false, msg:"Not fount"})
            
        } catch (error) {
            ok:false
            StatusCode: 500
            message: `error = ${error.message}`
        }
    }

    static deleteRol = async(req:Request, res:Response)=>{
        const id = parseInt(req.params.id)
        try {
            const rol = await roleRepository.findOne({where:{id, state: true}})
            if(!rol){
                throw new Error("not found")
            }
            
            rol.state = false;
            await roleRepository.save(rol)
            return res.json({
                ok:true,
                StatusCode:200,
                msg:"Rol was delete"
            })
            
        } catch (error) {
            return res.json({
                ok:false,
            StatusCode: 500,
            message:`error = ${error.message}`
            })
           /* ok:false
            StatusCode: 500
            message:`error = ${error.message}`*/

          
            
        }
    }

    static updateRol = async (req:Request, resp:Response)=>{
        const id = parseInt(req.params.id)
        const {type} = req.body
        //accedemos a nuestras variables const no se cambia let si puede cambiar
        let role : Rol

        try {
            //hace una obtención de un id
            role = await roleRepository.findOne({where:{id, state:true}})
            //se maneja la excepción sobre el tipo de dato que vamos a obtener
            if(!type){
                throw new Error("Not found")
            }
            //hace la desestructuración del tipo dato.
            role.type = type
            //se guarda en nuestra variable
            await roleRepository.save(role)
            return resp.json({
                ok:true,
                StatusCode:200,
                msg:"Rol was update"
            })

        } catch (error) {
            return resp.json({
                ok:true,
                StatusCode:500,
                message:`error = ${error.message}`
            })
            
        }
    }


}
//hacemos la exportación 
export default RoleController


