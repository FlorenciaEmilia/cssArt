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

areaFillerLoop(672, 674, pixels, "horn-border");

areaFillerLoop(674, 698, pixels, "sky");

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

areaFillerLoop(868, 872, pixels, "horn");

areaFillerLoop(872, 874, pixels, "horn-border");

areaFillerLoop(874, 898, pixels, "sky");

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
areaFillerLoop(1000, 1060, pixels, "sky");

areaFiller(pixels, 1060, "horn-border");

areaFillerLoop(1061, 1063, pixels, "horn");

areaFiller(pixels, 1063, "horn-border");

areaFillerLoop(1064, 1068, pixels, "sky");

areaFiller(pixels, 1068, "horn-border");

areaFillerLoop(1069, 1071, pixels, "horn");

areaFillerLoop(1071, 1074, pixels, "horn-border");

areaFillerLoop(1074, 1093, pixels, "sky");

areaFiller(pixels, 1093, "dragon-hair-border");

areaFillerLoop(1094, 1097, pixels, "sky");

areaFillerLoop(1097, 1099, pixels, "dragon-hair-border");

areaFillerLoop(1099, 1102, pixels, "dragon-hair");

areaFiller(pixels, 1102, "dragon-hair-border");

areaFillerLoop(1103, 1118, pixels, "sky");

areaFiller(pixels, 1118, "dragon-hair-border");

areaFillerLoop(1119, 1129, pixels, "sky");

areaFillerLoop(1129, 1133, pixels, "dragon-border");

areaFillerLoop(1133, 1137, pixels, "dragon");

areaFillerLoop(1137, 1145, pixels, "dragon-border");

areaFillerLoop(1145, 1169, pixels, "sky");

areaFillerLoop(1169, 1173, pixels, "dragon-border");

areaFillerLoop(1173, 1176, pixels, "dragon");

areaFillerLoop(1176, 1178, pixels, "dragon-border");

areaFillerLoop(1178, 1200, pixels, "sky");

//Row 7
areaFillerLoop(1200, 1260, pixels, "sky");

areaFiller(pixels, 1260, "horn-border");

areaFillerLoop(1261, 1263, pixels, "horn");

areaFiller(pixels, 1263, "horn-border");

areaFiller(pixels, 1264, "sky");

areaFiller(pixels, 1265, "star");

areaFiller(pixels, 1266, "sky");

areaFiller(pixels, 1267, "horn-border");

areaFillerLoop(1268, 1271, pixels, "horn");

areaFillerLoop(1271, 1273, pixels, "horn-border");

areaFillerLoop(1273, 1288, pixels, "sky");

areaFiller(pixels, 1288, "dragon-hair-border");

areaFillerLoop(1288, 1291, pixels, "sky");

areaFillerLoop(1291, 1294, pixels, "dragon-hair-border");

areaFillerLoop(1294, 1296, pixels, "sky");

areaFiller(pixels, 1296, "dragon-hair-border");

areaFillerLoop(1297, 1302, pixels, "dragon-hair");

areaFiller(pixels, 1302, "dragon-hair-border");

areaFillerLoop(1303, 1312, pixels, "sky");

areaFillerLoop(1312, 1314, pixels, "dragon-hair-border");

areaFillerLoop(1314, 1317, pixels, "sky");

areaFillerLoop(1317, 1319, pixels, "dragon-hair-border");

areaFillerLoop(1319, 1326, pixels, "sky");

areaFillerLoop(1326, 1329, pixels, "dragon-border");

areaFillerLoop(1329, 1334, pixels, "dragon");

areaFillerLoop(1334, 1337, pixels, "dragon-border");

areaFillerLoop(1337, 1373, pixels, "sky");

areaFillerLoop(1373, 1376, pixels, "dragon-border");

areaFillerLoop(1376, 1378, pixels, "dragon");

areaFillerLoop(1378, 1380, pixels, "dragon-border");

areaFillerLoop(1380, 1400, pixels, "sky");

//Row 8
areaFillerLoop(1400, 1460, pixels, "sky");

areaFiller(pixels, 1460, "horn-border");

areaFiller(pixels, 1461, "horn");

areaFillerLoop(1462, 1464, pixels, "horn-border");

areaFillerLoop(1464, 1467, pixels, "sky");

areaFiller(pixels, 1467, "horn-border");

areaFillerLoop(1468, 1471, pixels, "horn");

