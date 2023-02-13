import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthService } from '../auth/auth.service';
import { ProductosService } from '../productos/productos.service';
import { CreateCestaDto } from './dto/create-cesta.dto';
import { UpdateCestaDto } from './dto/update-cesta.dto';
import { Cesta } from './entities/cesta.entity';

@Injectable()
export class CestaService {

  constructor(
    @InjectRepository(Cesta)
    private readonly cestaRepository: Repository<Cesta>,
    private readonly productosService: ProductosService,
    private readonly authService: AuthService
  ){
   
  }
  async create(createCestaDto: CreateCestaDto) {
    
    try {
      const { idProducto,idUser,...campos } = createCestaDto;
      // console.log({...campos});
      const producto = this.productosService.findOne(idProducto);
      const user = this.authService.findOne(idUser);
      const cesta = this.cestaRepository.create({...campos});
      cesta.producto = await this.productosService.findOne(idProducto);
      cesta.user = await this.authService.findOne(idUser);
      // //se lanza la petición sl SGBD (postgres). Esperar (x seg)
      await this.cestaRepository.save(cesta)
      return cesta
    } catch (error) {
        return new InternalServerErrorException('Error en BD')
        
    }

 
  }

  async deleteAllCesta(){
    const query = this.cestaRepository.createQueryBuilder('cesta');
    try {
      return await query
        .delete()
        .where({})
        .execute()
  
    }catch(error){
      this.handleDBErrors (error)
    }
  }
  
  private handleDBErrors (error: any): never{
    if (error.code === '23505')
      throw new BadRequestException(error.detail)
   
    throw new InternalServerErrorException('Please Check Server Error ...')
  }

  findAll() {
    return this.cestaRepository.find({
      relations:{
        producto: true,
        user: true
      }
    });
  }


  findOne(id: number) {
    return `This action returns a #${id} cesta`;
  }

  update(id: number, updateCestaDto: UpdateCestaDto) {
    return `This action updates a #${id} cesta`;
  }

  remove(id: number) {
    return `This action removes a #${id} cesta`;
  }
}
