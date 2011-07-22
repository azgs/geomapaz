/**
 * @author Genhan Chen
 * Global variables: itemPan, itemExtPre, itemExtNxt, itemExtFull
 */

//================================================================================================================	
//Create pan item

function addItemPan(icon){

	itemPan = new Ext.Action({
			id: 'I_PAN',
			iconCls: icon,
			tooltip: 'Pan',
			width: 30,
			height: 30,
			group: 'pan',
			toggleGroup: 'pan',
			allowDepress: true,
			pressed: true,
			
			toggleHandler: function(button, state){
				if(state){
					map.getControl('C_PAN').activate();
					Ext.getCmp('I_ZOOM_BOX').toggle(false);
				}else{
					map.getControl('C_PAN').deactivate();
					
				}
			}
				
		});

}

//================================================================================================================	
//Create previous and next extent items
var ctrlNavHistory;
function addItemExtSwitcher(iconPre, iconNxt){
	ctrlNavHistory = new OpenLayers.Control.NavigationHistory();
	map.addControl(ctrlNavHistory);

	itemExtPre = new GeoExt.Action({
			id: 'I_EXT_PRE',
			iconCls: iconPre,
			tooltip: 'Previous Extent',
			width: 30,
			height: 30,
			control: ctrlNavHistory.previous,
			group: 'tool'
				
		});
		
	itemExtNxt = new GeoExt.Action({
			id: 'I_EXT_NXT',
			iconCls: iconNxt,
			tooltip: 'Next Extent',
			width: 30,
			height: 30,
			control: ctrlNavHistory.next,
			group: 'tool'
				
		});

}
//================================================================================================================	
//Create full extent item
function addItemExtFull(icon){

	itemExtFull = new Ext.Action({
			id: 'I_EXT_FULL',
			iconCls: icon,
			tooltip: 'Full Extent',
			width: 30,
			height: 30,
			group: 'tool',
			handler: function(button, evt){
				map.zoomToExtent(extentFull);
			}
				
		});

}
