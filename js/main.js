    var map = AmCharts.makeChart("chartdiv", {
        "type": "map",
        "theme": "light",


        "dataProvider": {
            "map": "worldLow",
            "zoomLevel": 3.5,
            "zoomLongitude": -55,
            "zoomLatitude": 42,

            "lines": _data.lines,
            "images": _data.imgs
        },

        "areasSettings": {
            "unlistedAreasColor": "#8dd9ef"
        },

        "imagesSettings": {
            "color": "#585869",
            "rollOverColor": "#585869",
            "selectedColor": "#585869",
            "pauseDuration": 0.1,
            "animationDuration": 2.5
        },

        "linesSettings": {
            "color": "#585869",
            "alpha": 0.4
        }
    });