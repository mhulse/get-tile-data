// https://alisdair.mcdiarmid.org/simple-nodejs-tests-with-assert-and-mocha/
// https://nodejs.org/api/all.html#assert_assert
const assert = require('assert');

const parser = require('../index');
const data = require('./data');

describe('tile-parser', function() {

  describe('module.exports', function() {

    data.forEach((test) => {

      it('should return a multi-dimensional object literal', function() {

        assert.deepEqual(
          parser(test.input),
          test.output
        );

      });

    });

  });

});
