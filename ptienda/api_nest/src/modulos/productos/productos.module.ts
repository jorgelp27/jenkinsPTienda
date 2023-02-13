import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { Producto } from './entities/producto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from '../categoria/categoria.module';
import { ClientesModule } from '../clientes/clientes.module';
import { ProveedorModule } from '../proveedor/proveedor.module';

@Module({
  controllers: [ProductosController],
  providers: [ProductosService],
  imports: [
    ClientesModule, ProveedorModule, CategoriaModule,
    TypeOrmModule.forFeature([ Producto ])
  ],
  exports: [ ProductosService ]
})
export class ProductosModule {}
