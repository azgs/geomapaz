/**
 * @author Genhan Chen
 * Global variables: itemOpacitySlider, itemMousePosition
 */

//================================================================================================================	
//Create opacity slider
var itemOpacityTips;

function addItemOpacitySlider(){
	
itemOpacityTips = new Ext.Toolbar.TextItem({
	text: '0%',
	id: 'I_OPACITY_SLIDER_TIPS'
});

itemOpacitySlider = new GeoExt.LayerOpacitySlider({
		id: 'I_OPACITY_SLIDER',
		layer: wmsPolygonLayer,
		aggressive: true,
		width: 300,
		isFormField: true,
		inverse: true,
		fieldLabel: "opacity",
		
		listeners: {
			drag: sliderTips
		}
	});
	
}

function sliderTips(){
		itemOpacityTips.setText(itemOpacitySlider.getValue() + '%');				
}

//================================================================================================================	
//Show mouse position on status toolbar
var coorWGS;
function addItemMousePosition(){

itemMousePosition = new Ext.Toolbar.TextItem({
	text: 'Mouse Position',
	id: 'I_MOUSE_POS'
});

map.events.register('mousemove', map, function(evt){
	var position = this.events.getMousePosition(evt);
	var coorMec = map.getLonLatFromViewPortPx(position);
	//Convert mouse position into decimal value
	coorWGS = OpenLayers.Layer.SphericalMercator.inverseMercator(coorMec.lon, coorMec.lat);
	//Truncate lon and lat to 5 decimal places
	var lon = OpenLayers.Number.format(coorWGS.lon, 5);
	var lat = OpenLayers.Number.format(coorWGS.lat, 5);
	
	Ext.getCmp('I_MOUSE_POS').setText(
		' lon = '  + lon + ' , ' + ' lat = ' + lat
	);
});

}