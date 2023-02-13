import { Mundo } from '@/components';
import { CategoriasList } from '@/components/categorias/categoriasList';
import { useCategorias } from '@/hooks/useCategorias';

import { NextPage } from 'next';
import React from 'react'
import { MainLayouts, PublicLayouts } from '../../layouts'

const categoriaPage: NextPage = () => {
  const { categorias, isLoading } = useCategorias ('/categoria');
  const respuesta = useCategorias ('/categoria');
 console.log(respuesta);
  console.log(isLoading, "c=", categorias);
  return (
    <PublicLayouts>
      {
        (isLoading )
          ? <CategoriasList categorias={ categorias }  /> 
          : <Mundo />

      }
        
    </PublicLayouts>
  )
}


export default categoriaPage