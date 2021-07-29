const chai = require( 'chai' );
const commonProducts = require( '../index' );

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

describe( 'Common products', () =>
{
    describe( 'Returns common products from two orders', () =>
    {
        const result = commonProducts( ['mug', 'book', 'canvas'], ['calendar', 'canvas', 'card', 'book'] );
        it('Should contain book and canvas', () => {
            chai.expect(result).to.be.an('array').that.includes.members( ['book', 'canvas'] )
        });

        ['mug', 'card', 'calendar'].forEach( product => {
            it(`Should not contain ${product}`, () => {
                chai.expect(result).to.not.include( product );
            })
        })

    } );

    describe( 'Returns common products from two orders and removes duplicates', () =>
    {
        const result = commonProducts( ['mug', 'book', 'card', 'mug'], ['calendar', 'mug', 'card', 'canvas', 'card'] );
        it('Should contain mug and card', () => {
            chai.expect(result).to.be.an('array').that.includes.members( ['mug', 'card'] )
        });

        ['mug', 'card'].forEach( product => {
            it(`Should not contain more than one ${product}`, () => {
                chai.expect(countOccurrences(result, product)).to.eq( 1 );
            })
        });

        ['book', 'canvas', 'calendar'].forEach( product => {
            it(`Should not contain ${product}`, () => {
                chai.expect(result).to.not.include( product );
            })
        });

    } );

} );
