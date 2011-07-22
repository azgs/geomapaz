/**
 * @author Genhan Chen
 * Global variables: itemZoomIn, itemZoomOut, itemZoomBox
 */

//================================================================================================================	
//Create zoom in item

function addItemZoomIn(icon){

	itemZoomIn = new GeoExt.Action({
			id: 'I_ZOOM_IN',
			iconCls: icon,
			tooltip: 'Zoom In',
			width: 30,
			height: 30,
			control: new OpenLayers.Control.ZoomIn({id: 'C_ZOOM_IN'}),
			map: map,
			group: 'tool'	
		});

}

//================================================================================================================	
//Create zoom out item

function addItemZoomOut(icon){

	itemZoomOut = new GeoExt.Action({
			id: 'I_ZOOM_OUT',
			iconCls: icon,
			tooltip: 'Zoom Out',
			width: 30,
			height: 30,
			control: new OpenLayers.Control.ZoomOut({id: 'C_ZOOM_OUT'}),
			map: map,
			group: 'tool'	
		});
}
//================================================================================================================	
//Create zoom box item
var ctrlZoomBox;
function addItemZoomBox(icon){
	ctrlZoomBox = new OpenLayers.Control.ZoomBox({id: 'C_ZOOM_BOX'});
	map.addControl(ctrlZoomBox);
	
	itemZoomBox = new Ext.Action({
			id: 'I_ZOOM_BOX',
			iconCls: icon,
			tooltip: 'Zoom Box',
			width: 30,
			height: 30,
			group: 'tool',
			toggleGroup: 'tool',
			allowDepress: true,
			
			toggleHandler: function(button, state){
				if(state){
					ctrlZoomBox.activate();
					Ext.getCmp('I_PAN').toggle(false);
				}else{
					ctrlZoomBox.deactivate();
				}
			}			
				
		});
}