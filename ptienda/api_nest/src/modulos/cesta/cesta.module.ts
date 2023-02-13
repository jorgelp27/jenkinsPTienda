import { Module } from '@nestjs/common';
import { CestaService } from './cesta.service';
import { CestaController } from './cesta.controller';
import { Cesta } from './entities/cesta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosModule } from '../productos/productos.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [CestaController],
  providers: [CestaService],
  imports:[
    ProductosModule, AuthModule,
    TypeOrmModule.forFeature([ Cesta ]),
 
],
  exports: [ CestaService ]
})
export class CestaModule {}
