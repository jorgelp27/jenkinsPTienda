import { Producto } from "src/modulos/productos/entities/producto.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('proveedor')
export class Proveedor {
    @PrimaryColumn()
    id: string;

    @Column('text',{
        unique: true
    })
    dni: string;

    @Column('text',{
        unique: true
    })
    nombre: string;

    @Column('text',{
        nullable: true
    })
    email: string;

    @Column('numeric',{
        nullable: true
    })
    telefono: number;



    //Relacion con productos

    @OneToMany(
        () => Producto,
        (Producto) => Producto.proveedor,
        { cascade: false }
    )

    productos?: Producto[];

}
