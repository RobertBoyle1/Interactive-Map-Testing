var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSMStandard_0',
            'type': 'base',
            'opacity': 0.497000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>'})],
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_LiverpoolLSOAs_1 = new ol.format.GeoJSON();
var features_LiverpoolLSOAs_1 = format_LiverpoolLSOAs_1.readFeatures(json_LiverpoolLSOAs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LiverpoolLSOAs_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LiverpoolLSOAs_1.addFeatures(features_LiverpoolLSOAs_1);var lyr_LiverpoolLSOAs_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LiverpoolLSOAs_1, 
                style: style_LiverpoolLSOAs_1,
    title: 'Liverpool LSOAs<br />\
    <img src="styles/legend/LiverpoolLSOAs_1_0.png" /> 1st Decile (Most Deprived)<br />\
    <img src="styles/legend/LiverpoolLSOAs_1_1.png" /> 2nd Decile<br />\
    <img src="styles/legend/LiverpoolLSOAs_1_2.png" /> 3rd Decile<br />\
    <img src="styles/legend/LiverpoolLSOAs_1_3.png" /> 4th Decile<br />\
    <img src="styles/legend/LiverpoolLSOAs_1_4.png" /> 5th Decile<br />\
    <img src="styles/legend/LiverpoolLSOAs_1_5.png" /> 6th Decile<br />\
    <img src="styles/legend/LiverpoolLSOAs_1_6.png" /> 7th Decile<br />\
    <img src="styles/legend/LiverpoolLSOAs_1_7.png" /> 8th Decile<br />\
    <img src="styles/legend/LiverpoolLSOAs_1_8.png" /> 9th Decile<br />\
    <img src="styles/legend/LiverpoolLSOAs_1_9.png" /> 10th Decile (Least Deprived)<br />'
        });

lyr_LiverpoolLSOAs_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_LiverpoolLSOAs_1];
lyr_LiverpoolLSOAs_1.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'lsoa11cd': 'lsoa11cd', 'lsoa11nm': 'LSOA Name', 'lsoa11nmw': 'lsoa11nmw', 'st_areasha': 'st_areasha', 'st_lengths': 'st_lengths', 'LA': 'Local Authority', 'Overall Decile': 'Overall', 'Income Decile': 'Income', 'Employment Decile': 'Employment', 'Education, Skills and Training Decile': 'Education Skills and Training', 'Health Deprivation and Disability Decile': 'Health Deprivation and Disability', 'Crime Decile': 'Crime', 'Barriers to Housing and Services Decile': 'Barriers to Housing and Services', 'Living Environment Decile': 'Living Environment', });
lyr_LiverpoolLSOAs_1.set('fieldImages', {'fid': 'Hidden', 'objectid': 'Hidden', 'lsoa11cd': 'Hidden', 'lsoa11nm': 'TextEdit', 'lsoa11nmw': 'Hidden', 'st_areasha': 'Hidden', 'st_lengths': 'Hidden', 'LA': 'TextEdit', 'Overall Decile': 'TextEdit', 'Income Decile': 'TextEdit', 'Employment Decile': 'TextEdit', 'Education, Skills and Training Decile': 'TextEdit', 'Health Deprivation and Disability Decile': 'TextEdit', 'Crime Decile': 'TextEdit', 'Barriers to Housing and Services Decile': 'TextEdit', 'Living Environment Decile': 'TextEdit', });
lyr_LiverpoolLSOAs_1.set('fieldLabels', {'lsoa11nm': 'inline label', 'LA': 'inline label', 'Overall Decile': 'inline label', 'Income Decile': 'inline label', 'Employment Decile': 'inline label', 'Education, Skills and Training Decile': 'inline label', 'Health Deprivation and Disability Decile': 'inline label', 'Crime Decile': 'inline label', 'Barriers to Housing and Services Decile': 'inline label', 'Living Environment Decile': 'inline label', });
lyr_LiverpoolLSOAs_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});