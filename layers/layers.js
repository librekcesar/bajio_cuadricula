var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_cuadricula_union_complet_1 = new ol.format.GeoJSON();
var features_cuadricula_union_complet_1 = format_cuadricula_union_complet_1.readFeatures(json_cuadricula_union_complet_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cuadricula_union_complet_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cuadricula_union_complet_1.addFeatures(features_cuadricula_union_complet_1);
var lyr_cuadricula_union_complet_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cuadricula_union_complet_1, 
                style: style_cuadricula_union_complet_1,
                interactive: true,
    title: 'cuadricula_union_complet<br />\
    <img src="styles/legend/cuadricula_union_complet_1_0.png" /> 0 - 0<br />\
    <img src="styles/legend/cuadricula_union_complet_1_1.png" /> 0 - 1<br />\
    <img src="styles/legend/cuadricula_union_complet_1_2.png" /> 1 - 6<br />\
    <img src="styles/legend/cuadricula_union_complet_1_3.png" /> 6 - 10<br />\
    <img src="styles/legend/cuadricula_union_complet_1_4.png" /> 10 - 15<br />\
    <img src="styles/legend/cuadricula_union_complet_1_5.png" /> 15 - 21<br />\
    <img src="styles/legend/cuadricula_union_complet_1_6.png" /> 21 - 28<br />\
    <img src="styles/legend/cuadricula_union_complet_1_7.png" /> 28 - 36<br />\
    <img src="styles/legend/cuadricula_union_complet_1_8.png" /> 36 - 47<br />\
    <img src="styles/legend/cuadricula_union_complet_1_9.png" /> 47 - 59<br />\
    <img src="styles/legend/cuadricula_union_complet_1_10.png" /> 59 - 83<br />\
    <img src="styles/legend/cuadricula_union_complet_1_11.png" /> 83 - 199<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_cuadricula_union_complet_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_cuadricula_union_complet_1];
lyr_cuadricula_union_complet_1.set('fieldAliases', {'id': 'id', 'NUMPOINTS': 'NUMPOINTS', 'estacion': 'estacion', });
lyr_cuadricula_union_complet_1.set('fieldImages', {'id': 'Range', 'NUMPOINTS': 'TextEdit', 'estacion': 'TextEdit', });
lyr_cuadricula_union_complet_1.set('fieldLabels', {'id': 'header label', 'NUMPOINTS': 'header label', 'estacion': 'header label', });
lyr_cuadricula_union_complet_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});