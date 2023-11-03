"use client";
import React, { useRef, useState, useCallback } from "react";
import convolution from "../util/convolution";
import funConvolution from "../util/funConvolution";
import { useDropzone } from "react-dropzone";
import Options from "./Options";

const KERNEL_MAP = {
  original: {
    n: 3,
    scale: 1,
    kernel: [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
  },
  "edge-1": {
    n: 3,
    scale: 1,
    kernel: [
      [1, 0, -1],
      [0, 0, 0],
      [-1, 0, 1],
    ],
  },
  "edge-2": {
    n: 3,
    scale: 1,
    kernel: [
      [0, 1, 0],
      [1, -4, 1],
      [0, 1, 0],
    ],
  },
  "edge-3": {
    n: 3,
    scale: 1,
    kernel: [
      [-1, -1, -1],
      [-1, 8, -1],
      [-1, -1, -1],
    ],
  },
  sharpen: {
    n: 3,
    scale: 1,
    kernel: [
      [0, -1, 0],
      [-1, 5, -1],
      [0, -1, 0],
    ],
  },
  "box-blur": {
    n: 3,
    scale: 9,
    kernel: [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ],
  },
  "g-blur-1": {
    n: 3,
    scale: 16,
    kernel: [
      [1, 2, 1],
      [2, 4, 2],
      [1, 2, 1],
    ],
  },
  "g-blur-2": {
    n: 5,
    scale: 256,
    kernel: [
      [1, 4, 6, 4, 1],
      [4, 16, 24, 16, 4],
      [6, 24, 36, 24, 6],
      [4, 16, 24, 16, 4],
      [1, 4, 6, 4, 1],
    ],
  },
  "unsharp-masking": {
    n: 5,
    scale: -256,
    kernel: [
      [1, 4, 6, 4, 1],
      [4, 16, 24, 16, 4],
      [6, 24, -476, 24, 6],
      [4, 16, 24, 16, 4],
      [1, 4, 6, 4, 1],
    ],
  },
  "fry-1": {
    n: 3,
    scale: 1,
    kernel: [
      [1, 0, -1],
      [0, 0, 0],
      [-1, 0, 1],
    ],
  },
  "fry-2": {
    n: 3,
    scale: 1,
    kernel: [
      [0, 1, 0],
      [1, -4, 1],
      [0, 1, 0],
    ],
  },
  "fry-3": {
    n: 3,
    scale: 1,
    kernel: [
      [-1, -1, -1],
      [-1, 8, -1],
      [-1, -1, -1],
    ],
  },
  "fry-4": {
    n: 3,
    scale: 1,
    kernel: [
      [0, -1, 0],
      [-1, 5, -1],
      [0, -1, 0],
    ],
  },
  "grey-1": {
    n: 3,
    scale: 9,
    kernel: [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ],
  },
  mute: {
    n: 3,
    scale: 16,
    kernel: [
      [1, 2, 1],
      [2, 4, 2],
      [1, 2, 1],
    ],
  },
  "grey-2": {
    n: 5,
    scale: 256,
    kernel: [
      [1, 4, 6, 4, 1],
      [4, 16, 24, 16, 4],
      [6, 24, 36, 24, 6],
      [4, 16, 24, 16, 4],
      [1, 4, 6, 4, 1],
    ],
  },
  funky: {
    n: 5,
    scale: -256,
    kernel: [
      [1, 4, 6, 4, 1],
      [4, 16, 24, 16, 4],
      [6, 24, -476, 24, 6],
      [4, 16, 24, 16, 4],
      [1, 4, 6, 4, 1],
    ],
  },
};

const GREY = ["grey-1", "grey-2", "mute", "funky"];

const maxWidth = 1024;
const maxHeight = 620;

export default function Page() {
  const getBlobURL = (str) => {
    const blob = new Blob([str], { type: "image/x-portable-pixmap" }),
      url = URL.createObjectURL(blob);
    return url;
  };

  function getPPMString(canvas, ctx) {
    var string = "";
    string += "P3\n";
    string += `${canvas.width} ${canvas.height}\n`;
    string += "255\n";

    var pxData = [...ctx.getImageData(0, 0, canvas.width, canvas.height).data];
    var arrayString = "";
    for (var i = 0; i < pxData.length; i++) {
      if ((i + 1) % 4 == 0) continue;
      arrayString += pxData[i] + " ";
    }

    let ppm = arrayString.trim().split(/\s+/).map(Number);
    let image = new Array(canvas.width * canvas.height);
    for (let i = 0; i < canvas.width * canvas.height; i++)
      image[i] = {
        r: ppm[3 * i],
        g: ppm[3 * i + 1],
        b: ppm[3 * i + 2],
      };
    setOriginalImg(image);

    return string + arrayString;
  }

  const [originalImg, setOriginalImg] = useState(null);

  const calculateSize = (img) => {
    let w = img.width,
      h = img.height;
    if (w > h) {
      if (w > maxWidth) {
        h = Math.round((h * maxWidth) / w);
        w = maxWidth;
      }
    } else {
      if (h > maxHeight) {
        w = Math.round((w * maxHeight) / h);
        h = maxHeight;
      }
    }
    return [w, h];
  };

  const handleChange = useCallback((e) => {
    if (!e.target.files.length) return;

    setHasImg(false);
    setLoading(true);
    setCanDownload(false);

    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    const img = new Image();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const contentType = "image/png";
    const quality = 0.7;
    img.onload = function () {
      const [newWidth, newHeight] = calculateSize(img, maxWidth, maxHeight);

      canvas.width = newWidth;
      canvas.height = newHeight;
      ctx.drawImage(img, 0, 0, newWidth, newHeight);

      const resultUrl = canvas.toDataURL(contentType, quality),
        result = {
          url: resultUrl,
          contentType: resultUrl.match(/^data\:([^\;]+)\;base64,/im)[1] || "",
          b64: resultUrl.replace(/^data\:([^\;]+)\;base64,/gim, ""),
        };

      canvas.toBlob(
        (blob) => {
          result.size = blob.size;
        },
        contentType,
        quality
      );

      setLoading(false);
      setHasImg(true);
      getBlobURL(getPPMString(canvas, ctx));
    };
    img.src = url;
  }, []);

  const setKernel = () => {
    let kernel = KERNEL_MAP[filterType];
    let n = kernel.n;
    let scale = kernel.scale;
    let kernelArray = structuredClone(kernel.kernel);
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        kernelArray[i][j] /= scale;
      }
    }
    return [kernel.n, kernelArray];
  };

  const [hasImg, setHasImg] = useState(false);

  const handleFilter = () => {
    if (!hasImg || filterType === "select") return;
    const canvas = canvasRef.current;
    let string = "";
    string += "P3\n";
    string += `${canvas.width} ${canvas.height}\n`;
    string += "255\n";

    let filteredImage = structuredClone(originalImg);
    const [n, kernel] = setKernel();
    if (filterType.includes("fry") || GREY.includes(filterType)) {
      funConvolution(filteredImage, canvas.width, canvas.height, kernel, n);
    } else convolution(filteredImage, canvas.width, canvas.height, n, kernel);

    for (let i = 0; i < canvas.width * canvas.height; i++)
      string += `${filteredImage[i].r} ${filteredImage[i].g} ${filteredImage[i].b} `;
    const cctx = canvasRef.current.getContext("2d");
    cctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < filteredImage.length; i++) {
      const pixel = filteredImage[i];
      const { r, g, b } = pixel;

      cctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      cctx.fillRect(i % canvas.width, Math.floor(i / canvas.width), 1, 1);
    }

    const contentType = "image/png";
    const quality = 0.7;

    const resultUrl = canvas.toDataURL(contentType, quality),
      result = {
        url: resultUrl,
        contentType: resultUrl.match(/^data\:([^\;]+)\;base64,/im)[1] || "",
        b64: resultUrl.replace(/^data\:([^\;]+)\;base64,/gim, ""),
      };

    canvas.toBlob(
      (blob) => {
        result.size = blob.size;
      },
      contentType,
      quality
    );

    downloadRef.current.href = resultUrl;
    setCanDownload(true);
  };

  const canvasRef = useRef(null);

  const downloadRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const [filterType, setFilterType] = useState("select");

  const [canDownload, setCanDownload] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const e = { target: { files: acceptedFiles } };
      handleChange(e);
    },
    [handleChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    noClick: true,
    onDrop,
    accept: { "image/*": [] },
  });

  return (
    <main
      {...getRootProps()}
      className="flex min-h-screen flex-col items-center p-10 text-black relative"
    >
      <input {...getInputProps()} />
      {isDragActive && (
        <div className="w-full h-full bg-black/60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
          <h1 className="text-5xl m-auto text-white">Drop images here ...</h1>
        </div>
      )}
      <input
        type="file"
        id="file"
        accept="image/*"
        onChange={(e) => handleChange(e)}
        className="file-input file-input-primary"
      />
      <Options setFilterType={setFilterType} />
      <button
        onClick={handleFilter}
        className={`btn ${
          hasImg && filterType !== "select" ? "btn-primary" : "btn-disabled"
        } mb-2`}
      >
        Filter
      </button>
      {loading && <div>Loading...</div>}
      <canvas
        ref={canvasRef}
        height={maxHeight}
        width={maxWidth}
        className=""
      />
      <a ref={downloadRef} href="#" target="_blank" download="image.jpg">
        <button
          className={`btn ${canDownload ? "btn-primary" : "btn-disabled"} mt-2`}
        >
          Download
        </button>
      </a>
    </main>
  );
}
