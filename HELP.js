/**
 * @author gchen
 * Global variables: itemHelp
 */
var itemHelp;
var winHelpUsingApp, winHelpAboutMap, winHelpAboutServices, winHelpAboutApplication, winHelpFont;

function addItemHelp(icon){
	addHelpUsingApp();
	addHelpFont();
	addHelpAboutMap();
	addHelpAboutServices();
	addHelpAboutApplication();
				
	itemHelp = new Ext.Action({
			id: 'I_HELP',
			iconCls: icon,
			tooltip: 'Help',
			width: 40,
			height: 30,
			
			menu:  {
			xtype: 'menu',
			width: 180,
			id: 'M_HELP_ALL',
			items: [{
				id: 'M_HELP_UA',
				text: 'Using the Application',
				handler: function(button, evt) {
					winHelpUsingApp.show();
				}
			},
			'-',
			{
				id: 'M_HELP_AM',
				text: 'About the Map',
				handler: function(button, evt) {
					winHelpAboutMap.show();
				}
			},{
				id: 'M_HELP_AS',
				text: 'About the Services',
				handler: function(button, evt) {
					winHelpAboutServices.show();
				}
			},{
				id: 'M_HELP_AA',
				text: 'About the Application',
				handler: function(button, evt) {
					winHelpAboutApplication.show();
				}
			}
			]
		}		
				
		});
}