areaFillerLoop(1471, 1473, pixels, "horn-border");

areaFillerLoop(1473, 1486, pixels, "sky");

areaFillerLoop(1486, 1489, pixels, "dragon-hair-border");

areaFillerLoop(1489, 1490, pixels, "sky");

areaFiller(pixels, 1490, "dragon-hair-border");

areaFillerLoop(1491, 1494, pixels, "dragon-hair");

areaFiller(pixels, 1494, "dragon-hair-border");

areaFiller(pixels, 1495, "sky");

areaFiller(pixels, 1496, "dragon-hair-border");

areaFillerLoop(1497, 1502, pixels, "dragon-hair");

areaFiller(pixels, 1502, "dragon-hair-border");

areaFillerLoop(1503, 1511, pixels, "sky");

areaFiller(pixels, 1511, "dragon-hair-border");

areaFiller(pixels, 1512, "dragon-hair");

areaFiller(pixels, 1513, "dragon-hair-border");

areaFillerLoop(1514, 1516, pixels, "sky");

areaFiller(pixels, 1516, "dragon-hair-border");

areaFiller(pixels, 1517, "dragon-hair");

areaFiller(pixels, 1518, "dragon-hair-border");

areaFillerLoop(1519, 1521, pixels, "sky");

areaFiller(pixels, 1521, "dragon-hair-border");

areaFillerLoop(1522, 1524, pixels, "sky");

areaFillerLoop(1524, 1526, pixels, "dragon-border");

areaFillerLoop(1526, 1529, pixels, "dragon");

areaFillerLoop(1529, 1534, pixels, "dragon-border");

areaFillerLoop(1534, 1555, pixels, "sky");

areaFiller(pixels, 1555, "star");

areaFillerLoop(1555, 1576, pixels, "sky");

areaFillerLoop(1576, 1578, pixels, "dragon-border");

areaFillerLoop(1578, 1580, pixels, "dragon");

areaFillerLoop(1580, 1582, pixels, "dragon-border");

areaFillerLoop(1582, 1600, pixels, "sky");

//Row 9
areaFillerLoop(1600, 1640, pixels, "sky");

areaFiller(pixels, 1640, "star");

areaFillerLoop(1640, 1660, pixels, "sky");

areaFiller(pixels, 1660, "horn-border");

areaFiller(pixels, 1661, "horn");

areaFillerLoop(1662, 1663, pixels, "horn-border");

areaFillerLoop(1662, 1667, pixels, "sky");

areaFiller(pixels, 1667, "horn-border");

areaFillerLoop(1668, 1670, pixels, "horn");

areaFillerLoop(1670, 1673, pixels, "horn-border");

areaFillerLoop(1673, 1685, pixels, "sky");

areaFiller(pixels, 1685, "dragon-hair-border");

areaFillerLoop(1686, 1689, pixels, "dragon-hair");

areaFillerLoop(1689, 1690, pixels, "dragon-hair-border");

areaFillerLoop(1690, 1695, pixels, "dragon-hair");

areaFiller(pixels, 1695, "dragon-hair-border");

areaFillerLoop(1696, 1701, pixels, "dragon-hair");

areaFiller(pixels, 1701, "dragon-hair-border");

areaFillerLoop(1701, 1710, pixels, "sky");

areaFiller(pixels, 1710, "dragon-hair-border");

areaFillerLoop(1711, 1713, pixels, "dragon-hair");

areaFiller(pixels, 1713, "dragon-hair-border");

areaFillerLoop(1714, 1716, pixels, "sky");

areaFiller(pixels, 1716, "dragon-hair-border");

areaFillerLoop(1717, 1719, pixels, "dragon-hair");

areaFillerLoop(1719, 1721, pixels, "dragon-hair-border");

areaFiller(pixels, 1721, "dragon-hair");

areaFiller(pixels, 1722, "dragon-hair-border");

areaFiller(pixels, 1723, "dragon-hair-border");

areaFiller(pixels, 1724, "dragon-border");

areaFillerLoop(1725, 1727, pixels, "dragon");

areaFillerLoop(1727, 1731, pixels, "dragon-border");

areaFillerLoop(1731, 1778, pixels, "sky");

areaFillerLoop(1778, 1780, pixels, "dragon-border");

areaFillerLoop(1780, 1782, pixels, "dragon");

areaFiller(pixels, 1782, "dragon-border");

areaFillerLoop(1782, 1800, pixels, "sky");
