var _data = {};
_data.planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";
_data.targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

_data.lines = [{
    "id": "line1",
    "arc": -0.85,
    "alpha": 0.3,
    "latitudes": [48.8567, 43.8163],
    "longitudes": [2.3510, -79.4287]
}, {
    "id": "line2",
    "arc": -0.85,
    "alpha": 0.3,
    "latitudes": [43.8163, 34.3],
    "longitudes": [-79.4287, -118.15]
}, {
    "id": "line3",
    "arc": -0.85,
    "alpha": 0.3,
    "latitudes": [34.3, 23],
    "longitudes": [-118.15, -82]
}];

_data.imgs = [{
    "svgPath": _data.targetSVG,
    "title": "Paris",
    "latitude": 48.8567,
    "longitude": 2.3510
}, {
    "svgPath": _data.targetSVG,
    "title": "Toronto",
    "latitude": 43.8163,
    "longitude": -79.4287
}, {
    "svgPath": _data.targetSVG,
    "title": "Los Angeles",
    "latitude": 34.3,
    "longitude": -118.15
}, {
    "svgPath": _data.targetSVG,
    "title": "Havana",
    "latitude": 23,
    "longitude": -82
}, {
    "svgPath": _data.planeSVG,
    "id": "firstPlane",
    "positionOnLine": 0,
    "color": "#585869",
    "animateAlongLine": true,
    "lineId": "line1",
    "flipDirection": true,
    "loop": true,
    "scale": 0.03,
    "positionScale": 1.8
}];