const RGBTAX = 3;

const createMirror = (width, height, image) => {
  let count,
    track = 0;
  let mirror = new Array(height);

  for (let i = 0; i < height; i++) mirror[i] = new Array(width);

  for (let i = 0; i < height; i++) {
    count = 0;
    for (let j = 0; j < width; j++) {
      mirror[i][j + count++] = image[track].r;
      mirror[i][j + count++] = image[track].g;
      mirror[i][j + count] = image[track].b;
      track++;
    }
  }
  return mirror;
};

export default function funConvolution(image, width, height, kernel, n) {
  let count,
    track = 0;
  let rows = height,
    columns = width * RGBTAX;
  let convoluted;
  let output = new Array(rows);
  let mirror = createMirror(width, height, image);
  const halfN = Math.floor(n / 2);

  for (let i = 0; i < rows; i++) output[i] = new Array(columns);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      convoluted = 0.0;

      for (let k = 0; k < n; k++) {
        for (let l = 0; l < n; l++) {
          if (
            i - halfN + k >= rows ||
            i - halfN + k < 0 ||
            j - halfN + l >= columns ||
            j - halfN + l < 0
          )
            continue;

          convoluted += mirror[i - halfN + k][j - halfN + l] * kernel[k][l];
        }
      }
      output[i][j] = Math.floor(convoluted);
    }
  }
  for (let i = 0; i < height; i++) {
    count = 0;
    for (let j = 0; j < width; j++) {
      image[track].r =
        output[i][j + count++] < 0
          ? 255 - output[i][j + count]
          : output[i][j + count];
      image[track].g =
        output[i][j + count++] < 0
          ? 255 - output[i][j + count]
          : output[i][j + count];
      image[track].b =
        output[i][j + count] < 0
          ? 255 - output[i][j + count]
          : output[i][j + count];
      track++;
    }
  }
}
