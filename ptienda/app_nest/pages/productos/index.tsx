import { ProductosList } from '@/components/productos/productosList';
import { useProductos } from '@/hooks/useProductos';
// import React from 'react'
import { MainLayouts, PublicLayouts } from '../../layouts'
// import { NextPage } from 'next';
import { Mundo } from '@/components';
import { ProductosCardList } from '@/components/productos/ProductoCardList';



const ProductosIndex = () => {
  const { productos, isLoading } = useProductos ('/productos');
  const respuesta = useProductos ('/productos');
 console.log(respuesta);
  console.log(isLoading, "c=", productos);
  return (
    <PublicLayouts>
      <h2>Sección de Libros</h2>
      <ProductosCardList productos = {productos} />
      
    </PublicLayouts>
  )
}

export default ProductosIndex
