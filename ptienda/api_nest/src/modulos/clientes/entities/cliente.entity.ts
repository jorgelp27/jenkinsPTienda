import { User } from "src/modulos/auth/entities/user.entity";
import { Producto } from "src/modulos/productos/entities/producto.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('clientes')
export class Cliente {

    @PrimaryColumn()
    dni: string;

    @Column('text',{
        unique: true
    })
    nombre: string;

    @Column('text',{
        nullable: true
    })
    ciudad: string;

    @Column('numeric',{
        nullable: true
    })
    telefono: number;

    //Relaciones

    @OneToOne(
        (type) => User,
        (user) => user.cliente,
        { cascade:false }
    )
    user?: User;


    @OneToMany(
        () => Producto,
        (Producto) => Producto.cliente,
        { cascade: false, eager: false  }

    )
    productos?: Producto[];

}
