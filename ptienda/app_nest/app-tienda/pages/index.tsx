import { Button } from "@mui/material";
import { NextPage } from "next"
import { MainLayouts, PublicLayouts } from "../layouts";
import { useClientes } from '../hooks/useClientes';
import { ClientesList } from '../components/clientes/clientesList';
import { Mundo } from '../components/Mundo';
 
//NextPage --> indica que es un proyecto Next y no Reac
const indexPage: NextPage = () => {
  const { clientes, isLoading } = useClientes ('/clientes');
  const respuesta = useClientes ('/clientes');
 console.log(respuesta);
  console.log(isLoading, "c=", clientes);
  return (
    <PublicLayouts>
        <h2>Api-tienda</h2>
        <Button
            sx={{ backgroundColor:'red'}} variant='contained'
        > Hola Mundo</Button>

    </PublicLayouts>
  )
}

export default indexPage