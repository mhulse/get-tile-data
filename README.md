# tile-parser

Parse tile data from Google Map’s Street View tiles object.

## Installation

```bash
$ npm i mhulse/tile-parser
```

## Usage

```js
const parser = require('tile-parser');
const tiles = {
  tileSize: {
    width: 512,
    height: 512
  },
  worldSize: {
    width: 7168,
    height: 3584
  }
};
console.log(parser(tiles));
// {
//   ratio: 14,
//   zoom: 4,
//   crop: {
//     width: 7168,
//     height: 3584
//   },
//   tile: {
//     width: 512,
//     height: 512
//   },
//   rows: 7,
//   cols: 14,
//   x: 13,
//   y: 6
// }
```

## About

Heavily inspired by:

- [PanNom.js](https://github.com/spite/PanomNom.js/blob/master/src/PanomNom.js)
- [getTileData.js](https://github.com/mattdesl/google-panorama-equirectangular/blob/master/lib/getTileData.js)

Though, when compared to the above scripts, the goal of this code is to return the highest resolution Google Street View panorama tile data as possible.

## Example

- https://github.com/mhulse/kludgy

## Development

Clone this repo, then:

```bash
$ npm install
```

Run test(s):

```bash
$ npm test
```

Create output from [`data.js`](./test/data.js):

```bash
$ node ./test/check.js
```

Note that the `input` data has been generated by [`mhulse/rand-street-view`](https://github.com/mhulse/rand-street-view).

## License

Copyright © 2019 [Michael Hulse](http://mky.io).

Licensed under the Apache License, Version 2.0 (the “License”); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
