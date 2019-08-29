const {expect} = require('chai');

describe('require', () => {  
    it('caches the instance', () => {
        let dep1 = require('../server/hot');
        let dep2 = require('../server/hot');
        console.log('--', dep1)
        expect(dep1).to.equal(dep2);
    });

    it('reconstructs the instance', () => {
        let dep1 = require('../server/hot');
        // console.log('--', dep1.created)
        delete require.cache[require.resolve('../server/hot')];
        let dep2 = require('../server/hot');
        console.log('--', dep1, dep2)
        expect(dep1).to.not.equal(dep2);
    });
});