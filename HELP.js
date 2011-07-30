/**
 * @author gchen
 * Global variables: itemHelp
 */
var itemHelp;
var winHelpUsingApp, winHelpAboutMap, winHelpAboutServices, winHelpAboutApplication;

function addItemHelp(icon){
	addHelpUsingApp();
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
			id: 'M_HELP_ALL',
			items: [{
				id: 'M_HELP_UA',
				text: 'Using the Application',
				handler: function(button, evt) {
					winHelpUsingApp.show();
				}
			},{
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
			html: '<p>Upon arriving at the Geologic Map of Arizona web application, your web browser should resemble Figure 1:</p><p align="center"><img alt="The application as it should appear in your web browser" src="HELP/app-browser.png" style="float: inherit;" width="60%" /></p><p align="center"><i>Figure 1: The application as it should appear in your web browser</i></p><p>The most immediate feature of the application is the <b>Map</b> panel (Figure 2).  To the immediate right of this panel are the two <b>Legend</b> panels (Figure 2).  The <i>top</i> <b>Legend</b> panel provides map unit information for the colored polygons in the <b>Map</b> panel. The top <b>Legend</b> panel dynamically filters itself depending on what is in the <b>Map</b> panel: it only displays information for geologic units that are present within the <b>Map</b> panel. The <i>bottom</i> <b>Legend</b> panel provides map unit information for line units.</p><p align="center"><img alt="The Map and Legend panels" src="HELP/app-browser-all.png" style="float: inherit;" width="60%" /></p><p align="center"><i>Figure 2: The <b>Map</b> and <b>Legend</b> panels</i></p><p>Across the top of the <b>Map</b> panel are a series of tools (Figure 3).  Clockwise from the bottom-left, these are the <b>Zoom</b> slider; the <b>Change Basemap Layer</b> menu; the <b>Zoom Box</b> tool; the <b>Full Extent</b> tool; the <b>Identify</b> tool; the <b>Previous Extent</b> tool; the <b>Next Extent</b> tool; and the <b>Help</b> button.</p><p align="center"><img alt="The tools atop the Map panel" src="HELP/app-top-all.png" style="float: inherit;" width="60%" /></p><p align="center"><i>Figure 3: The tools atop the <b>Map</b> panel</i></p><p>The <b>Zoom</b> slider (Figure 4) is relatively simple: just click and drag the slide bar up or down, and the map will zoom in or out.  Alternatively, you can click on the <b>Plus</b> sign at the top of the <b>Zoom</b> slider to zoom in; you may click on the <b>Minus</b> sign at the bottom of the <b>Zoom</b> slider to zoom out.</p><p align="center"><img alt="The Zoom slider" src="HELP/app-top-slider.png" style="float: inherit;" width="60%" /></p><p align="center"><i>Figure 4: The <b>Zoom</b> slider</i></p><p>The <b>Change Basemap Layer</b> menu (Figure 5) allows you to select the Google basemap that appears behind the geologic map polygons.  Clicking the <b>Change Basemap</b> reveals a pulldown menu containing four options:</p><ul><li><b>Google Streets</b>: The basemap will appear as a simple streetmap provided by Google.</li><li><b>Google Satellite</b>: Satellite imagery provided by Google.  The basemap will appear as a photograph of the terrain.</li><li><b>Google Hybrid</b>: Satellite imagery provided by Google with streetmap information laid over it.  This basemap is a combination of Google Streets and Google Satellite.</li><li><b>Google Physical</b>: A shaded relief map provided by Google, overlaid with streetmaps and topographic information.</li></ul><p>Click to select whichever option you prefer.</p><p align="center"><img alt="The Change Basemap Layer menu" src="HELP/app-top-basemap.png" style="float: inherit;" width="60%" /></p><p align="center"><i>Figure 5: The <b>Change Basemap Layer</b> menu</i></p><p>The <b>Zoom Box</b> tool (Figure 6) is used to zoom in on the map.  To do so, click the <b>Zoom</b> tool to select it, then click a location in the <b>Map</b> panel.  This will cause the <b>Map</b> panel to zoom in by a fixed interval centered on the location at which you clicked.  Alternatively, click and drag within the <b>Map</b> panel to specify a region to which you would like to zoom.</p><p align="center"><img alt="The Zoom Box tool" src="HELP/app-top-zoom.png" style="float: inherit;" width="60%" /></p><p align="center"><i>Figure 6: The <b>Zoom Box</b> tool</i></p><p>The <b>Full Extent</b> tool (Figure 7) returns the <b>Map</b> panel to its default zoom distance.</p><p align="center"><img alt="The Full Extent tool" src="HELP/app-top-extent.png" style="float: inherit;" width="60%" /></p><p align="center"><i>Figure 7: The <b>Full Extent</b> tool</i></p><p>The <b>Pan</b> tool (Figure 8) treats the map in the <b>Map</b> panel like a slide under a microscope: just as someone looking through a microscope can move the slide around to see different parts of it, so too can you change what is displayed in the <b>Map</b> panel by effectively clicking and dragging the contents of the <b>Map</b> panel.  To use the <b>Pan</b> tool, select it by clicking it, then click and drag in the <b>Map</b> panel to change its contents.</p><p align="center"><img alt="The Pan tool" src="HELP/app-top-pan.png" style="float: inherit;" width="60%" /></p><p align="center"><i>Figure 6: The <b>Pan</b> tool</i></p><p>The <b>Identify</b> tool (Figure 9) is used to query a given polygon for geologic information.  Click the <b>Identify</b> tool to select it, then click any polygon in the <b>Map</b> panel.  Doing so will bring up an <b>Attribute Table</b> window (Figure 10) in which the geologic information of a given polygon are displayed.  The <b>Attribute Table</b> window may be <b>collapsed</b>, <b>expanded</b> or <b>unpinned</b>; after the <b>Attribute Table</b> window has been <b>unpinned</b>, it may be dragged around the screen.</p><p align="center"><img alt="The Identify tool" src="HELP/app-top-identify.png" style="float: inherit;" width="60%" /></p><p align="center"><i>Figure 9: The <b>Identify</b> tool</i></p><p align="center"><img alt="The Attribute window" src="HELP/app-attributes.png" style="float: inherit;" width="60%" /></p><p align="center"><i>Figure 10: The <b>Attribute Table</b> window</i></p><p>The <b>Previous Extent</b> and <b>Next Extent</b> (Figure 11) tools allow you to return to a previous view of the map in the <b>Map</b> panel, in much the same way that your Internet browser has a <b>Back</b> and <b>Forward</b> button.  Each time you zoom in or out in the <b>Map</b> panel, the <i>extent</i> of the <b>Map</b> panel is recorded by your browser and saved for later use, allowing you to return to previous views in the <b>Map</b> panel (this information is deleted when you navigate away from the web application page).  After you have zoomed in or out, you may click <b>Previous Extent</b> to return to one of your previous zoom levels.  If you have used the <b>Previous Extent</b> tool at all, you may use the <b>Next Extent</b> tool to return to an extent from which you went backwards (going back to the future, as it were).</p><p align="center"><img alt="The Previous Extent and Next Extent tools" src="HELP/app-top-extent-both.png" style="float: inherit;" width="60%" /></p><p align="center"><i>Figure 11: The <b>Previous Extent</b> and <b>Next Extent</b> tools</i></p><p>Across the bottom of the <b>Map</b> panel, there are three additional tools (Figure 12).  Clockwise from the bottom-left, these tools are the <b>Transparency</b> slider; the <b>Latitude-Longitude</b> display, and the <b>Arizona Geological Survey (AZGS)</b> seal.</p><p align="center"><img alt="The tools beneath the Map panel" src="HELP/app-bottom-all.png" style="float: inherit;" width="60%" /></p><p align="center"><i>Figure 12: The tools beneath the <b>Map</b> panel</i></p><p>The <b>Transparency</b> slider (Figure 13) can be used to adjust the degree of polygon transparency, from fully opaque (0% transparency) to fully transparent (100% transparency).  Polygon transparency determines the visibility of the <i>basemap</i> behind the polygons.  To use this tool, simply click and drag the slidebar from left to right or right.  <i>This tool only affects polygons; it has no effect on lines.</i></p><p align="center"><img alt="The Transparency slider" src="HELP/app-bottom-slider.png" style="float: inherit;" width="60%" /></p><p align="center"><i>Figure 13: The <b>Transparency</b> slider</i></p><p>The <b>Latitude-Longitude</b> display (Figure 14) functions exactly as its name implies: every time you move your mouse into the <b>Map</b> panel, this tool displays the latitude-longitude coordinates associated with your mouse pointer.</p><p align="center"><img alt="The Latitude-Longitude display" src="HELP/app-bottom-coordinates.png" style="float: inherit;" width="60%" /></p><p align="center"><i>Figure 14: The <b>Latitude-Longitude</b> display</i></p><p>The <b>Arizona Geological Survey (AZGS)</b> seal (Figure 15) functions as a hyperlink to the <a href="http://www.azgs.az.gov/">AZGS website</a>.  Click it to go the AZGS website.</p><p align="center"><img alt="The AZGS seal" src="HELP/app-bottom-seal.png" style="float: inherit;" width="60%" /></p><p align="center"><i>Figure 15: The <b>AZGS</b> seal</i></p>'
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
			html: '<p>The Geologic Map of Arizona (AZGS Map 35, ISBN 1-892001-12-8) used in this web application was compiled for the Arizona Geological Survey (AZGS) in 2000 by S.M. Richard, S.J. Reynolds, J.E. Spencer, and P.A. Pearthree. Scale: 1:1,000,000</p><p><b>Introduction</b><br />A geologic map is a graphical representation of the distribution of different types of rock and sediment at the Earth\'s surface.  The colors on this geologic map represent different rock types and ages.  A color is assigned to each of the map units.  The nature of boundaries separating rock units is indicated by the kind of line between them.  Thick lines indicate faults, whereas thin lines separating map units are either depositional or intrusive contacts.  Faults shown in black are inactive, but those shown in red have evidence of movement in the past 2 million years and are considered to be potentially active.</p><p>This map is a revision of AZGS Map 26, compiled by S.J. Reynolds and published in 1988.  Many new geologic maps, especially in the south-central part of the state, have been used to improve the accuracy of this map relative to Map 26.  The data used to generate this map are available as a GIS database from the AZGS (DI-8, v. 3); the text accompanying this dataset includes more complete information about the sources of data and production of this map.</p><p><b>Notes</b><br />The U.S. Geological Survey (USGS), Flagstaff, AZ, provided the original shaded-relief map image.  The image has been adjusted to better match the geologic map.  Other base-map layers are from Kamili and Richard [1998](AZGS Map 33).  Numerical age ranges reported in the map are approximate.  Abbreviations for time intervals are ka for thousand years and Ma for million years.  Depth-to-bedrock contours are modified from Oppenheimer and Sumner [1980](Depth-to-bedrock map, Basin and Range province, Arizona; AZGS NP-14) and Saltus and Jachens [1995](USGS Map GP-1012).  Place names are selected from Trapp and Reynolds [1995](AZGS Open-File Report 95-2).  Projection for this map: Lambert Conformal Conic, standard parallels 33&deg;N and 45&deg;N, latitude of origin 23&deg;N, central meridian 111&deg;W.</p><p><b>Sources of Data</b><br />This map was compiled from hundreds of different sources that are listed in the following geologic map indexes available from the AZGS: Scarborough and Coney [1982](AZGS Map 17); Harris and others [1994](AZGS Map 31); Kneale and Richard [1998](AZGS Digital Information Series DI-9).  Geology of the San Carlos Indian Reservation is based on Wrucke et al., in press, <i>in</i> Godwin and Smith, eds., Mineral Resources of the San Carlos Indian Reservation: Northwest Mining Association.  The origin and history of the digital geologic data used for this map are described in AZGS DI-8, v. 3).</p><p><b>Acknowledgements</b><br />Federal funds from the STATEMAP component of the National Geologic Mapping Program, with matching funds from the State of Arizona, were instrumental in the production of many new geologic maps that were incorporated into this map.  Financial support from the U. S. Geological Survey and State Geological Survey Cooperative Geologic Mapping Program (COGEOMAP) was instrumental in preparation of the earlier version of this map (Reynolds [1998] AZGS Map 26.  Cartography for this map was designed and executed by S.M. Richard, D.J. Talley, and T.R. Orr; publication design was by P.F. Corrao.  We thank AZGS Director and State Geologist Larry D. Fellows for consistent and strong support for geologic mapping and map compilation.</p>'
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
		width: 500,
		height: 180,
		items: [{
			xtype: 'panel',
			autoScroll: true,
			html: '<p>This web application consumes data from several different web services:<ul><li>Four Google basemap web map services</li><li>Polygons and lines are provided via an ArcGIS Server web map service</li><li>Attributes are provided in response to queries via a Geoserver web feature service</li></ul>'
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
		width: 500,
		height: 350,
		items: [{
			xtype: 'panel',
			autoScroll: true,
			html: '<p>This application was created by Genhan Chen and Ryan Clark using the <a href="http://www.sencha.com/products/extjs/">ExtJS</a> JavaScript framework, the <a href="http://openlayers.org/">OpenLayers</a> JavaScript library, and the <a href="http://geoext.org/">GeoExt</a> JavaScript toolkit.</p><ul><li><a href="http://www.sencha.com/products/extjs/">ExtJS</a> provides the basic framework, styling, and layout for the application</li><li><a href="http://openlayers.org/">OpenLayers</a> provides the application with the ability to perform map-related functions, including data consumption from web map services and web feature services</li><li><a href="http://geoext.org/">GeoExt</a> is used to polish the application</li></ul><p>In addition, the dynamic legend was provided by a custom <a href="https://www.djangoproject.com/">Django</a> application developed by Ryan Clark. This application queries a <a href="http://ngmdb.usgs.gov/Info/standards/NCGMP09/">NCGMP database</a> in order to filter the <a href="http://services.usgin.org/ncgmp/getlegend">legend</a> for features visible within the bounding box.</p><ul><li>The code for Ryan&#39;s application may be found here: <a href="https://gitorious.org/ncgmp/ncgmp"> https://gitorious.org/ncgmp/ncgmp </a></li></ul>'
		}
		]
	});	
}