function addHelpUsingApp(){
	winHelpUsingApp = new Ext.Window({
		title: 'Using the Application',
		id: 'P_HELP_UA',
		layout: 'fit',
		closable: true,
		closeAction: 'hide',
		maximizable: true,
		width: 600,
		height: 500,
		items: [{
			xtype: 'panel',
			autoScroll: true,
			html: '<p>The following document will explain the various functions performed by this application.</p><h3>Table of Contents</h3><ul><li><a href="#panels">Panels</a></li><li><a href="#top">The Top toolbar</a></li><ul><li><a href="#basemap">The <span style="font-weight:bold;">Basemap</span> menu</a></li><li><a href="#identify">The <span style="font-weight:bold;">Identify</span> tool</a></li></ul><li><a href="#bottom">The Bottom toolbar</a></li><ul><li><a href="#transparency">The <span style="font-weight:bold;">Transparency</span> slider</a></li></ul></ul><p>Upon arriving at the Geologic Map of Arizona web application, your web browser should resemble Figure 1:</p><p  style="text-align:center"><img alt="The application as it should appear in your web browser" src="HELP/app-browser.png" style="float: inherit; width:60%;" /></p><p  style="text-align:center"><span style="font-style:italic;">Figure 1: The application as it should appear in your web browser</span></p><p><a id="panels">The most immediate feature of the application is the <span style="font-weight:bold;">Map</span> panel (Figure 2).  To the immediate right of this panel are the two <span style="font-weight:bold;">Legend</span> panels (Figure 2).  The <span style="font-style:italic;">top</span> <span style="font-weight:bold;">Legend</span> panel provides map unit information for the colored polygons in the <span style="font-weight:bold;">Map</span> panel. The top <span style="font-weight:bold;">Legend</span> panel dynamically filters itself depending on what is in the <span style="font-weight:bold;">Map</span> panel: it only displays information for geologic units that are present within the <span style="font-weight:bold;">Map</span> panel. The <span style="font-style:italic;">bottom</span> <span style="font-weight:bold;">Legend</span> panel provides information about lines separating geologic units.</a></p><p  style="text-align:center"><img alt="The Map and Legend panels" src="HELP/app-browser-all-labels.png" style="float: inherit; width:60%;" /></p><p  style="text-align:center"><span style="font-style:italic;">Figure 2: The <span style="font-weight:bold;">Map</span> and <span style="font-weight:bold;">Legend</span> panels</span></p><p><a id="top">Across the top of the <span style="font-weight:bold;">Map</span> panel are a series of tools (Figure 3).  Clockwise from the bottom-left, these are the <span style="font-weight:bold;">Zoom</span> slider; the <span style="font-weight:bold;">Change Basemap Layer</span> menu; the <span style="font-weight:bold;">Zoom Box</span> tool; the <span style="font-weight:bold;">Full Extent</span> tool; the <span style="font-weight:bold;">Identify</span> tool; the <span style="font-weight:bold;">Previous Extent</span> tool; the <span style="font-weight:bold;">Next Extent</span> tool; and the <span style="font-weight:bold;">Help</span> button.</a></p><p  style="text-align:center"><img alt="The tools atop the Map panel" src="HELP/app-top-all.png" style="float: inherit; width:60%;" /></p><p  style="text-align:center"><span style="font-style:italic;">Figure 3: The tools atop the <span style="font-weight:bold;">Map</span> panel</span></p><p>The <span style="font-weight:bold;">Zoom</span> slider (Figure 4) is relatively simple: just click and drag the slide bar up or down, and the map will zoom in or out.  Alternatively, you can click on the <span style="font-weight:bold;">Plus</span> sign at the top of the <span style="font-weight:bold;">Zoom</span> slider to zoom in; you may click on the <span style="font-weight:bold;">Minus</span> sign at the bottom of the <span style="font-weight:bold;">Zoom</span> slider to zoom out.</p><p  style="text-align:center"><img alt="The Zoom slider" src="HELP/app-top-slider.png" style="float: inherit; width:60%;" /></p><p  style="text-align:center"><span style="font-style:italic;">Figure 4: The <span style="font-weight:bold;">Zoom</span> slider</span></p><p><a id="basemap">The <span style="font-weight:bold;">Change Basemap Layer</span> menu (Figure 5) allows you to select the Google basemap that appears behind the geologic map polygons.  Clicking the <span style="font-weight:bold;">Change Basemap</span> reveals a pulldown menu containing four options:</p><ul><li><span style="font-weight:bold;">Google Streets</span>: The basemap will appear as a simple streetmap provided by Google.</li><li><span style="font-weight:bold;">Google Satellite</span>: Satellite imagery provided by Google.  The basemap will appear as a photograph of the terrain.</li><li><span style="font-weight:bold;">Google Hybrid</span>: Satellite imagery provided by Google with streetmap information laid over it.  This basemap is a combination of Google Streets and Google Satellite.</li><li><span style="font-weight:bold;">Google Physical</span>: A shaded relief map provided by Google, overlaid with streetmaps and topographic information.</li></ul><p>Click to select whichever option you prefer.</a></p><p  style="text-align:center"><img alt="The Change Basemap Layer menu" src="HELP/app-top-basemap.png" style="float: inherit; width:60%;" /></p><p  style="text-align:center"><span style="font-style:italic;">Figure 5: The <span style="font-weight:bold;">Change Basemap Layer</span> menu</span></p><p>The <span style="font-weight:bold;">Zoom Box</span> tool (Figure 6) is used to zoom in on the map.  To do so, click the <span style="font-weight:bold;">Zoom</span> tool to select it, then click a location in the <span style="font-weight:bold;">Map</span> panel.  This will cause the <span style="font-weight:bold;">Map</span> panel to zoom in by a fixed interval centered on the location at which you clicked.  Alternatively, click and drag within the <span style="font-weight:bold;">Map</span> panel to specify a region to which you would like to zoom.</p><p  style="text-align:center"><img alt="The Zoom Box tool" src="HELP/app-top-zoom.png" style="float: inherit; width:60%;" /></p><p  style="text-align:center"><span style="font-style:italic;">Figure 6: The <span style="font-weight:bold;">Zoom Box</span> tool</span></p><p>The <span style="font-weight:bold;">Full Extent</span> tool (Figure 7) returns the <span style="font-weight:bold;">Map</span> panel to its default zoom distance, depicting the entire state of Arizona.</p><p  style="text-align:center"><img alt="The Full Extent tool" src="HELP/app-top-extent.png" style="float: inherit; width:60%;" /></p><p  style="text-align:center"><span style="font-style:italic;">Figure 7: The <span style="font-weight:bold;">Full Extent</span> tool</span></p><p>The <span style="font-weight:bold;">Pan</span> tool (Figure 8) treats the map in the <span style="font-weight:bold;">Map</span> panel like a slide under a microscope: just as someone looking through a microscope can move the slide around to see different parts of it, so too can you change what is displayed in the <span style="font-weight:bold;">Map</span> panel by effectively clicking and dragging the contents of the <span style="font-weight:bold;">Map</span> panel.  To use the <span style="font-weight:bold;">Pan</span> tool, select it by clicking it, then click and drag in the <span style="font-weight:bold;">Map</span> panel to change its contents.</p><p  style="text-align:center"><img alt="The Pan tool" src="HELP/app-top-pan.png" style="float: inherit; width:60%;" /></p><p  style="text-align:center"><span style="font-style:italic;">Figure 8: The <span style="font-weight:bold;">Pan</span> tool</span></p><p><a id="identify">The <span style="font-weight:bold;">Identify</span> tool (Figure 9) is used to query a given polygon for geologic information.  Click the <span style="font-weight:bold;">Identify</span> tool to select it, then click any polygon in the <span style="font-weight:bold;">Map</span> panel.  Doing so will bring up an <span style="font-weight:bold;">Attribute Table</span> window (Figure 10) in which the geologic information of a given polygon are displayed.  The <span style="font-weight:bold;">Attribute Table</span> window may be <span style="font-weight:bold;">collapsed</span>, <span style="font-weight:bold;">expanded</span> or <span style="font-weight:bold;">unpinned</span>; after the <span style="font-weight:bold;">Attribute Table</span> window has been <span style="font-weight:bold;">unpinned</span>, it may be dragged around the screen.</a></p><p  style="text-align:center"><img alt="The Identify tool" src="HELP/app-top-identify.png" style="float: inherit; width:60%;" /></p><p  style="text-align:center"><span style="font-style:italic;">Figure 9: The <span style="font-weight:bold;">Identify</span> tool</span></p><p  style="text-align:center"><img alt="The Attribute window" src="HELP/app-attributes.png" style="float: inherit; width:60%;" /></p><p  style="text-align:center"><span style="font-style:italic;">Figure 10: The <span style="font-weight:bold;">Attribute Table</span> window</span></p><p>The <span style="font-weight:bold;">Previous Extent</span> and <span style="font-weight:bold;">Next Extent</span> (Figure 11) tools allow you to return to a previous view of the map in the <span style="font-weight:bold;">Map</span> panel, in much the same way that your Internet browser has a <span style="font-weight:bold;">Back</span> and <span style="font-weight:bold;">Forward</span> button.  Each time you zoom in or out in the <span style="font-weight:bold;">Map</span> panel, the <span style="font-style:italic;">extent</span> of the <span style="font-weight:bold;">Map</span> panel is recorded by your browser and saved for later use, allowing you to return to previous views in the <span style="font-weight:bold;">Map</span> panel (this information is deleted when you navigate away from the web application page).  After you have zoomed in or out, you may click <span style="font-weight:bold;">Previous Extent</span> to return to one of your previous zoom levels.  If you have used the <span style="font-weight:bold;">Previous Extent</span> tool at all, you may use the <span style="font-weight:bold;">Next Extent</span> tool to return to an extent from which you went backwards (going back to the future, as it were).</p><p  style="text-align:center"><img alt="The Previous Extent and Next Extent tools" src="HELP/app-top-extent-both.png" style="float: inherit; width:60%;" /></p><p  style="text-align:center"><span style="font-style:italic;">Figure 11: The <span style="font-weight:bold;">Previous Extent</span> and <span style="font-weight:bold;">Next Extent</span> tools</span></p><p><a id="bottom">Across the bottom of the <span style="font-weight:bold;">Map</span> panel, there are three additional tools (Figure 12).  Clockwise from the bottom-left, these tools are the <span style="font-weight:bold;">Transparency</span> slider; the <span style="font-weight:bold;">Latitude-Longitude</span> display, and the <span style="font-weight:bold;">Arizona Geological Survey (AZGS)</span> seal.</a></p><p  style="text-align:center"><img alt="The tools beneath the Map panel" src="HELP/app-bottom-all.png" style="float: inherit; width:60%;" /></p><p  style="text-align:center"><span style="font-style:italic;">Figure 12: The tools beneath the <span style="font-weight:bold;">Map</span> panel</span></p><p><a id="transparency">The <span style="font-weight:bold;">Transparency</span> slider (Figure 13) can be used to adjust the degree of polygon transparency, from fully opaque (0% transparency) to fully transparent (100% transparency).  Polygon transparency determines the visibility of the <span style="font-style:italic;">basemap</span> behind the polygons.  To use this tool, simply click and drag the slidebar from left to right or right.  <span style="font-style:italic;">This tool only affects polygons; it has no effect on lines.</span></a></p><p  style="text-align:center"><img alt="The Transparency slider" src="HELP/app-bottom-slider.png" style="float: inherit; width:60%;" /></p><p  style="text-align:center"><span style="font-style:italic;">Figure 13: The <span style="font-weight:bold;">Transparency</span> slider</span></p><p>The <span style="font-weight:bold;">Latitude-Longitude</span> display (Figure 14) functions exactly as its name implies: every time you move your mouse into the <span style="font-weight:bold;">Map</span> panel, this tool displays the latitude-longitude coordinates associated with your mouse pointer.</p><p  style="text-align:center"><img alt="The Latitude-Longitude display" src="HELP/app-bottom-coordinates.png" style="float: inherit; width:60%;" /></p><p  style="text-align:center"><span style="font-style:italic;">Figure 14: The <span style="font-weight:bold;">Latitude-Longitude</span> display</span></p><p>The <span style="font-weight:bold;">Arizona Geological Survey (AZGS)</span> seal (Figure 15) functions as a hyperlink to the <a href="http://www.azgs.gov">AZGS website</a>.  Click it to go the AZGS website.</p><p  style="text-align:center"><img alt="The AZGS seal" src="HELP/app-bottom-seal.png" style="float: inherit; width:60%;" /></p><p  style="text-align:center"><span style="font-style:italic;">Figure 15: The <span style="font-weight:bold;">AZGS</span> seal</span></p>'
			}
		]
	});	
}

