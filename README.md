# SGC-Product-Card

Este es un paquete de pruebas de despligue en NPM

### Sebastian Gabriel Cuello

## Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'sgc-product-card'
```

```
  <ProductCard 
    product= { product } 
    initialValues={{
        count: 1,
        maxCount: 15
    }}
>
    {
        ( args ) => (
            <>
                <ProductImage />
                <ProductTitle/>
                <ProductButtons />
            </>
        )
    }
</ProductCard> 
```