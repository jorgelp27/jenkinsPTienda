import { ProductosList } from '@/components/productos/productosList';
import { useProductos } from '@/hooks/useProductos';
import React from 'react'
import { MainLayouts, PublicLayouts } from '../../layouts'
import { NextPage } from 'next';
import { Mundo } from '@/components';



const ProductosIndex: NextPage = () => {
  const { productos, isLoading } = useProductos ('/productos');
  const respuesta = useProductos ('/productos');
 console.log(respuesta);
  console.log(isLoading, "c=", productos);
  return (
    <PublicLayouts>
      {
        (isLoading )
          ? <ProductosList productos={ productos }  /> 
          : <Mundo />

      }
        
    </PublicLayouts>
  )
}

export default ProductosIndex
