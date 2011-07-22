/**
 * @author Genhan Chen
 * Global variable: itemLayerSwitcher
 */

function addItemLayerSwitcher(icon){
	itemLayerSwitcher = new Ext.Action({
		id: 'I_LAYER_SWITCHER',
		iconCls: icon,
		tooltip: 'Change Base Layer',
		width: 40,
		height: 30,
		menu: {
			xtype: 'menu',
			id: 'M_G_ALL',
			items: [{
				xtype: 'menucheckitem',
				id: 'M_G_STR',
				text: 'Google Streets',
				group: 'base',
				checked: true,
				handler: function(button, evt) {
					map.removeLayer(map.layers[map.layers.length - 1]);					
					map.addLayer(gStrLayer);
				}
			},{
				xtype: 'menucheckitem',
				id: 'M_G_SAT',
				text: 'Google Satellite',
				group: 'base',
				handler: function(button, evt) {
					map.removeLayer(map.layers[map.layers.length - 1]);	
					map.addLayer(gSatLayer);
				}
			},{
				xtype: 'menucheckitem',
				id: 'M_G_HYB',
				text: 'Google Hybrid',
				group: 'base',
				handler: function(button, evt) {
					map.removeLayer(map.layers[map.layers.length - 1]);	
					map.addLayer(gHybLayer);

				}
			},{
				xtype: 'menucheckitem',
				id: 'M_G_PHY',
				text: 'Google Physical',
				group: 'base',
				handler: function(button, evt) {
					map.removeLayer(map.layers[map.layers.length - 1]);		
					map.addLayer(gPhyLayer);
				}
			}
			]
		}
	});
}
