import { Categoria } from "src/modulos/categoria/entities/categoria.entity";
import { Cesta } from "src/modulos/cesta/entities/cesta.entity";
import { Cliente } from "src/modulos/clientes/entities/cliente.entity";
import { Proveedor } from "src/modulos/proveedor/entities/proveedor.entity";
import { BeforeInsert, Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('productos')
export class Producto {
    @PrimaryColumn()
    id: string;

    @Column('text',{
        unique: true
    })
    modelo: string;

    @Column('numeric',{
        nullable: true
    })
    precio: number;

    @Column('text',{
        nullable: true
    })
    fabricante: string;

    @Column('text',{
        nullable: true
    })
    descripcion: string;

    @Column('text',{
        nullable: true
    })
    imagen: string;


//Relacion

    @ManyToOne(
        () => Categoria,
        (categoria) => categoria.productos,
        { cascade: false }
    )
    categoria?: Categoria

    @ManyToOne(
        () => Cliente,
        (cliente) => cliente.productos,
        { cascade: false }
    )
    cliente?: Cliente

    @ManyToOne(
        () => Proveedor,
        (proveedor) => proveedor.productos,
        {cascade: true}
    )
    proveedor?: Proveedor

    //Relacion con cesta
    
    @OneToMany(
        () => Cesta,
        (Cesta) => Cesta.producto,
        { cascade: false, eager: false  }

        // { cascade: false, eager: true  }
    )
    cesta?: Cesta[];

    //Triggers

    @BeforeInsert()
    checkModelo(){
        this.modelo = this.modelo.toUpperCase()
    }


    @BeforeInsert()
    precioIva(){
        this.precio = this.precio*1.21;
    }


}
