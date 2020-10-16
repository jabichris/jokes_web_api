import { assert } from 'chai';

const app = () => {
    return ('Joks');
}

describe('app', function () {
    it('app should return Joks', () => { 
           assert.equal(app(), 'Joks');
    });
});