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
		displayProjection: new OpenLayers.Projection('EPSG:4326'),
		controls: [
		new OpenLayers.Control.Navigation({
			id: 'C_PAN'
		})
		],
		maxExtent: new OpenLayers.Bounds(-20037508.34,-20037508.34,20037508.34,20037508.34),
		maxResolution: 156543.0339,
		units: 'dd',
		eventListeners: {
			"moveend": updateLegend
		}
	});
	
	gStrLayer = new OpenLayers.Layer.Google(
        "Google Streets",
        {
        	type: G_NORMAL_MAP,
        	sphericalMercator: true,
        	projection: map.projection
        }
    );
    
	gSatLayer = new OpenLayers.Layer.Google(
        "Google Satellite",
        {
        	type: G_SATELLITE_MAP, 
        	sphericalMercator: true,
        	projection: map.projection
        }
    );
    
	gHybLayer = new OpenLayers.Layer.Google(
        "Google Hybrid",
        {
        	type: G_HYBRID_MAP, 
        	sphericalMercator: true,
        	projection: map.projection
        }
    );

	gPhyLayer = new OpenLayers.Layer.Google(
        "Google Physical",
        {
        	type: G_PHYSICAL_MAP, 
        	sphericalMercator: true,
        	projection: map.projection
        }
    );

	//Create wms polyline base layer/////////////////////////////////////////////////////////
	wmsPolylineLayer = new OpenLayers.Layer.WMS(
	"Contacts, Faults and other Lines",
	"http://50.19.88.63/ArcGIS/services/GeologicMapOfArizona/MapServer/WMSServer", {
		layers: ['1', '2'],
		format: 'image/gif',
		transparent: 'true'
	},
	{	isBaseLayer: false,
		singleTile: true
	}
	);
	
	//Create wms polygon base layer/////////////////////////////////////////////////////////
	wmsPolygonLayer = new OpenLayers.Layer.WMS(
	"Distribution of Map Units",
	"http://50.19.88.63/ArcGIS/services/GeologicMapOfArizona/MapServer/WMSServer", {
		layers: ['0'],
		format: 'image/gif',
		transparent: 'true'
	},
	{	isBaseLayer: false,
		singleTile: true,
		opacity: 0.75}
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
			Ext.getCmp('LEGEND_PANEL').removeAll();

			var legendContainer = {
				xtype: 'container',
				layout: 'fit',
				html: result.responseText,
				autoScroll: true,
				id: 'LEGEND_CONTAINER'
			};

			Ext.getCmp('LEGEND_PANEL').add(legendContainer);
			Ext.getCmp('LEGEND_PANEL').doLayout();
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

var zoomPlus, zoomMinus;
function addZoomSlider() {
	zoomPlus = {
			xtype: 'button',
			id: 'PLUS',
			iconCls: 'do-plus',
			x: 10,
			y: 22,
			group: 'tool',
			handler: function(button, state){
				map.getControl('C_ZOOM_IN').trigger();
			}	
		};
		
	zoomMinus = {
			xtype: 'button',
			id: 'MINUS',
			iconCls: 'do-minus',
			x: 10,
			y: 248,
			group: 'tool',
			handler: function(button, state){
				map.getControl('C_ZOOM_OUT').trigger();
			}	
		};
	
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


function addConflictSolver(){
	Ext.getCmp('PLUS').el.hover(
		function(){
			if(Ext.getCmp('I_IDENTIFY').pressed){
				ctrlIdentify.deactivate();
			};
			if(Ext.getCmp('I_ZOOM_BOX').pressed){
				ctrlZoomBox.deactivate();
			};
			
		},
		function(){
			if(Ext.getCmp('I_IDENTIFY').pressed){
				ctrlIdentify.activate();
			};
			if(Ext.getCmp('I_ZOOM_BOX').pressed){
				ctrlZoomBox.activate();
			};			
		}
	);
	
	Ext.getCmp('MINUS').el.hover(
		function(){
			if(Ext.getCmp('I_IDENTIFY').pressed){
				ctrlIdentify.deactivate();
			};
			if(Ext.getCmp('I_ZOOM_BOX').pressed){
				ctrlZoomBox.deactivate();
			};
		},
		function(){
			if(Ext.getCmp('I_IDENTIFY').pressed){
				ctrlIdentify.activate();
			};
			if(Ext.getCmp('I_ZOOM_BOX').pressed){
				ctrlZoomBox.activate();
			};				
		}
	);
	
}