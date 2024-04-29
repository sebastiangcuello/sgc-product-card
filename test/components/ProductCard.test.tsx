
import React from "react";
import renderer from 'react-test-renderer';
import { ProductCard } from "../../src/components";
import { product1 } from "../data/product";

describe('ProductCard', () => { 
    
    test('should show the component correctly', () => {

        const wrapper = renderer.create(
            <ProductCard 
                product={ product1 }
            >
                {
                    () => (
                        <h1>Product Card</h1>
                    )
                }
            </ProductCard>
        );

        expect( wrapper.toJSON() ).toMatchSnapshot();

    })

    //No funciona...
    // test('should increment the counter', () => { 
        
    //     const wrapper = renderer.create(
    //         <ProductCard 
    //             product={ product1 }
    //             initialValues={{
    //                 count: 0,
    //                 maxCount: 10,
    //               }}
    //         >
    //                 {
    //                     ( args ) => (
    //                         <>
    //                             <h1>Product Card</h1>
    //                             <span>{ args?.count }</span>
    //                             <button onClick={ () => args?.increaseBy(1) }></button>
    //                         </>
    //                     )
    //                 }
    //         </ProductCard>
    //     );

    //     let tree = wrapper.toJSON();
    //     expect( tree ).toMatchSnapshot();

    //     console.log(tree);

    //     act(() => {
    //         (tree as any).children[2].props.onClick();
    //     })

    //     console.log(tree);

    //     tree = wrapper.toJSON();
    //     expect( (tree as any).children[1].children[0] ).toBe('1');
    //  })
 })

 