ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32619").setExtent([433169.286245, 2073644.937109, 433593.807217, 2073960.616482]);
var wms_layers = [];

var lyr_FOTO46TIF_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "FOTO 46 TIF",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FOTO46TIF_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7751826.134454, 2125804.026171, -7751024.796333, 2126403.253017]
                            })
                        });
var format_POLIGONO_1 = new ol.format.GeoJSON();
var features_POLIGONO_1 = format_POLIGONO_1.readFeatures(json_POLIGONO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32619'});
var jsonSource_POLIGONO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLIGONO_1.addFeatures(features_POLIGONO_1);
var lyr_POLIGONO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLIGONO_1, 
                style: style_POLIGONO_1,
                popuplayertitle: "POLIGONO",
                interactive: true,
                title: '<img src="styles/legend/POLIGONO_1.png" /> POLIGONO'
            });

lyr_FOTO46TIF_0.setVisible(true);lyr_POLIGONO_1.setVisible(true);
var layersList = [lyr_FOTO46TIF_0,lyr_POLIGONO_1];
lyr_POLIGONO_1.set('fieldAliases', {'AREA': 'AREA', 'ID': 'ID', });
lyr_POLIGONO_1.set('fieldImages', {'AREA': '', 'ID': '', });
lyr_POLIGONO_1.set('fieldLabels', {'AREA': 'no label', 'ID': 'inline label - always visible', });
lyr_POLIGONO_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});