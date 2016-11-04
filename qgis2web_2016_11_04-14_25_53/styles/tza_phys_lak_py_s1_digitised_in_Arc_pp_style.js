var size = 0;

var styleCache_tza_phys_lak_py_s1_digitised_in_Arc_pp={}
var style_tza_phys_lak_py_s1_digitised_in_Arc_pp = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(210,236,79,1.0)"})
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_tza_phys_lak_py_s1_digitised_in_Arc_pp[key]){
        var text = new ol.style.Text({
              font: '10px \'None\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(None, None, None, 255)"
              }),
            });
        styleCache_tza_phys_lak_py_s1_digitised_in_Arc_pp[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_tza_phys_lak_py_s1_digitised_in_Arc_pp[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};