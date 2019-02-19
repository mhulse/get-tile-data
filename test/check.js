const parser = require('../index');
const data = require('./data.js');

for (obj of data) {
  console.log(parser(obj.input.tiles));
}
