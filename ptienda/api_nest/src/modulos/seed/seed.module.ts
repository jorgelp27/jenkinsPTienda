import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ClientesModule } from '../clientes/clientes.module';
import { CategoriaModule } from '../categoria/categoria.module';
import { ProductosModule } from '../productos/productos.module';
import { ProveedorModule } from '../proveedor/proveedor.module';
import { AuthModule } from '../auth/auth.module';
import { CestaModule } from '../cesta/cesta.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ ClientesModule,CategoriaModule,ProveedorModule,ProductosModule, AuthModule,CestaModule ]
})
export class SeedModule {}