function addHelpFont(){
	winHelpFont = new Ext.Window({
		title: 'Installing the Required Font',
		id: 'P_HELP_IF',
		layout: 'fit',
		closable: true,
		closeAction: 'hide',
		maximizable: true,
		width: 600,
		height: 500,
		items: [{
			xtype: 'panel',
			autoScroll: true,
			html: '<p><a id="ttf">The legend in this application contains special characters that will not display correctly unless the appropriate <a href="http://services.usgin.org/ol/FGDCGA.TTF">FGDC GeoAge font</a> has been installed on your computer.  To install this font on your computer, simply download the font to your computer and follow the procedures to install it on your operating system.</a></p><p>To download the font, follow this link: <a href="http://services.usgin.org/ol/FGDCGA.TTF">http://services.usgin.org/ol/FGDCGA.TTF</a></p><p>Under Windows, simply open the <b>.ttf file</b> you downloaded and click <b>Install</b> in the window that appears (Figure 1).  You may need Administrator privileges to install this file.</p><p  style="text-align:center"><img alt="The window that appears in Windows when you open the .ttf file you downloaded" src="HELP/app-tt.png" style="float: inherit; width:60%;" /></p><p  style="text-align:center"><span style="font-style:italic;">Figure 1: The window that appears in Windows when you open the .ttf file you downloaded</span></p>'
			}
		]
	});	
}

