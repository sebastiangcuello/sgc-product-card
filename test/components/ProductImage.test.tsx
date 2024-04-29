
import React from "react";
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from "../../src/components";
import { product2 } from "../data/product";

describe('ProductImage', () => { 
    
    test('should render the image', () => {

        const wrapper = renderer.create(
            <ProductImage img="./coffee-mug.png" className="class-prueba" />
        );

        expect( wrapper.toJSON() ).toMatchSnapshot();
    });

    test('should show the component with image', () => {

        const wrapper = renderer.create(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        );

        expect( wrapper.toJSON() ).toMatchSnapshot();

    })
 })