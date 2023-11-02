export default function convolution(image, width, height, n, kernel) {
  const max = 255;
  const halfN = Math.floor(n / 2);
  let conv = [0.0, 0.0, 0.0];
  let R = 0,
    G = 1,
    B = 2,
    index;
  /* copy of original non-convoluted ppm->image values */
  let mirror = JSON.parse(JSON.stringify(image));
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      conv = [0.0, 0.0, 0.0];

      for (let k = 0; k < n; k++) {
        for (let l = 0; l < n; l++) {
          /* if out of bounds, skip */
          if (
            i - halfN + k >= height ||
            i - halfN + k < 0 ||
            j - halfN + l >= width ||
            j - halfN + l < 0
          )
            continue;
          index = (i - halfN + k) * width + j - halfN + l;
          conv[R] += mirror[index].r * kernel[k][l];
          conv[G] += mirror[index].g * kernel[k][l];
          conv[B] += mirror[index].b * kernel[k][l];
        }
      }

      /* assuming if convR, convG, convB are < 0, values should just be 0
          assuming if convR, convG, convB are > ppm->max, values should be ppm->max
          otherwise, conv values are valid (within [0, ppm->max]) */
      // printf("R: %f, G: %f, B: %f\n", conv[R], conv[G], conv[B]);

      index = i * width + j;
      image[index].r =
        conv[R] < 0 ? 0 : conv[R] > max ? max : Math.floor(conv[R]);
      image[index].g =
        conv[G] < 0 ? 0 : conv[G] > max ? max : Math.floor(conv[G]);
      image[index].b =
        conv[B] < 0 ? 0 : conv[B] > max ? max : Math.floor(conv[B]);
    }
  }
}
