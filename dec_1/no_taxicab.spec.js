var solution = require('./no_taxicab.js');

describe('clean()', function() {

    it('should remove whitespace', function(){
        var clean = solution.clean;
        expect(clean(' foo ')).toEqual('foo');
    });
});