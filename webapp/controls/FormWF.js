sap.ui.define(
	['sap/ui/core/Control'],
	function (Control) {
		return Control.extend("com.sap.CustomControl.controls.FormWF", {
			metadata: {
				properties: {},
				aggregations: {
					_VBox: {
						type: "sap.m.VBox",
						multiple: false
					}
				}
			},

			init: function () {
				//Cargo el CSS
				//var libraryPath = jQuery.sap.getModulePath("com.sap.CustomControl");
				//	jQuery.sap.includeStyleSheet(libraryPath + "/css/bkChat.css");
				var oVBox = new sap.m.VBox(this.getId() + "-bkChatVBox", {

				});
				this.setAggregation("_VBox", oVBox);

				var oText = new sap.m.Text("",{
					text: "Hola"
				});
				oVBox.addItem(oText, 0);
			},

			renderer: function (oRm, oControl) {
				var oVbox = oControl.getAggregation("_VBox");
				//first up, render a div for the ShadowBox
				oRm.write("<div");

				//next, render the control information, this handles your sId (you must do this for your control to be properly tracked by ui5).
				oRm.writeControlData(oControl);
				oRm.write(">");

				//next, iterate over the content aggregation, and call the renderer for each control
				/*				$(oControl.getContent()).each(function () {
									oRm.renderControl(this);
								});*/
				
				oRm.renderControl(oVbox);

				//and obviously, close off our div
				oRm.write("</div>")
			},
			
			addItems: function(){
					
			},

			onAfterRendering: function () {
				//if I need to do any post render actions, it will happen here
				if (sap.ui.core.Control.prototype.onAfterRendering) {
					sap.ui.core.Control.prototype.onAfterRendering.apply(this, arguments); //run the super class's method first
				}
			},
		});
	}
);