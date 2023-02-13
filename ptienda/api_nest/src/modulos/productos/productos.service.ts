import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriaService } from '../categoria/categoria.service';
import { ClientesService } from '../clientes/clientes.service';
import { ProveedorService } from '../proveedor/proveedor.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductosService {

  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
    private readonly clienteService: ClientesService,
    private readonly categoriaService: CategoriaService,
    private readonly proveedorService: ProveedorService
  ){
   
  }
  async create(createProductoDto: CreateProductoDto) {
    
    try {
      const { idCliente,idCategoria,idProveedor,...campos } = createProductoDto;
      // console.log({...campos});
      const cliente = this.clienteService.findOne(idCliente);
      const categoria = this.categoriaService.findOne(idCategoria);
      const proveedor = this.proveedorService.findOne(idProveedor);
      const producto = this.productoRepository.create({...campos});
      producto.cliente = await this.clienteService.findOne(idCliente);
      producto.categoria = await this.categoriaService.findOne(idCategoria);
      producto.proveedor = await this.proveedorService.findOne(idProveedor);
      // //se lanza la petición sl SGBD (postgres). Esperar (x seg)
      await this.productoRepository.save(producto)
      return producto
    } catch (error) {
        return new InternalServerErrorException('Error en BD')
        
    }

 
  }

  async deleteAllProducto(){
    const query = this.productoRepository.createQueryBuilder('producto');
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
    return this.productoRepository.find({
      relations:{
        cliente: true,
        categoria: true,
        proveedor: true
      }
    });
  }

  // colocar el relatins, clientre true y luego en la interfaz de procutos se añaden las relaciones, es decir se añadden las interfaces
  // En la tabla pintamos los cambios, poducto.cliente.nombre

  findOne(id: string) {
    return this.productoRepository.findOne({
      where: { 
        id 
      },
      relations: {
          cesta: true,
      }
    });
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
