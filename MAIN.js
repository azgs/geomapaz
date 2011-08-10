var map, wmsPolylineLayer, wmsPolygonLayer, selectLayer;
			var viewPort;
			var mapPanel, lengendPanel;
			var zoomSlider;
			var itemIdentify, itemZoomIn, itemZoomOut, itemZoomBox, itemPan, itemExtPre, itemExtNxt, itemExtFull;
			var itemOpacitySlider, itemMousePosition;
			var itemHeaderRegion;
			var itemLayerSwitcher;
			var itemLineLegend;
			var extentFull = new OpenLayers.Bounds(-13094234.731837, 3830127.2781783, -11834552.505923, 4331554.1836393);
			
			Ext.onReady(function() {
//=====Identify the type of browser===============================================================================
			if(Ext.isIE){
				Ext.util.CSS.createStyleSheet('#C_FONT{font-family: "FGDCGeoAgeIE",sans-serif;}', 'tabCssIE');
				Ext.util.CSS.createStyleSheet('.dmu_item_label{font-family: "FGDCGeoAgeIE",sans-serif !important;}', 'legendCssIE');
			}else{
				Ext.util.CSS.createStyleSheet('#C_FONT{font-family: "FGDCGeoAge",sans-serif;}', 'tabCss');
			}

//================================================================================================================				
				Ext.QuickTips.init(); //Init tool tips
				OpenLayers.ProxyHost = "http://services.usgin.org/ncgmp/proxy?url=";
				
				addMap();
				addZoomSlider();

				addHeader();
				addLineLegend();
//================================================================================================================
//Define the overall layout			
			viewPort = new Ext.Viewport({
					layout : 'border',
					renderTo: 'MAP_DIV',
					items : [
					itemHeaderRegion,
					{
						xtype: 'panel',
						layout: 'border',
						id: 'LEGEND_PANEL',
						region: 'east',
						width: '400',
						margins: '0 10 10 0',
						split: true,
						collapseMode: 'mini',
						items: [
				            {
				                xtype: 'panel',
				                id: 'lEGEND_UNITS',
				                layout: 'fit',
				                region: 'center'
				            },
				            itemLineLegend
				            
						]
					},{
						xtype: 'gx_mappanel',
						margins: '0 0 10 10',
						map: map,
						id: 'MAP_PANEL',
						region: 'center',
						extent: extentFull,
						items: [
							//zoomPlus,
							zoomSlider
							//zoomMinus
						],
						tbar: {
							xtype: 'toolbar'
						},
						bbar: {
							xtype: 'toolbar'
						}
					}
					]
				});
//================================================================================================================
//Add layer switcher item///////////////////////////
addItemLayerSwitcher('do-base-layers');
Ext.getCmp('MAP_PANEL').topToolbar.add(itemLayerSwitcher);

Ext.getCmp('MAP_PANEL').topToolbar.add('-');	
//Add zoom in item//////////////////////////////////
addItemZoomIn('do-zoom-in');
//Ext.getCmp('MAP_PANEL').topToolbar.add(itemZoomIn);	
//Add zoom out item/////////////////////////////////
addItemZoomOut('do-zoom-out');
//Ext.getCmp('MAP_PANEL').topToolbar.add(itemZoomOut);
//Add zoom out item/////////////////////////////////
addItemZoomBox('do-zoom-box');
Ext.getCmp('MAP_PANEL').topToolbar.add(itemZoomBox);
//Add full extent item//////////////////////////////				
addItemExtFull('do-full-extent');
Ext.getCmp('MAP_PANEL').topToolbar.add(itemExtFull);

Ext.getCmp('MAP_PANEL').topToolbar.add('-');
//Add pan item/////////////////////////////////////
addItemPan('do-pan');
Ext.getCmp('MAP_PANEL').topToolbar.add(itemPan);	
//Add identify item////////////////////////////////
addItemIdentify('do-identify');
Ext.getCmp('MAP_PANEL').topToolbar.add(itemIdentify);

Ext.getCmp('MAP_PANEL').topToolbar.add('->');
//Add extent switcher item////////////////////////
addItemExtSwitcher('do-previous-extent', 'do-next-extent');
Ext.getCmp('MAP_PANEL').topToolbar.add(itemExtPre);
Ext.getCmp('MAP_PANEL').topToolbar.add(itemExtNxt);

Ext.getCmp('MAP_PANEL').topToolbar.add('-');
//Add help item////////////////////////
addItemHelp('do-help');
Ext.getCmp('MAP_PANEL').topToolbar.add(itemHelp);

//================================================================================================================
//Add opacity slider
Ext.getCmp('MAP_PANEL').bottomToolbar.add(' ');
Ext.getCmp('MAP_PANEL').bottomToolbar.add('Map Unit Transparency: ');
Ext.getCmp('MAP_PANEL').bottomToolbar.add(' ');
addItemOpacitySlider();
Ext.getCmp('MAP_PANEL').bottomToolbar.add(itemOpacitySlider);
Ext.getCmp('MAP_PANEL').bottomToolbar.add(' ');
Ext.getCmp('MAP_PANEL').bottomToolbar.add(itemOpacityTips);
//================================================================================================================
//Add mouse position
Ext.getCmp('MAP_PANEL').bottomToolbar.add('->');
addItemMousePosition();
Ext.getCmp('MAP_PANEL').bottomToolbar.add(itemMousePosition);

addLogo();		
			})
//================================================================================================================					})
		
		