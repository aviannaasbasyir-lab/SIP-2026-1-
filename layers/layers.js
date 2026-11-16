var wms_layers = [];


        var lyr_Positronnolabels_0 = new ol.layer.Tile({
            'title': 'Positron [no labels]',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });
var format_Akeseibilitas_1 = new ol.format.GeoJSON();
var features_Akeseibilitas_1 = format_Akeseibilitas_1.readFeatures(json_Akeseibilitas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Akeseibilitas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Akeseibilitas_1.addFeatures(features_Akeseibilitas_1);
var lyr_Akeseibilitas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Akeseibilitas_1, 
                style: style_Akeseibilitas_1,
                popuplayertitle: 'Akeseibilitas',
                interactive: true,
    title: 'Akeseibilitas<br />\
    <img src="styles/legend/Akeseibilitas_1_0.png" /> 1,2km (15 menit)<br />\
    <img src="styles/legend/Akeseibilitas_1_1.png" /> 2,4km (30 menit)<br />' });
var format_PTNSurabaya_2 = new ol.format.GeoJSON();
var features_PTNSurabaya_2 = format_PTNSurabaya_2.readFeatures(json_PTNSurabaya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PTNSurabaya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTNSurabaya_2.addFeatures(features_PTNSurabaya_2);
var lyr_PTNSurabaya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTNSurabaya_2, 
                style: style_PTNSurabaya_2,
                popuplayertitle: 'PTN Surabaya',
                interactive: true,
    title: 'PTN Surabaya<br />\
    <img src="styles/legend/PTNSurabaya_2_0.png" /> ITS Manyar<br />\
    <img src="styles/legend/PTNSurabaya_2_1.png" /> ITS Sukolilo<br />\
    <img src="styles/legend/PTNSurabaya_2_2.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/PTNSurabaya_2_3.png" /> UNAIR A<br />\
    <img src="styles/legend/PTNSurabaya_2_4.png" /> UNAIR B<br />\
    <img src="styles/legend/PTNSurabaya_2_5.png" /> UNAIR C<br />\
    <img src="styles/legend/PTNSurabaya_2_6.png" /> UNESA Ketintang<br />\
    <img src="styles/legend/PTNSurabaya_2_7.png" /> UNESA Lidah Wetan<br />\
    <img src="styles/legend/PTNSurabaya_2_8.png" /> UPNV Jatim<br />' });

lyr_Positronnolabels_0.setVisible(true);lyr_Akeseibilitas_1.setVisible(true);lyr_PTNSurabaya_2.setVisible(true);
var layersList = [lyr_Positronnolabels_0,lyr_Akeseibilitas_1,lyr_PTNSurabaya_2];
lyr_Akeseibilitas_1.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_PTNSurabaya_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Rangking QS WUR': 'Rangking QS WUR', 'Tahun Didirikan': 'Tahun Didirikan', 'Fakultas': 'Fakultas', 'Foto Kampus': 'Foto Kampus', });
lyr_Akeseibilitas_1.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_PTNSurabaya_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Rangking QS WUR': 'TextEdit', 'Tahun Didirikan': 'Range', 'Fakultas': 'TextEdit', 'Foto Kampus': 'ExternalResource', });
lyr_Akeseibilitas_1.set('fieldLabels', {'fid': 'hidden field', 'Access': 'inline label - always visible', });
lyr_PTNSurabaya_2.set('fieldLabels', {'fid': 'hidden field', 'Nama': 'inline label - always visible', 'Kampus': 'inline label - always visible', 'Rangking QS WUR': 'inline label - always visible', 'Tahun Didirikan': 'inline label - always visible', 'Fakultas': 'inline label - always visible', 'Foto Kampus': 'inline label - always visible', });
lyr_PTNSurabaya_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});