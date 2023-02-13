import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriaService {
  
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>
  ){
    
  }

  async create(createCategoriaDto: CreateCategoriaDto) {
    try {
      const categoria = this.categoriaRepository.create(createCategoriaDto);
      console.log(categoria);
      await this.categoriaRepository.save(categoria);
      return categoria;

    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda')
    }
  }

  async deleteAllCategoria(){
    const query = this.categoriaRepository.createQueryBuilder('categoria');
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
    return this.categoriaRepository.find({});
  }

  findOne(id: string) {
    return this.categoriaRepository.findOne({
      where: { 
        id
      },
      relations: {
          productos: true,
      }
    });
  }


  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return `This action updates a #${id} categoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoria`;
  }
}
