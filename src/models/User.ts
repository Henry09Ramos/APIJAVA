import{Entity,PrimaryGeneratedColumn, Column, ManyToOne, RelationId} from 'typeorm'
import { Rol } from './Rol'

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number


    //hace referencia a nuestra tabla de la cual estaremos obteniendo sus datos o  informacion que contenga manteneinedo una relacion 
    @ManyToOne(() => Rol)
    rol:Rol


    //Hace una obtencion de datos que funciona para almacenar y mandar a llamar el id de nuestra tabla relacionada ROL
    @RelationId((user: User) => user.rol)
    rolId:number

    @Column()
    name:string
    
   @Column()
   email:string

   @Column()
   password: string
    
   @Column({default:true})
   state:boolean

}