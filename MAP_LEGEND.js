/**
 * @author Genhan Chen
 * Glabal variables: map, wmsPolylineLayer, wmsPolygonLayer
 */

//================================================================================================================
//Create a new map

var gSatLayer, gStrLayer, gHybLayer, gPhyLayer;

function addMap() {	
	
	map = new OpenLayers.Map({
		projection: new OpenLayers.Projection('EPSG:3857'),
		controls: [
			new OpenLayers.Control.Navigation({
				id: 'C_PAN'
			}),
			new OpenLayers.Control.ZoomPanel({
				id: 'C_ZOOM_PANEL'
			})
		],
		maxExtent: new OpenLayers.Bounds(-20037508.34,-20037508.34,20037508.34,20037508.34),
		maxResolution: 156543.0339,
		units: 'm',
		eventListeners: {
			"moveend": updateLegend
		}
	});
	
	v3Layers = new googleLayers3();
	gStrLayer = v3Layers.streets;
	gSatLayer = v3Layers.satellite;
	gHybLayer = v3Layers.hybrid;
	gPhyLayer = v3Layers.physical;

	//Create wms polyline base layer/////////////////////////////////////////////////////////
	wmsPolylineLayer = new OpenLayers.Layer.WMS(
	        "Geologic Map",
	        "http://50.19.88.63/ArcGIS/services/GeologicMapOfArizona/MapServer/WMSServer",
	        {
	        	layers: ["1", "2"],
	        	transparent: true,
	        	format: "png24"
	        },
	        { 
	        	isBaseLayer: false
	        }
	    );
	
	//Create wms polygon base layer/////////////////////////////////////////////////////////
	wmsPolygonLayer = new OpenLayers.Layer.WMS(
	        "Geologic Map",
	        "http://50.19.88.63/ArcGIS/services/GeologicMapOfArizona/MapServer/WMSServer",
	        {
	        	layers: ["0"],
	        	transparent: true,
	        	format: "png24"
	        },
	        { 
	        	isBaseLayer: false,
	        	singleTile: true
	        }
	    );

	//Create a vector layer to highlight selected feature//////////////////////////
	selectLayer = new OpenLayers.Layer.Vector(
	"Selection", {
		styleMap: new OpenLayers.Style(OpenLayers.Feature.Vector.style["select"])
	}
	);

	//map.addLayers([gStrLayer, gSatLayer, gHybLayer, gPhyLayer]);
	map.addLayers([wmsPolygonLayer, wmsPolylineLayer, selectLayer, gStrLayer]);
	

}

//================================================================================================================
//Define legend panel content
function updateLegend() {
	var mapExt = map.getExtent();
	
	//Transfer current extent from Web Mercator to WGS84////////////////////////////////////////////////
	var rt = OpenLayers.Layer.SphericalMercator.inverseMercator(mapExt.right, mapExt.top); //for right top point
	var lb = OpenLayers.Layer.SphericalMercator.inverseMercator(mapExt.left, mapExt.bottom); //for left bottom point
	var mapBBox = rt.lon + ',' + lb.lon + ',' + rt.lat + ',' + lb.lat;

	//Send Ajax request to get legend html
	Ext.Ajax.disableCaching = false;
	Ext.Ajax.request({
		url: 'http://services.usgin.org/ncgmp/getlegend',
		params: {
			format: 'html',
			bbox: mapBBox
		},
		method: 'GET',
		success: function(result, request) {
			Ext.getCmp('lEGEND_UNITS').removeAll();

			var legendContainer = {
				xtype: 'container',
				layout: 'fit',
				html: result.responseText,
				autoScroll: true,
				id: 'LEGEND_UNITS_CONTAINER'
			};

			Ext.getCmp('lEGEND_UNITS').add(legendContainer);
			Ext.getCmp('lEGEND_UNITS').doLayout();
		},
		failure: function() {
			/*
			Ext.Msg.show({
				title:'Error Report',
				minWidth: 200,
				msg: 'Cannot update legend!',
				buttons: Ext.Msg.OK,
				icon: Ext.MessageBox.ERROR
			});
			*/
		}
	});
}

//================================================================================================================
//Create zoom slider
//Global variable: zoomPlus, zoomMinus

function addZoomSlider() {
	zoomSlider = new GeoExt.ZoomSlider({
		id: 'I_ZOOM_SLIDER',
		aggressive: true,
		vertical: true,
		height: 200,
		x: 9,
		y: 45,
		plugins: new GeoExt.ZoomSliderTip({
			template: "<div> Zoom Level: {zoom} </div>"
		})
	});

}

