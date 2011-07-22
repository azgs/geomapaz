/**
 * @author Genhan Chen
 * Add AZGS logo into map
 * 
 * We need to add logo element into html body first,
 * e.g. <img id='LOGO' src='logo.png' width='64' height='64' style='opacity:0.75; padding:20px 20px 20px 20px;'/>	
 */


function addLogo(){

//Initial position of image	

viewPort.on('add',function(){
	Ext.get('LOGO').alignTo(
		Ext.getCmp('MAP_PANEL').bottomToolbar.el,
		'br-tr');
		}
	);
		
//Turn on 'afterlayout' event for viewport
//The logo will be relocated evertime the viewport's layout is changed
viewPort.addListener('afterlayout',
	function(){
	Ext.get('LOGO').alignTo(
		Ext.getCmp('MAP_PANEL').bottomToolbar.el,
		'br-tr');
		}
	);

//Click logo jumping into AZGS website
Ext.get('LOGO').hover(
    function(){
    	Ext.get('LOGO').setStyle('cursor','pointer');
    	
    	//Resolve the conflict with 'Identify'
    	if(Ext.getCmp('I_IDENTIFY').pressed){
			ctrlIdentify.deactivate();
		}
    },
    function(){
    	Ext.get('LOGO').setStyle('cursor','default');
    	
    	//Resolve the conflict with 'Identify'
		if(Ext.getCmp('I_IDENTIFY').pressed){
			ctrlIdentify.activate();
		}    	
    }
)

Ext.get('LOGO').addListener('click', 
	function(){
		self.location.href='http://www.azgs.az.gov';
	});

}
