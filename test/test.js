// https://alisdair.mcdiarmid.org/simple-nodejs-tests-with-assert-and-mocha/
// https://nodejs.org/api/all.html#assert_assert
const assert = require('assert');

const parser = require('../index');
const data = require('./data.js');

describe('Parse Pano Tiles', function() {

  describe('module.exports', function() {

    data.forEach((test) => {
      it('input matches expected output object', function() {
        assert.deepEqual(parser(test.input.tiles), test.output);
      });
    });

  });

});
