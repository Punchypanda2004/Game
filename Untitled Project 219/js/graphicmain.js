// Draw Code

// Make Background
function background(color) {
  fill(color);
  rect(0, 0, cnv.width, cnv.height, "fill");
}

// Stoke rainbow
function stroke(color) {
  ctx.strokeStyle = color;
}

// Fill rainbow
function fill(color) {
  ctx.fillStyle = color;
}

// WORDS
function font(fontSetting) {
  ctx.font = fontSetting;
}

// Me rects
function rect(x, y, w, h, mode) {
    if (mode === "fill") {
      ctx.fillRect(x, y, w, h);
    } else if (mode === "stroke") {
      ctx.strokeRect(x, y, w, h);
    }
  }

// Me Circs
function circle(x, y, r, mode) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI, mode);
    if (mode === "fill") {
      ctx.fill();
    } else if (mode === "stroke") {
      ctx.stroke();
    }
  }

// Trigles
function triangle(x1, y1, x2, y2, x3, y3, mode) {
  ctx.beginPath();
}

// Txt 
function text(text, x, y) {
  ctx.fillText(text, x, y);
}
  