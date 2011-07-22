/**
 * @author gchen
 * Global variables: itemHelp
 */
var itemHelp;

function addItemHelp(icon){
	itemHelp = new Ext.Action({
			id: 'I_HELP',
			iconCls: icon,
			tooltip: 'Help',
			width: 30,
			height: 30,
			
			handler: function(button, evt){
				Ext.Msg.show({
							title:'Comming soon ...',
							minWidth: 200,
							msg: 'Help document is not available right now!',
							icon: Ext.MessageBox.INFO
						});			
			}			
				
		});
}
