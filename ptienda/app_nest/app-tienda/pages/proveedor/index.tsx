
import { Mundo } from '@/components';
import { ProveedorList } from '@/components/proveedor/proveedorList';
import { useProveedor } from '@/hooks/useproveedor';
import { NextPage } from 'next';
import React from 'react'
import { MainLayouts, PublicLayouts } from '../../layouts'

const ProveedorIndex: NextPage = () => {
  const { proveedor, isLoading } = useProveedor ('/proveedor');
  const respuesta = useProveedor ('/proveedor');
 console.log(respuesta);
  console.log(isLoading, "c=", proveedor);
  return (
    <PublicLayouts>
      {
        (isLoading )
          ? <ProveedorList proveedor={ proveedor }  /> 
          : <Mundo />

      }
        
    </PublicLayouts>
  )
}

export default ProveedorIndex