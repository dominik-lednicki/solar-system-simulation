/**
 * 
 * @param {*} x1 
 * @param {*} y1 
 * @param {*} x2 
 * @param {*} y2 
 */
function line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

/**
 * 
 * @param {*} x1 
 * @param {*} y1 
 * @param {*} recWidth 
 * @param {*} recHeight 
 */
function rect(x1, y1, recWidth, recHeight, bgcolor = "#00000000") {
  ctx.beginPath();
  ctx.rect(x1, y1, recWidth, recHeight);
  let oldColor = ctx.fillStyle;
  ctx.fillStyle = bgcolor;
  ctx.fill(); 
  ctx.stroke();
  ctx.fillStyle = oldColor;
}

/**
 * 
 * @param {*} x0 
 * @param {*} y0 
 * @param {*} r 
 * @param {*} bgcolor 
 */
function circle(x0, y0, r, bgcolor="#00000000") {
  ctx.beginPath();
  ctx.arc(x0, y0, r, 0, 2 * Math.PI);
  let oldColor = ctx.fillStyle;
  ctx.fillStyle = bgcolor;
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = oldColor;
}

function circleBijeli(x0, y0, r, bgcolor = "#00000000") {
    ctx.beginPath();
    ctx.arc(x0, y0, r, 0, 2 * Math.PI);
    
    let oldFill = ctx.fillStyle;
    let oldStroke = ctx.strokeStyle;
    
    ctx.fillStyle = bgcolor;
    ctx.strokeStyle = "white";
    
    ctx.fill();
    ctx.stroke();
    
    ctx.fillStyle = oldFill;
    ctx.strokeStyle = oldStroke;
}

/**
 * 
 * @param {*} x1 
 * @param {*} y1 
 * @param {*} bgcolor 
 */
function setPixel(x1, y1, bgcolor="black") {
  ctx.beginPath(); // mislim da ne treba jer ovdje nema linija
  let oldFillColor = ctx.fillStyle;
  ctx.fillStyle = bgcolor;
  ctx.fillRect(x1, y1, 1, 1);
  ctx.fillStyle = oldFillColor;
  ctx.stroke();
}

/**
 * Documentation
 * @param {*} x1 
 * @param {*} y1 
 * @param {*} recWidth 
 * @param {*} recHeight 
 * @param {*} bgcolor 
 */
function fillrect(x1, y1, recWidth, recHeight, bgcolor = "#00000000") {
  ctx.beginPath(); // mislim da ne treba jer ovdje nema linija
  let oldFillColor = ctx.fillStyle;
  ctx.fillStyle = bgcolor;
  ctx.fillRect(x1, y1, recWidth, recHeight);
  ctx.stroke();
  ctx.fillStyle = oldFillColor;
}



/**
 * 
 */
function clearCanvas()
{
  ctx.clearRect(0, 0, c.width, c.height);
}