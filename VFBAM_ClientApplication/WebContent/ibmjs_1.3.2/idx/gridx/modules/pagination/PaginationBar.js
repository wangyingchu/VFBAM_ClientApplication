define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"gridx/core/_Module",
	"gridx/modules/pagination/PaginationBar",
	"./GotoPagePane",
	"idx/widget/Dialog",
	"dijit/form/Button",
	"idx/form/NumberTextBox",
	"dojo/i18n!gridx/nls/PaginationBar"
], function(declare, lang, array, _Module, PaginationBar, GotoPagePane, Dialog, Button, NumberTextBox, nls){

	return _Module.register(
	declare(PaginationBar, {
		constructor: function(){
			this.arg('dialogProps', {
				buttons: [
					new Button({
						label: nls.gotoDialogOKBtn,
						onClick: lang.hitch(this, function(){
							array.some(this._pagers, function(pager){
								var dlg = pager._gotoDialog;
								if(dlg && dlg.open){
									dlg.content._onOK();
									return true;
								}
							});
						})
					})
				]
			});
		},

		dialogClass: Dialog,
		
		gotoPagePane: GotoPagePane,

		buttonClass: Button,

		numberTextBoxClass: NumberTextBox,

		sizeSeparator: ''
	}));	
});
