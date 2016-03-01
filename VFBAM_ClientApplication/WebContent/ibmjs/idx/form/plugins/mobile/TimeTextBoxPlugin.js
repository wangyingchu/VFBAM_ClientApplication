/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2012 All Rights Reserved
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

define([
	"dojo/_base/declare",
	"idx/form/plugins/mobile/_TimePickerMobile",
	"idx/form/plugins/mobile/_DateTimeTextBoxPluginBase"
], function(declare,_TimePickerMobile, _DateTimeTextBoxPluginBase){
	
	return declare("idx.form.plugins.mobile.TimeTextBoxPlugin", [_DateTimeTextBoxPluginBase], {
		/**
		* base class of dijit widget
		*/
		popupClass: _TimePickerMobile
		
	});
});
