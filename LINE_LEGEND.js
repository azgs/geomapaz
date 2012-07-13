/**
 * @author gchen
 * Global variable: itemLineLegend
 */

function addLineLegend(){

	itemLineLegend = {
		xtype: 'panel',
		id: 'LEGEND_LINES',
		layout: 'table',
		height: 200,
		split: true,
/*Changed temporarily
		region: 'south',*/
		region: 'center',
		layoutConfig: {
			columns: 2
		},
		autoScroll: true,
		bodyStyle: 'padding: 20px',
		items: [
		{
			xtype: 'panel',
			html: '<b> Contacts </b>',
			colspan: 2,
			height: 25,
			bodyStyle: 'font-size: 14px; text-align: center;',
			border: false		
		},
		{
			xtype: 'panel',
			width: 70,
			html: '<img src="LINE_LEGEND/Contact.jpg"/>',		
			border: false		
		},
		{
			xtype: 'panel',
			html: 'Contacts between Late Tertiary and Quaternary sedimentary units are shown with grey lines while contacts between other units are shown in black',
			border: false		
		},
		{
			xtype: 'panel',
			html: '<b> Faults </b>',
			colspan: 2,
			height: 35,
			bodyStyle: 'padding: 10px 10px 0px 10px; font-size: 14px; text-align: center;',
			border: false		
		},
		{
			xtype: 'panel',
			width: 70,
			html: '<img src="LINE_LEGEND/QFault.jpg"/>',		
			border: false		
		},
		{
			xtype: 'panel',
			html: 'Quaternary faults',
			border: false		
		},
		{
			xtype: 'panel',
			width: 70,
			html: '<img src="LINE_LEGEND/Fault.jpg"/>',		
			border: false		
		},
		{
			xtype: 'panel',
			html: 'Fault, high-angle or dip unknown',
			border: false		
		},
		{
			xtype: 'panel',
			width: 70,
			html: '<img src="LINE_LEGEND/LowFault.jpg"/>',		
			border: false		
		},
		{
			xtype: 'panel',
			html: 'Low-angle fault; tics on hanging-wall side',
			border: false		
		},
		{
			xtype: 'panel',
			width: 70,
			html: '<img src="LINE_LEGEND/DFault.jpg"/>',		
			border: false		
		},
		{
			xtype: 'panel',
			html: 'Detachment fault; double tics on hanging-wall side',
			border: false		
		},
		{
			xtype: 'panel',
			width: 70,
			html: '<img src="LINE_LEGEND/TFault.jpg"/>',		
			border: false		
		},
		{
			xtype: 'panel',
			html: 'Thrust fault; teeth on hanging-wall side',
			border: false		
		}
		
		]
	};
	
	

}
