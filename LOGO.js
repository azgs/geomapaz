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
		height: 64,
		width: 64,
		//html: '<img id="LOGO" src="SRC/logo.png" width="64" height="64" style="opacity:0.75;"/>',
		bodyStyle: 'background: none;',
		style: 'position: absolute; z-index: 1100; background: none; right: 5px; bottom: 5px; width: 64px; height: 64px; background-image: url("SRC/logo.png");cursor: pointer; opacity: 0.9;',
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
