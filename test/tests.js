const assert = require("chai").assert;
const convertToCelsius = require('../celsius-to-fahrenheit');
describe('convertToCelsius', () => {
    it('should return a number', () => {
        let result = convertToCelsius(-10)
        console.log(result)
        assert.typeOf(result,'number');
    })
})