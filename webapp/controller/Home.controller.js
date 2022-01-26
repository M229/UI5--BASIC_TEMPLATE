sap.ui.define([
	"./BaseController",
	"../model/formatter"
], function(BaseController, formatter) {
	"use strict";

	return BaseController.extend("sap.ui.demo.MyApp.controller.App", {

		formatter: formatter,

		onInit: function () {

		},

		onPressNavBtn: function (oEvent) {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("about");
        }
	});
});