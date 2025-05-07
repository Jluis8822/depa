var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_DistriCajamarca_1 = new ol.format.GeoJSON();
var features_DistriCajamarca_1 = format_DistriCajamarca_1.readFeatures(json_DistriCajamarca_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistriCajamarca_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistriCajamarca_1.addFeatures(features_DistriCajamarca_1);
var lyr_DistriCajamarca_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistriCajamarca_1, 
                style: style_DistriCajamarca_1,
                popuplayertitle: 'DistriCajamarca',
                interactive: true,
                title: '<img src="styles/legend/DistriCajamarca_1.png" /> DistriCajamarca'
            });
var format_Geologa_Cutervo_2 = new ol.format.GeoJSON();
var features_Geologa_Cutervo_2 = format_Geologa_Cutervo_2.readFeatures(json_Geologa_Cutervo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geologa_Cutervo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geologa_Cutervo_2.addFeatures(features_Geologa_Cutervo_2);
var lyr_Geologa_Cutervo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geologa_Cutervo_2, 
                style: style_Geologa_Cutervo_2,
                popuplayertitle: 'Geología_Cutervo',
                interactive: true,
    title: 'Geología_Cutervo<br />\
    <img src="styles/legend/Geologa_Cutervo_2_0.png" /> AU<br />\
    <img src="styles/legend/Geologa_Cutervo_2_1.png" /> Ji-o<br />\
    <img src="styles/legend/Geologa_Cutervo_2_2.png" /> Ki-ch/pa<br />\
    <img src="styles/legend/Geologa_Cutervo_2_3.png" /> Ki-chu<br />\
    <img src="styles/legend/Geologa_Cutervo_2_4.png" /> Ki-g<br />\
    <img src="styles/legend/Geologa_Cutervo_2_5.png" /> Ki-in<br />\
    <img src="styles/legend/Geologa_Cutervo_2_6.png" /> Ki-pa<br />\
    <img src="styles/legend/Geologa_Cutervo_2_7.png" /> Ki-tgd<br />\
    <img src="styles/legend/Geologa_Cutervo_2_8.png" /> Ks-ca<br />\
    <img src="styles/legend/Geologa_Cutervo_2_9.png" /> Ks-ce<br />\
    <img src="styles/legend/Geologa_Cutervo_2_10.png" /> Ks-di<br />\
    <img src="styles/legend/Geologa_Cutervo_2_11.png" /> Ks-pu<br />\
    <img src="styles/legend/Geologa_Cutervo_2_12.png" /> Ks-qm<br />\
    <img src="styles/legend/Geologa_Cutervo_2_13.png" /> Ks-to<br />\
    <img src="styles/legend/Geologa_Cutervo_2_14.png" /> Ks-yu<br />\
    <img src="styles/legend/Geologa_Cutervo_2_15.png" /> Lag<br />\
    <img src="styles/legend/Geologa_Cutervo_2_16.png" /> Nm-vp<br />\
    <img src="styles/legend/Geologa_Cutervo_2_17.png" /> Pe-da<br />\
    <img src="styles/legend/Geologa_Cutervo_2_18.png" /> Pe-vll<br />\
    <img src="styles/legend/Geologa_Cutervo_2_19.png" /> Qh-al<br />\
    <img src="styles/legend/Geologa_Cutervo_2_20.png" /> Qp-fa<br />\
    <img src="styles/legend/Geologa_Cutervo_2_21.png" /> Qp-ta<br />\
    <img src="styles/legend/Geologa_Cutervo_2_22.png" /> TrJi-pu<br />' });

lyr_EsriTopographic_0.setVisible(true);lyr_DistriCajamarca_1.setVisible(true);lyr_Geologa_Cutervo_2.setVisible(true);
var layersList = [lyr_EsriTopographic_0,lyr_DistriCajamarca_1,lyr_Geologa_Cutervo_2];
lyr_DistriCajamarca_1.set('fieldAliases', {'nombdep': 'nombdep', 'idprov': 'idprov', 'ccpp': 'ccpp', 'ccdd': 'ccdd', 'nombprov': 'nombprov', 'fuente': 'fuente', 'tematica': 'tematica', 'id_geograf': 'id_geograf', });
lyr_Geologa_Cutervo_2.set('fieldAliases', {'Cod_geolog': 'Cod_geolog', 'Des_geolog': 'Des_geolog', 'Era': 'Era', 'Periodo': 'Periodo', 'Epoca': 'Epoca', 'Tipo_roca': 'Tipo_roca', 'Litologia': 'Litologia', 'Unid_hidro': 'Unid_hidro', 'Area_ha': 'Area_ha', });
lyr_DistriCajamarca_1.set('fieldImages', {'nombdep': 'TextEdit', 'idprov': 'Hidden', 'ccpp': 'Hidden', 'ccdd': 'Hidden', 'nombprov': 'Hidden', 'fuente': 'Hidden', 'tematica': 'Hidden', 'id_geograf': 'Hidden', });
lyr_Geologa_Cutervo_2.set('fieldImages', {'Cod_geolog': 'TextEdit', 'Des_geolog': 'Hidden', 'Era': 'Hidden', 'Periodo': 'Hidden', 'Epoca': 'Hidden', 'Tipo_roca': 'Hidden', 'Litologia': 'TextEdit', 'Unid_hidro': 'Hidden', 'Area_ha': 'TextEdit', });
lyr_DistriCajamarca_1.set('fieldLabels', {'nombdep': 'inline label - always visible', });
lyr_Geologa_Cutervo_2.set('fieldLabels', {'Cod_geolog': 'inline label - always visible', 'Litologia': 'inline label - always visible', 'Area_ha': 'inline label - always visible', });
lyr_Geologa_Cutervo_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});