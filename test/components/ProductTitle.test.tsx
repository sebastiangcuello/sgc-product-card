
import React from "react";
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from "../../src/components";
import { product1 } from "../data/product";

describe('ProductTitle', () => { 
    
    test('should render the title', () => {

        const wrapper = renderer.create(
            <ProductTitle title="Test Title" className="class-prueba" />
        );

        expect( wrapper.toJSON() ).toMatchSnapshot();
    });

    test('should show the component with product name', () => {

        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        );

        expect( wrapper.toJSON() ).toMatchSnapshot();

    })
 })