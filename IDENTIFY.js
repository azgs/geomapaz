/**
 * @author Genhan Chen
 */

//================================================================================================================	
//Create identify item
var ctrlIdentify;

function addItemIdentify(icon){
//Create identify control//////////////////////////////////////////////////////////////

	ctrlIdentify = new OpenLayers.Control.GetFeature({
				protocol: OpenLayers.Protocol.WFS({
					url: "http://services.usgin.org/geoserver/wfs",
					featureType: "GeologicUnitView",
					featureNS: "http://geosciml.org/xmlns/geosciml-thematicview/1.0.0",
					featurePrefix: "gsmltv",
					version: "1.1.0",
					geometryName: "shape"
				}),
				selectClick: function(evt){
					
					if(popup){
						popup.close(); //Close the previous identify popup
					}
					
					Ext.get(map.div).setStyle('cursor','wait'); //Set wait cursor
					
					var ptClick = map.getLonLatFromPixel(evt.xy); //Get mercator lonlat info for the click pixel
					var ptWGS84Click = OpenLayers.Layer.SphericalMercator.inverseMercator(ptClick.lon, ptClick.lat); //Convert projection of the click point from web mercator to WGS84
					
					//Set filter for protocol.read(), filtering the polygon intersecting with the click point/////////
					var filter = new OpenLayers.Filter.Spatial({
						type: OpenLayers.Filter.Spatial.INTERSECTS, 
						value: new OpenLayers.Geometry.Point(ptWGS84Click.lon, ptWGS84Click.lat)
					});
					//////////////////////////////////////////////////////////////////////////////////////////////////
					//Read GetFeature() response
					this.protocol.read({
						filter: filter, 
						callback: function(res){
								
								if(res.features.length == 1){
															
									var feature = res.features[0];
									selectLayer.removeAllFeatures(); //Clear previous selection
									
									//All features on the map should use spherical mercator projection================================================
									//Covert each point in polygon feature from WGS84 to spherical mercator===========================================
									for(iRing = 0; iRing < feature.geometry.components.length; iRing ++){
										for(iPt = 0; iPt < feature.geometry.components[iRing].components.length; iPt ++){
											var origPt = feature.geometry.components[iRing].components[iPt];
											var mercPt = OpenLayers.Layer.SphericalMercator.forwardMercator(origPt.x, origPt.y);
											
											//Replace each point in the polygon feature with new converted point
											feature.geometry.components[iRing].components[iPt] = new OpenLayers.Geometry.Point(mercPt.lon, mercPt.lat);
										}
									}									
									//================================================================================================================
									selectLayer.addFeatures([feature]);	
									Ext.get(map.div).setStyle('cursor','help'); //Restore default cursor	
									addPopup(feature);
																
								}else{
									Ext.Msg.show({
										title:'Error Report',
										minWidth: 200,
										msg: 'Cannot identify the selection!',
										buttons: Ext.Msg.OK,
										icon: Ext.MessageBox.ERROR
									});
									Ext.get(map.div).setStyle('cursor','help'); //Restore default cursor	
								}
							
							}
					});
					//////////////////////////////////////////////////////////////////////////////////////////////////
					
				}
			}),	
	map.addControl(ctrlIdentify);
///////////////////////////////////////////////////////////////////////////////////////	
	itemIdentify = new Ext.Action({
			id: 'I_IDENTIFY',
			iconCls: icon,
			tooltip: 'Identify',
			group: 'tool',
			toggleGroup: 'tool',
			allowDepress: true,
			width: 30,
			height: 30,
			
			toggleHandler: function(button, state){
				if(state){
					Ext.get(map.div).setStyle('cursor','help');
					
					ctrlIdentify.activate();
					
				}else{
					Ext.get(map.div).setStyle('cursor','default');
					
					ctrlIdentify.deactivate();
					
					if(popup){
						popup.close();
					}
					selectLayer.removeAllFeatures();
					ctrlIdentify.unselectAll();
				}
			}
			
		});


}


//================================================================================================================	
//Create identify popup
var popup;
function addPopup(feature) {
	popup = new GeoExt.Popup({
			id: 'I_POPUP',
			title: 'Attribute Table',
			location: feature,
			layout: 'fit',
			height: 300,
			map: map,
			unpinnable: true,
			maximizable: true,
			collapsible: true,
			autoScroll: true,
    		autoWidth: true,
    		resizable: true
		});
//Create a new attributes table object//////////////////////////
	var objAttr = new objAttributeTab(feature.attributes);
	popup.add(objAttr.attrPanel);
////////////////////////////////////////////////////////////////	
	popup.show();
//Event fired when popup is closed/////////////////////////////
	popup.on({
		close: function(){
			selectLayer.removeAllFeatures();
			ctrlIdentify.unselectAll();
		}
	});
}

//================================================================================================================	
//Class template for attributes table

function objAttributeTab(attributes){
	var rAttr = [];
/*
	for(key in attributes){
		rAttr.push([key, attributes[key]]);
	}
*/

	rAttr.push(['Map Unit', attributes.name]);
	rAttr.push(['Unit Description', attributes.description]);
	rAttr.push(['Geologic History', attributes.geologicHistory]);
	rAttr.push(['Age', attributes.representativeAge_uri]);
	rAttr.push(['Lower-bounding Age', attributes.representativeLowerAge_uri]);
	rAttr.push(['Upper-bounding Age', attributes.representativeUpperAge_uri]);
	
	var store = new Ext.data.ArrayStore({
			id: 'I_ATTR_STORE',        
			fields: [               
				'name',                
				'value'           
			]  
	});
	 
	store.loadData(rAttr);
	 
	this.attrPanel = new Ext.grid.GridPanel({
			id: 'I_ATTR_TAB',
			store: store,
			columns: [{
				id: 'COL_NAME',
				header: "Name",
				width: 200,
				sortable: false,
				dataIndex: 'name'
			},{
				id: 'COL_VALUE',
				header: "Value",
				sortable: false,
				width: 400,
				dataIndex: 'value'
			}
			],
			title:'',
			listeners: {
				viewready: function(grid){
					//A very stupid way to change the font for the 'value' of 'name'
					Ext.getCmp('I_ATTR_TAB').el.dom.children[0].children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0].children[1].id = 'C_FONT';
				}
			}  
	});
}