function addHelpAboutMap(){
	winHelpAboutMap = new Ext.Window({
		title: 'About the Map',
		id: 'P_HELP_AM',
		layout: 'fit',
		closable: true,
		closeAction: 'hide',
		maximizable: true,
		width: 600,
		height: 500,
		items: [{
			xtype: 'panel',
			autoScroll: true,
			html: '<p>The Geologic Map of Arizona (AZGS Map 35, ISBN 1-892001-12-8) used in this web application was compiled for the Arizona Geological Survey (AZGS) in 2000 by S.M. Richard, S.J. Reynolds, J.E. Spencer, and P.A. Pearthree. Scale: 1:1,000,000</p><p><span style="font-weight:bold;">Introduction</span><br />A geologic map is a graphical representation of the distribution of different types of rock and sediment at the Earth&#39;s surface.  The colors on this geologic map represent different rock types and ages.  A color is assigned to each of the map units.  The nature of boundaries separating rock units is indicated by the kind of line between them.  Thick lines indicate faults, whereas thin lines separating map units are either depositional or intrusive contacts.  Faults shown in black are inactive, but those shown in red have evidence of movement in the past 2 million years and are considered to be potentially active.</p><p>This map is a revision of AZGS Map 26, compiled by S.J. Reynolds and published in 1988.  Many new geologic maps, especially in the south-central part of the state, have been used to improve the accuracy of this map relative to Map 26.  The data used to generate this map are available as a GIS database from the AZGS (DI-8, v. 3); the text accompanying this dataset includes more complete information about the sources of data and production of this map.</p><p><span style="font-weight:bold;">Notes</span><br />Numerical age ranges reported in the map are approximate.  Abbreviations for time intervals are ka for thousand years and Ma for million years. </p><p><span style="font-weight:bold;">Sources of Data</span><br />This map was compiled from hundreds of different sources that are listed in the following geologic map indexes available from the AZGS: Scarborough and Coney [1982](AZGS Map 17); Harris and others [1994](AZGS Map 31); Kneale and Richard [1998](AZGS Digital Information Series DI-9).  Geology of the San Carlos Indian Reservation is based on Wrucke et al., in press, <span style="font-style:italic;">in</span> Godwin and Smith, eds., Mineral Resources of the San Carlos Indian Reservation: Northwest Mining Association.  The origin and history of the digital geologic data used for this map are described in AZGS DI-8, v. 3).</p><p><span style="font-weight:bold;">Acknowledgements</span><br />Federal funds from the STATEMAP component of the National Geologic Mapping Program, with matching funds from the State of Arizona, were instrumental in the production of many new geologic maps that were incorporated into this map.  Financial support from the U. S. Geological Survey and State Geological Survey Cooperative Geologic Mapping Program (COGEOMAP) was instrumental in preparation of the earlier version of this map (Reynolds [1998] AZGS Map 26.</p>'
			}
		]
	});	
}

