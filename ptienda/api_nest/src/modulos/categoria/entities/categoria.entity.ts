import { Producto } from "src/modulos/productos/entities/producto.entity";
import { BeforeInsert, Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('categoria')
export class Categoria {
    @PrimaryColumn()
    id: string;

    @Column('text',{
        unique: true
    })
    nombre: string;

    //Relacion
    
    @OneToMany(
        () => Producto,
        (Producto) => Producto.categoria,
        { cascade: false }
    )
    
    productos?: Producto[];

    @BeforeInsert()
    checkNombre(){
        this.nombre = this.nombre.toUpperCase()
    }
}
