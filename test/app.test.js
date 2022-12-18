const ScientificCalculus = require('../src/calculus').ScientificCalculus;
const expect = require('chai').expect;



describe('Testing the calculator Functions', function() {
    it('1. The format of value', function(done) {
        let v = new ScientificCalculus();
        expect(v.isValueRight(0,0)).equal(true);
        expect(v.isValueRight(5,0)).equal(true);
        expect(v.isValueRight(-5,0)).equal(true);
        expect(v.isValueRight('a', 0)).equal(false);
        expect(v.isValueRight('@', 'b')).equal(false);
        done();
    });
    it('2. The Square Value', function(done){
        let v = new ScientificCalculus();
        expect(v.getSquareResult(0,2)).equal(0);
        expect(v.getSquareResult(5,2)).equal(25);
        expect(v.getSquareResult(-5,2)).equal(25);
        done();
    });
    it('3. The Root Value', function(done){
        let v = new ScientificCalculus();
        expect(v.getRootValue(0,0)).equal(0);
        expect(v.getRootValue(25, 0)).equal(5);
        expect(v.getRootValue(-25, 0)).equal(false);
        done();
    });
    it('4. The Pow Value', function(done){
        let v = new ScientificCalculus();
        expect(v.getPowValue(0,3)).equal(0);
        expect(v.getPowValue(3,0)).equal(1);
        expect(v.getPowValue(5,3)).equal(125);
        expect(v.getPowValue(5,-2)).equal(0.04);
        done();
    });
    
    
});

