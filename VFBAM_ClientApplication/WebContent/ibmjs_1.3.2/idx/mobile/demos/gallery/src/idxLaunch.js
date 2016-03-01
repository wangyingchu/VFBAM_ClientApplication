define(["idx/mobile/Launch",
	 "dojox/mobile",
	 "dojox/mobile/parser",
	 "dojox/mobile/RoundRectList",
	 "dojox/mobile/ListItem",
	 "dojox/mobile/Heading",
	 "dojox/mobile/ScrollableView"],
  function(Launch){
  	show_launch = null;
	
	return {
		init: function(){
			
			var relaunch = new idx.mobile.Launch();		
			show_launch = function(timeout, keepavailable){
				relaunch.show();
				setTimeout(function(){
					relaunch.hide(keepavailable);
				}, timeout);
			}
		}
	};
});
