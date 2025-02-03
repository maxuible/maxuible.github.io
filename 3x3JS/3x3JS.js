
function Draw() {
  const file = document.querySelector("input[type=file]").files[0];

  let line_size_px = document.getElementById("linesizepx").value
  if (line_size_px === undefined || line_size_px === "") {
    line_size_px = 1;
  }

  let line_color = document.getElementById("linecolor").value
  if (line_color === undefined || line_color === "") {
    line_color = "black";
  }

  const img = new Image();
  img.src = URL.createObjectURL(file);

  img.onload = function () {
    const canvas = document.getElementById("window");

    const width = img.naturalWidth;
    const height = img.naturalHeight;

    canvas.height = height;
    canvas.width = width;
    let ctx = canvas.getContext("2d");

    ctx.drawImage(img, 0, 0)

    ctx.beginPath();
    ctx.strokeStyle = line_color;
    ctx.lineWidth = line_size_px;
    //vertical
    for (let i = width / 3; i < width; i += width / 3) {
      ctx.moveTo(i, 0);
      ctx.lineTo(i, height);
    }
    //horizontal
    for (let i = height / 3; i < height; i += height / 3) {
      ctx.moveTo(0, i);
      ctx.lineTo(width, i);
    }

    ctx.stroke();
    let display = document.getElementById("img")
    const dataURL = canvas.toDataURL("image/png");
    display.src = dataURL
    canvas.toBlob(function(blob) {
      const url = URL.createObjectURL(blob);
      display.src = url
    }, "image/png");

  
    URL.revokeObjectURL(img.src);
  };
}