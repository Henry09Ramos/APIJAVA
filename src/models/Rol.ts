import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity ()
export class Rol{


    @PrimaryGeneratedColumn()
    id: number


    @Column()
    type: string


    @Column({default:true}) //default es automatico tomarlo como activo
    state: boolean //datos que se utilizan para ver si un dato se encuentra activo o desactivado
}