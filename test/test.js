const chai = require( 'chai' );
const commonProducts = require( '../index' );

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

} );
