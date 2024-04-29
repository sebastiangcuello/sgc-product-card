import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductCardHOCProps } from "../interfaces/interfaces";

import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

//Con Object.assign podemos asignarle propiedades a un objeto
//En este caso le asignamos las propiedades Image, Title y Buttons
export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Image: ProductImage,
    Title: ProductTitle,
    Buttons: ProductButtons,
});

export default ProductCard;