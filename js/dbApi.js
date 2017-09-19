function addImg(type = _data.planeSVG, line = 'line1', animTime = '2.5', id = "plane" + _data.length) {
	let newImg = new AmCharts.MapImage();
	newImg.svgPath = type;
	newImg.id=id;
	newImg.animateAlongLine=true;
	newImg.lineId=line;
	newImg.animationDuration = animTime;
	newImg.chart = map;
	map.dataProvider.images.push(newImg);
	newImg.validate()
}