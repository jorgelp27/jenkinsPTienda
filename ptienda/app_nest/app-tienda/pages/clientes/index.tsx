import { Mundo } from '@/components';
import { ClientesList } from '@/components/clientes/clientesList';
import { useClientes } from '@/hooks/useClientes';
import { NextPage } from 'next';
import React from 'react'
import { MainLayouts, PublicLayouts } from '../../layouts'

const indexPage: NextPage = () => {
    const { clientes, isLoading } = useClientes ('/clientes');
    const respuesta = useClientes ('/clientes');
   console.log(respuesta);
    console.log(isLoading, "c=", clientes);
    return (
      <PublicLayouts>
        {
          (isLoading )
            ? <ClientesList clientes={ clientes }  /> 
            : <Mundo />
  
        }
          
      </PublicLayouts>
    )
  }


export default indexPage