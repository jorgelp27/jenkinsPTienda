import { Mundo } from '@/components';
import { CestasList } from '@/components/cestas/cestasList';
import { useCesta } from '@/hooks/useCestas';
import { NextPage } from 'next';
import React from 'react'
import { MainLayouts, PublicLayouts } from '../../layouts'


const CestaPage: NextPage = () => {
  const { cestas, isLoading } = useCesta ('/cesta');
  const respuesta = useCesta ('/cesta');
 console.log(respuesta);
  console.log(isLoading, "c=", cestas);
  return (
    <PublicLayouts>
      {
        (isLoading )
          ? <CestasList cestas={ cestas }  /> 
          : <Mundo />

      }
        
    </PublicLayouts>
  )
}


export default CestaPage