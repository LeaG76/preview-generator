setTimeout(() => {
  const srcElement = document.querySelector("body");
  
  html2canvas(srcElement, { useCORS: true, allowTaint: true, foreignObjectRendering: true }).then(function (
    canvas
  ) {
    const a = document.createElement("a");
    a.href = canvas.toDataURL();
    a.download = "screenshot.png";
    a.click();
    document.body.appendChild(a);
    document.body.appendChild(canvas);
  });
}, "3000");