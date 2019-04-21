sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.sap.CustomControl.controller.Main", {
		onInit: function () {},
		onPress: function () {
			var oFormWF = this.getView().byId("formWF");
			oFormWF.addItems("","text");
		}
	});
});