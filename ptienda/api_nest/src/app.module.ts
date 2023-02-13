import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modulos/auth/auth.module';
import { CategoriaModule } from './modulos/categoria/categoria.module';
import { CestaModule } from './modulos/cesta/cesta.module';
import { ClientesModule } from './modulos/clientes/clientes.module';
import { ProductosModule } from './modulos/productos/productos.module';
import { ProveedorModule } from './modulos/proveedor/proveedor.module';
import { SeedModule } from './modulos/seed/seed.module';

@Module({
  imports: [ConfigModule.forRoot(),
  TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: !!process.env.DB_SYNC
  }), 
  ClientesModule,ProductosModule,ProveedorModule,CategoriaModule,CestaModule, AuthModule, SeedModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
