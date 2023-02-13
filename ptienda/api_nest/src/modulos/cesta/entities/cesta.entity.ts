import { User } from "src/modulos/auth/entities/user.entity";
import { Producto } from "src/modulos/productos/entities/producto.entity";
import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('cestas')
export class Cesta {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column('numeric',{
        unique: true
    })
    cantidad: number;

    @Column('text',{
        unique: true
    })
    fecha: string;

    //Relacion

    @ManyToOne(
        () => Producto,
        (producto) => producto.cesta,
        { cascade: false }
    )
    producto?: Producto

    //Ralacion con profile

    @OneToOne(
        () => User,
        (user) => user.cesta
    )
    @JoinColumn()
    user?: User

    
}


