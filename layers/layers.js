var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ALMADAPAV1_1 = new ol.format.GeoJSON();
var features_ALMADAPAV1_1 = format_ALMADAPAV1_1.readFeatures(json_ALMADAPAV1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ALMADAPAV1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALMADAPAV1_1.addFeatures(features_ALMADAPAV1_1);
var lyr_ALMADAPAV1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALMADAPAV1_1, 
                style: style_ALMADAPAV1_1,
                popuplayertitle: 'ALMADA - PAV. 1',
                interactive: true,
    title: 'ALMADA - PAV. 1<br />\
    <img src="styles/legend/ALMADAPAV1_1_0.png" /> AUDIN<br />\
    <img src="styles/legend/ALMADAPAV1_1_1.png" /> BIUNILA<br />\
    <img src="styles/legend/ALMADAPAV1_1_2.png" /> COMPARTILHADO<br />\
    <img src="styles/legend/ALMADAPAV1_1_3.png" /> CORREGEDORIA<br />\
    <img src="styles/legend/ALMADAPAV1_1_4.png" /> EaD<br />\
    <img src="styles/legend/ALMADAPAV1_1_5.png" /> EdUNILA<br />\
    <img src="styles/legend/ALMADAPAV1_1_6.png" /> ILAACH<br />\
    <img src="styles/legend/ALMADAPAV1_1_7.png" /> ILACVN<br />\
    <img src="styles/legend/ALMADAPAV1_1_8.png" /> ILACVN/ILATIT<br />\
    <img src="styles/legend/ALMADAPAV1_1_9.png" /> ILAESP<br />\
    <img src="styles/legend/ALMADAPAV1_1_10.png" /> ILATIT<br />\
    <img src="styles/legend/ALMADAPAV1_1_11.png" /> IMEA<br />\
    <img src="styles/legend/ALMADAPAV1_1_12.png" /> OUVIDORIA<br />\
    <img src="styles/legend/ALMADAPAV1_1_13.png" /> PPGIES<br />\
    <img src="styles/legend/ALMADAPAV1_1_14.png" /> PRAE<br />\
    <img src="styles/legend/ALMADAPAV1_1_15.png" /> PROAGI<br />\
    <img src="styles/legend/ALMADAPAV1_1_16.png" /> PROCURADORIA<br />\
    <img src="styles/legend/ALMADAPAV1_1_17.png" /> PROEX<br />\
    <img src="styles/legend/ALMADAPAV1_1_18.png" /> PROGEPE<br />\
    <img src="styles/legend/ALMADAPAV1_1_19.png" /> PROGRAD<br />\
    <img src="styles/legend/ALMADAPAV1_1_20.png" /> PROINT<br />\
    <img src="styles/legend/ALMADAPAV1_1_21.png" /> PROPLAN<br />\
    <img src="styles/legend/ALMADAPAV1_1_22.png" /> PRPPG<br />\
    <img src="styles/legend/ALMADAPAV1_1_23.png" /> PRU<br />\
    <img src="styles/legend/ALMADAPAV1_1_24.png" /> REITORIA<br />\
    <img src="styles/legend/ALMADAPAV1_1_25.png" /> SACT<br />\
    <img src="styles/legend/ALMADAPAV1_1_26.png" /> SECAFE<br />\
    <img src="styles/legend/ALMADAPAV1_1_27.png" /> SECOM<br />\
    <img src="styles/legend/ALMADAPAV1_1_28.png" /> Uso comum<br />\
    <img src="styles/legend/ALMADAPAV1_1_29.png" /> <br />' });
var format_limites_2 = new ol.format.GeoJSON();
var features_limites_2 = format_limites_2.readFeatures(json_limites_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limites_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limites_2.addFeatures(features_limites_2);
var lyr_limites_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limites_2, 
                style: style_limites_2,
                popuplayertitle: 'limites',
                interactive: false,
                title: '<img src="styles/legend/limites_2.png" /> limites'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ALMADAPAV1_1.setVisible(true);lyr_limites_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ALMADAPAV1_1,lyr_limites_2];
lyr_ALMADAPAV1_1.set('fieldAliases', {'FID': 'FID', 'ID': 'ID', 'ALMADA-PAV1_SALA': 'SALA', 'ALMADA-PAV1_DESCRICAO': 'DESCRICAO', 'ALMADA-PAV1_AREA': 'AREA', 'ALMADA-PAV1_CAPACIDADE': 'CAPACIDADE', 'ALMADA-PAV1_USO': 'USO', 'ALMADA-PAV1_SETOR': 'SETOR', 'ALMADA-PAV1_RESPONSAVEL': 'RESPONSAVEL', });
lyr_limites_2.set('fieldAliases', {'ID': 'ID', });
lyr_ALMADAPAV1_1.set('fieldImages', {'FID': 'TextEdit', 'ID': 'TextEdit', 'ALMADA-PAV1_SALA': 'TextEdit', 'ALMADA-PAV1_DESCRICAO': 'TextEdit', 'ALMADA-PAV1_AREA': 'TextEdit', 'ALMADA-PAV1_CAPACIDADE': 'Range', 'ALMADA-PAV1_USO': 'TextEdit', 'ALMADA-PAV1_SETOR': 'TextEdit', 'ALMADA-PAV1_RESPONSAVEL': 'TextEdit', });
lyr_limites_2.set('fieldImages', {'ID': '', });
lyr_ALMADAPAV1_1.set('fieldLabels', {'FID': 'hidden field', 'ID': 'inline label - visible with data', 'ALMADA-PAV1_SALA': 'inline label - visible with data', 'ALMADA-PAV1_DESCRICAO': 'inline label - visible with data', 'ALMADA-PAV1_AREA': 'inline label - visible with data', 'ALMADA-PAV1_CAPACIDADE': 'inline label - visible with data', 'ALMADA-PAV1_USO': 'inline label - visible with data', 'ALMADA-PAV1_SETOR': 'inline label - visible with data', 'ALMADA-PAV1_RESPONSAVEL': 'inline label - visible with data', });
lyr_limites_2.set('fieldLabels', {'ID': 'inline label - visible with data', });
lyr_limites_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});