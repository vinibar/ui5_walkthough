sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "vinibar.walkthrough",
		settings: {
			id: "walkthough"
		},
		async: true
	}).placeAt("content");
});