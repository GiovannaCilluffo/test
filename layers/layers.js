var wms_layers = [];

var format_m1_areevincolate_def_0 = new ol.format.GeoJSON();
var features_m1_areevincolate_def_0 = format_m1_areevincolate_def_0.readFeatures(json_m1_areevincolate_def_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_m1_areevincolate_def_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_m1_areevincolate_def_0.addFeatures(features_m1_areevincolate_def_0);
var lyr_m1_areevincolate_def_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_m1_areevincolate_def_0, 
                style: style_m1_areevincolate_def_0,
                interactive: true,
                title: '<img src="styles/legend/m1_areevincolate_def_0.png" /> m1_areevincolate_def'
            });
var format_area_vincolata_molluschi_definitivo_m1_1 = new ol.format.GeoJSON();
var features_area_vincolata_molluschi_definitivo_m1_1 = format_area_vincolata_molluschi_definitivo_m1_1.readFeatures(json_area_vincolata_molluschi_definitivo_m1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_area_vincolata_molluschi_definitivo_m1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_area_vincolata_molluschi_definitivo_m1_1.addFeatures(features_area_vincolata_molluschi_definitivo_m1_1);
var lyr_area_vincolata_molluschi_definitivo_m1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_area_vincolata_molluschi_definitivo_m1_1, 
                style: style_area_vincolata_molluschi_definitivo_m1_1,
                interactive: true,
                title: '<img src="styles/legend/area_vincolata_molluschi_definitivo_m1_1.png" /> area_vincolata_molluschi_definitivo_m1'
            });

lyr_m1_areevincolate_def_0.setVisible(true);lyr_area_vincolata_molluschi_definitivo_m1_1.setVisible(true);
var layersList = [lyr_m1_areevincolate_def_0,lyr_area_vincolata_molluschi_definitivo_m1_1];
lyr_m1_areevincolate_def_0.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'PRO_COM': 'PRO_COM', 'PRO_COM_T': 'PRO_COM_T', 'COMUNE': 'COMUNE', 'COMUNE_A': 'COMUNE_A', 'CC_UTS': 'CC_UTS', 'Shape_Area': 'Shape_Area', 'Shape_Leng': 'Shape_Leng', });
lyr_area_vincolata_molluschi_definitivo_m1_1.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'PRO_COM': 'PRO_COM', 'PRO_COM_T': 'PRO_COM_T', 'COMUNE': 'COMUNE', 'COMUNE_A': 'COMUNE_A', 'CC_UTS': 'CC_UTS', 'Shape_Area': 'Shape_Area', 'Shape_Leng': 'Shape_Leng', });
lyr_m1_areevincolate_def_0.set('fieldImages', {'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_CM': 'TextEdit', 'COD_UTS': 'TextEdit', 'PRO_COM': 'TextEdit', 'PRO_COM_T': 'TextEdit', 'COMUNE': 'TextEdit', 'COMUNE_A': 'TextEdit', 'CC_UTS': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_area_vincolata_molluschi_definitivo_m1_1.set('fieldImages', {'COD_RIP': '', 'COD_REG': '', 'COD_PROV': '', 'COD_CM': '', 'COD_UTS': '', 'PRO_COM': '', 'PRO_COM_T': '', 'COMUNE': '', 'COMUNE_A': '', 'CC_UTS': '', 'Shape_Area': '', 'Shape_Leng': '', });
lyr_m1_areevincolate_def_0.set('fieldLabels', {'COD_RIP': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'COD_CM': 'no label', 'COD_UTS': 'no label', 'PRO_COM': 'no label', 'PRO_COM_T': 'no label', 'COMUNE': 'no label', 'COMUNE_A': 'no label', 'CC_UTS': 'no label', 'Shape_Area': 'no label', 'Shape_Leng': 'no label', });
lyr_area_vincolata_molluschi_definitivo_m1_1.set('fieldLabels', {'COD_RIP': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'COD_CM': 'no label', 'COD_UTS': 'no label', 'PRO_COM': 'no label', 'PRO_COM_T': 'no label', 'COMUNE': 'no label', 'COMUNE_A': 'no label', 'CC_UTS': 'no label', 'Shape_Area': 'no label', 'Shape_Leng': 'no label', });
lyr_area_vincolata_molluschi_definitivo_m1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});