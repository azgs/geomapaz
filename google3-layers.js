function googleLayers3() {
	this.streets = new OpenLayers.Layer.Google(
			"Google Streets",
			{
				animationEnabled: false
			}
		);
	this.physical = new OpenLayers.Layer.Google(
			"Google Physical",
			{ 
				type: google.maps.MapTypeId.TERRAIN,
				animationEnabled: false
			}		
		);
	this.satellite = new OpenLayers.Layer.Google(
			"Google Satellite",
			{ 
				type: google.maps.MapTypeId.SATELLITE,
				animationEnabled: false
			}
		);
	this.hybrid = new OpenLayers.Layer.Google(
			"Google Hybrid",
			{ 
				type: google.maps.MapTypeId.HYBRID,
				animationEnabled: false
			}
		);
}