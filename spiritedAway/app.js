let loadd = document.querySelector("body");
loadd.addEventListener("onload", console.log("hola"));

let pixels = document.querySelectorAll(".p");
let areaFiller = (fillArea, index, cssClassName) => {
  fillArea[index].className += ` ${cssClassName}`;
};

let areaFillerLoop = (startingIndex, lastIndex, fillArea, cssClassName) => {
  for (let i = startingIndex; i < lastIndex; i++) {
    areaFiller(fillArea, i, cssClassName);
  }
};

//Row 1
areaFillerLoop(0, 62, pixels, "sky");

areaFiller(pixels, 62, "horn-border");

areaFillerLoop(63, 65, pixels, "horn");

areaFiller(pixels, 65, "horn-border");

areaFillerLoop(66, 70, pixels, "sky");

areaFiller(pixels, 70, "horn-border");

areaFillerLoop(71, 74, pixels, "horn");

areaFillerLoop(74, 76, pixels, "horn-border");

areaFillerLoop(76, 101, pixels, "sky");

areaFiller(pixels, 101, "dragon-hair-border");

areaFillerLoop(102, 200, pixels, "sky");

//Row 2
areaFillerLoop(200, 262, pixels, "sky");

areaFiller(pixels, 262, "horn-border");

areaFillerLoop(263, 264, pixels, "horn");

areaFillerLoop(264, 266, pixels, "horn-border");

areaFillerLoop(266, 270, pixels, "sky");

areaFiller(pixels, 270, "horn-border");

areaFillerLoop(271, 273, pixels, "horn");

areaFillerLoop(273, 275, pixels, "horn-border");

areaFillerLoop(275, 300, pixels, "sky");

areaFillerLoop(300, 302, pixels, "dragon-hair-border");

areaFillerLoop(302, 350, pixels, "sky");

areaFillerLoop(350, 364, pixels, "dragon-border");

areaFillerLoop(364, 400, pixels, "sky");

//Row 3
areaFillerLoop(400, 462, pixels, "sky");

areaFiller(pixels, 462, "horn-border");

areaFiller(pixels, 463, "horn");

areaFiller(pixels, 464, "horn-border");

areaFillerLoop(465, 469, pixels, "sky");

areaFiller(pixels, 469, "horn-border");

areaFillerLoop(470, 473, pixels, "horn");

areaFillerLoop(473, 475, pixels, "horn-border");

areaFillerLoop(475, 499, pixels, "sky");

areaFiller(pixels, 499, "dragon-hair-border");

areaFiller(pixels, 500, "dragon-hair");

areaFiller(pixels, 501, "dragon-hair-border");

areaFillerLoop(502, 544, pixels, "sky");

areaFillerLoop(544, 550, pixels, "dragon-border");

areaFillerLoop(550, 564, pixels, "dragon");

areaFillerLoop(564, 570, pixels, "dragon-border");

areaFillerLoop(570, 600, pixels, "sky");

//Row 4
areaFillerLoop(600, 661, pixels, "sky");

areaFiller(pixels, 661, "horn-border");

areaFillerLoop(662, 664, pixels, "horn");

areaFiller(pixels, 664, "horn-border");

areaFillerLoop(665, 669, pixels, "sky");

areaFiller(pixels, 669, "horn-border");

areaFillerLoop(670, 672, pixels, "horn");

areaFiller(pixels, 672, "horn-border");

areaFillerLoop(673, 698, pixels, "sky");

areaFiller(pixels, 698, "dragon-hair-border");

areaFillerLoop(699, 701, pixels, "dragon-hair");

areaFiller(pixels, 701, "dragon-hair-border");

areaFillerLoop(702, 736, pixels, "sky");

areaFillerLoop(736, 744, pixels, "dragon-border");

areaFillerLoop(744, 750, pixels, "dragon");

areaFillerLoop(750, 764, pixels, "dragon-border");

areaFillerLoop(764, 770, pixels, "dragon");

areaFillerLoop(770, 774, pixels, "dragon-border");

areaFillerLoop(774, 800, pixels, "sky");

//Row 5
areaFillerLoop(800, 861, pixels, "sky");

areaFiller(pixels, 861, "horn-border");

areaFiller(pixels, 862, "horn");

areaFillerLoop(863, 865, pixels, "horn-border");

areaFillerLoop(865, 868, pixels, "sky");

areaFiller(pixels, 868, "horn-border");

areaFillerLoop(868, 871, pixels, "horn");

areaFillerLoop(871, 873, pixels, "horn-border");

areaFillerLoop(873, 898, pixels, "sky");

areaFiller(pixels, 898, "dragon-hair-border");

areaFillerLoop(899, 901, pixels, "dragon-hair");

areaFiller(pixels, 901, "dragon-hair-border");

areaFillerLoop(902, 932, pixels, "sky");

areaFillerLoop(932, 937, pixels, "dragon-border");

areaFillerLoop(937, 945, pixels, "dragon");

areaFillerLoop(945, 950, pixels, "dragon-border");

areaFillerLoop(950, 964, pixels, "sky");

areaFillerLoop(964, 969, pixels, "dragon-border");

areaFillerLoop(969, 974, pixels, "dragon");

areaFillerLoop(974, 976, pixels, "dragon-border");

areaFillerLoop(976, 1000, pixels, "sky");

//Row 6
