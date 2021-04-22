const tempConvert = require('./script')
describe("temp converter", function(){
    test("32F to 0C", function(){
        expect(tempConvert(32, 'C')).toEqual(0)
    })
    test("68F to 20C", function(){
        expect(tempConvert(68, 'C')).toEqual(20)
    })
    test("100C to 212F", function(){
        expect(tempConvert(100, 'F')).toEqual(212)
    })
    test("-40C to -40F", function(){
        expect(tempConvert(-40, 'F')).toEqual(-40)
    })
})