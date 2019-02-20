module.exports = (data => {

  let result = {};

  if (data && data.worldSize && data.tileSize) {

    // Not all user-uploaded panos are of the same resolution, so we have to
    // extrapolate the ratio in order to determine the “nearest” zoom:
    result.ratio = (data.worldSize.width / data.tileSize.width);
    result.zoom = Math.ceil(Math.log(result.ratio) / Math.log(2));

    // This ends up being the crop size:
    result.crop = {
      width: data.worldSize.width,
      height: data.worldSize.height,
    };

    result.tile = {
      width: data.tileSize.width,
      height: data.tileSize.height,
    };

    // Rows and cols are synonymous to the x and y equirectangular grid coordinates (zero indexed):
    result.rows = Math.max(1, Math.ceil(data.worldSize.height / data.tileSize.height));
    result.cols = Math.max(1, Math.ceil(data.worldSize.width / data.tileSize.width));

  }

  return result;

});
