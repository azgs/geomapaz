/**
 * @author Genhan Chen
 * Add AZGS logo into map
 * 
 */

var itemLogo;

function addLogo(){
	
itemLogo = {
		xtype: 'panel',
		id: 'I_LOGO',
		html: '<img id="LOGO" src="SRC/logo.png" width="64" height="64" style="opacity:0.75;"/>',
		bodyStyle: 'position: absolute; z-index: 1100; background: none; right: 5px; bottom: 5px; cursor: pointer;',
		//style: '',
		hideBorders: true,
		border: false
};

}

function addLogoFunction(){

Ext.getCmp('I_LOGO').el.addListener('click', 
	function(){
		self.location.href='http://www.azgs.az.gov';
	});	
}