function addHelpAboutServices(){
	winHelpAboutServices = new Ext.Window({
		title: 'About the Services',
		id: 'P_HELP_AS',
		layout: 'fit',
		closable: true,
		closeAction: 'hide',
		maximizable: true,
		width: 600,
		height: 500,
		items: [{
			xtype: 'panel',
			autoScroll: true,
			html: '<p>A web service is a protocol for requesting data from a server in which data requests and responses are standardized. The Open Geospatial Consortium (OGC) has produced several different kinds of web service, two of which are relevent to this web application:</p><ul><li><b>Web Feature Service (WFS)</b>: WFS serve data from shapefiles as vector-based features that may be queried for associated attributes (and therefore compared with other data published as WFS).  Owing to the large amount of data associated with WFS, these services tend to require fast Internet connections.</li><li><b>Web Map Service (WMS)</b>: WMS display data from a shapefile as a static raster image, regardless of whether or not the source shapefile contains features that may be queried for attributes.</li></ul> <p>For more information about WFS and WMS, read the USGIN Web Service Tutorial.</p><p>This particular web application consumes data from several different web services:</p><ul><li>Google basemaps available as WMS</li><li>Polygons and lines available via an ArcGIS Server WMS, available at: <a href="http://50.19.88.63/ArcGIS/services/GeologicMapOfArizona/MapServer/WMSServer?request=GetCapabilities&service=WMS">http://50.19.88.63/ArcGIS/services/GeologicMapOfArizona/MapServer/WMSServer?request=GetCapabilities&service=WMS</a>.</li><li>Polygon and line information can also be accessed as a native ESRI Geoservice for those using ArcGIS software by entering the following information into your ESRI client: <a href="http://50.19.88.63/ArcGIS/services/GeologicMapOfArizona/MapServer">http://50.19.88.63/ArcGIS/services/GeologicMapOfArizona/MapServer</a></li><li>Attributes are available as a Geoserver WFS, available at: <a href="http://services.usgin.org/geoserver/ows?service=wfs&version=1.1.0&request=GetCapabilities">http://services.usgin.org/geoserver/ows?service=wfs&version=1.1.0&request=GetCapabilities</a></li></ul>'
			}
		]
	});			
}

function addHelpAboutApplication(){
	winHelpAboutApplication = new Ext.Window({
		title: 'About the Application',
		id: 'P_HELP_AA',
		layout: 'fit',
		closable: true,
		closeAction: 'hide',
		maximizable: true,
		width: 600,
		height: 350,
		items: [{
			xtype: 'panel',
			autoScroll: true,
			html: '<p>This application was created by <span style="font-weight:bold;">Genhan Chen</span> and <span style="font-weight:bold;">Ryan Clark</span> using the <a href="http://www.sencha.com/products/extjs/">ExtJS</a> JavaScript library, the <a href="http://openlayers.org/">OpenLayers</a> JavaScript library, and the <a href="http://geoext.org/">GeoExt</a> JavaScript toolkit.</p><ul><li><a href="http://www.sencha.com/products/extjs/">ExtJS</a> provides the basic framework, styling, and layout for the application</li><li><a href="http://openlayers.org/">OpenLayers</a> provides the application with the ability to perform map-related functions, including data consumption from web map services and web feature services</li><li><a href="http://geoext.org/">GeoExt</a> provides a way to easily integrate the two libraries listed above, OpenLayers and EXTJS</li></ul><p>In addition, the dynamic legend was provided by a custom <a href="https://www.djangoproject.com/">Django</a> application developed by Ryan Clark. This application queries a <a href="http://ngmdb.usgs.gov/Info/standards/NCGMP09/">NCGMP database</a> in order to filter the <a href="http://services.usgin.org/ncgmp/getlegend">legend</a> for features visible within the bounding box.</p><ul><li>The code for Ryan&#39;s application may be found here: <a href="https://gitorious.org/ncgmp/ncgmp">https://gitorious.org/ncgmp/ncgmp</a></li></ul>'
			}
		]
	});	
}
