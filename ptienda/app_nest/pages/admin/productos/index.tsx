import { ProductosList } from '@/components/productos/productosList';
import { useProductos } from '@/hooks/useProductos';
import { Mundo } from '../../../components';

import { MainLayouts } from '../../../layouts';

const IndexProductosPage = () => {
  const { productos, isLoading } = useProductos('/productos');
  console.log("l=", isLoading, "c=", productos);

  return (
    <MainLayouts>
      <h2>Sección de Productos</h2>
      <ProductosList productos = {productos} />
            {
                (isLoading)
                    ? <ProductosList productos = {productos} />
                    : <Mundo />
            }
        </MainLayouts>
  )
}

export default IndexProductosPage;