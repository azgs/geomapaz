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
			
			function init() {
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
				addLogo();
//================================================================================================================
//Define the overall layout
			// Create the top toolbar items
			addItemLayerSwitcher('do-base-layers');
			addItemZoomBox('do-zoom-box');
			addItemExtFull('do-full-extent');
			addItemPan('do-pan');
			addItemIdentify('do-identify');
			addItemExtSwitcher('do-previous-extent', 'do-next-extent');
			addItemHelp('do-help');
			
			// Create bottom toolbar items
			addItemOpacitySlider();
			addItemMousePosition();
			
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
						/*Removed temporarily
				            {
				                xtype: 'panel',
				                id: 'lEGEND_UNITS',
				                layout: 'fit',
				                region: 'center'
				            },*/
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
							zoomSlider,
							itemLogo
							//zoomMinus
						],
						tbar: { 
							xtype: 'toolbar',
							items: [itemLayerSwitcher,
							        '-',
							        itemZoomBox,
							        itemExtFull,
							        '-',
							        itemPan,
							        itemIdentify,
							        '->',
							        itemExtPre,
							        itemExtNxt,
							        '-',
							        itemHelp
							        ]
						},
						bbar: { 
							xtype: 'toolbar',
							items: [
							        ' ',
							        'Map Unit Transparency',
							        ' ',
							        itemOpacitySlider,
							        ' ',
							        itemOpacityTips,
							        '->',
							        itemMousePosition]
							}
					}
					]
				});
addLogoFunction();		
			}
//================================================================================================================					})
		
		