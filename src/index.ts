import 'reflect-metadata'
import Server from './server/server.js'
import dotenv from 'dotenv'
import { AppDataSource } from './data-source'


dotenv.config()

const server = new Server()
    server.listen()

    AppDataSource.initialize().then(async(connection) =>{
        if(connection){
            console.log(`==> Conecction with data base succesfully <==`)
        }
    }).catch((error )=> console.log(error + 'Conecction data base failed') + error)