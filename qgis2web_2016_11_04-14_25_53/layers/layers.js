var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM HOT',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'})]
    })
})
]
});
var format_tza_phys_lak_py_s1_digitised_in_Arc_pp = new ol.format.GeoJSON();
var features_tza_phys_lak_py_s1_digitised_in_Arc_pp = format_tza_phys_lak_py_s1_digitised_in_Arc_pp.readFeatures(geojson_tza_phys_lak_py_s1_digitised_in_Arc_pp, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tza_phys_lak_py_s1_digitised_in_Arc_pp = new ol.source.Vector();
jsonSource_tza_phys_lak_py_s1_digitised_in_Arc_pp.addFeatures(features_tza_phys_lak_py_s1_digitised_in_Arc_pp);var lyr_tza_phys_lak_py_s1_digitised_in_Arc_pp = new ol.layer.Vector({
                source:jsonSource_tza_phys_lak_py_s1_digitised_in_Arc_pp, 
                style: style_tza_phys_lak_py_s1_digitised_in_Arc_pp,
                title: "tza_phys_lak_py_s1_digitised_in_Arc_pp"
            });

lyr_tza_phys_lak_py_s1_digitised_in_Arc_pp.setVisible(true);
var layersList = [baseLayer,lyr_tza_phys_lak_py_s1_digitised_in_Arc_pp];
lyr_tza_phys_lak_py_s1_digitised_in_Arc_pp.set('fieldAliases', {'Name': 'Name', });
lyr_tza_phys_lak_py_s1_digitised_in_Arc_pp.set('fieldImages', {'Name': 'TextEdit', });
lyr_tza_phys_lak_py_s1_digitised_in_Arc_pp.set('fieldLabels', {'Name': 'inline label', });
