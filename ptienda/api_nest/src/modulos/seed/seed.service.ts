import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { CategoriaService } from '../categoria/categoria.service';
import { CestaService } from '../cesta/cesta.service';
import { ClientesService } from '../clientes/clientes.service';
import { ProductosService } from '../productos/productos.service';
import { ProveedorService } from '../proveedor/proveedor.service';
import dataClientes from './data/clientes.json';
import dataProveedor from './data/proveedor.json';
import dataCategoria from './data/categorias.json';
import dataProductos from './data/produtos.json';
import dataUser from './data/profile.json';
import dataCesta from './data/cesta.json';

@Injectable()
export class SeedService {
  
  constructor (
     private readonly clientesService: ClientesService,
     private readonly proveedorService: ProveedorService,
     private readonly categoriaService: CategoriaService,
     private readonly productosService: ProductosService,
     private readonly athService: AuthService,
     private readonly cestaService: CestaService,

   ){}
   
   async insercionData() {
     await this.insertNewClientes();
     await this.insertNewProveedor();
     await this.insertNewCategoria();
     await this.insertNewProductos();
     await this.insertNewAuth();
     await this.insertNewCesta();


     return 'carga de datos insertada';
     
   }
     
    
  
      private async insertNewClientes() {
        //Eliminar clientes
        await this.clientesService.deleteAllClientes();

        const insertPromises = [];
        dataClientes.forEach( cliente => {
          insertPromises.push(this.clientesService.create(cliente))
        })
        await Promise.all(insertPromises);
      }


      private async insertNewProveedor() {
        //Eliminar proveedor
        await this.proveedorService.deleteAllProveedor();

        const insertPromises = [];
        dataProveedor.forEach( proveedor => {
          insertPromises.push(this.proveedorService.create(proveedor))
        })
        await Promise.all(insertPromises);
      }


      private async insertNewCategoria() {
        //Eliminar categorias
        await this.categoriaService.deleteAllCategoria();

        const insertPromises = [];
        dataCategoria.forEach( categoria => {
          insertPromises.push(this.categoriaService.create(categoria))
        })
        await Promise.all(insertPromises);
      }


      private async insertNewProductos() {
        //Eliminar categorias
        await this.productosService.deleteAllProducto();

        const insertPromises = [];
        dataProductos.forEach( producto => {
          insertPromises.push(this.productosService.create(producto))
        })
        await Promise.all(insertPromises);
      }


      private async insertNewAuth() {
        //Eliminar users
        await this.athService.deleteAllAuth();

        const insertPromises = [];
        dataUser.forEach( user => {
          insertPromises.push(this.athService.create(user))
        })
        await Promise.all(insertPromises);
      }

      private async insertNewCesta() {
        //Eliminar users
        await this.cestaService.deleteAllCesta();

        const insertPromises = [];
        dataCesta.forEach( cesta => {
          insertPromises.push(this.cestaService.create(cesta))
        })
        await Promise.all(insertPromises);
      }

}
