import React from "react";

const Options = ({ setFilterType }) => {
  return (
    <div className="my-2">
      <select
        className="select select-bordered"
        name="filters"
        onChange={({ target }) => setFilterType(target.value)}
        defaultValue="selected"
      >
        <option disabled value="selected">
          Select a Filter
        </option>
        <option value="original">Original</option>
        <option value="edge-1">Edge Detection 1</option>
        <option value="edge-2">Edge Detection 2</option>
        <option value="edge-3">Edge Detection 3</option>
        <option value="sharpen">Sharpen</option>
        <option value="box-blur">Box Blur</option>
        <option value="g-blur-1">Gaussian Blur 1</option>
        <option value="g-blur-2">Gaussian Blur 2</option>
        <option value="unsharp-masking">Unsharp Masking</option>
        <option value="fry-1">Deepfry 1</option>
        <option value="fry-2">Deepfry 2</option>
        <option value="fry-3">Deepfry 3</option>
        <option value="fry-4">Deepfry 4</option>
        <option value="grey-1">Greyscale 1</option>
        <option value="grey-2">Greyscale 2</option>
        <option value="mute">Color Mute</option>
        <option value="funky">???</option>
      </select>
    </div>
  );
};

export default Options;
