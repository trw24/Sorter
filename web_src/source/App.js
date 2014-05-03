// =============================================
//
//	App to demonstrate Sort Routines
//
//	Copyright 2014 Troy Weidman
//
// =============================================
//
// CordovaListener.js
//

myApp = {};

enyo.kind({
	name: "CordovaListener",
	components: [
	    {kind: "Signals", ondeviceready: "deviceReadyHandler"}
	],
	deviceReadyHandler: function() {

		myApp = new MyApp();
		myApp.renderInto(document.body);
	},
	create: function() {

		this.inherited(arguments);

		// this.deviceReadyHandler();		// used when not expecting "deviceready" event
	}
});

//
// =============================================
//

enyo.kind({
	name: "MyApp",
	kind: "FittableRows",
	fit: true,
	style: "background-color:#E3D8CC;",
	components: [
		{
			kind: "enyo.Scroller", 
			fit: true, 
			horizontal: "hidden", 
			strategyKind: "TouchScrollStrategy", 
			style: "margin: auto;width: 94%;text-align: center;", 
			components: [
				{
					name: "mainArea",
					kind: "FittableRows",
					components: [
						{
							// Input
							kind: "FittableColumns",
							style: "margin-top:10px;",
							components: [
								{
									classes: "column-both column-left",
									content: "Input"
								},
								{
									name: "inputString", 
									kind: "onyx.Input",
									classes: "column-both column-right",
									style: "padding:6px;",
									fit: true,
									placeholder: "Enter text here", 
									onkeyup: "inputStringChanged"
								}
							]
						},
						{
							// Reverse String
							kind: "FittableColumns",
							style: "margin-top:10px;",
							components: [
								{
									classes: "column-both column-left",
									content: "Reverse"
								},
								{
									name: "displayReverseString", 
									classes: "column-both column-right",
									style: "padding:6px 8px;",
									fit: true,
									content: ""
								}
							]
						},
						{
							// Bubble Sort
							kind: "FittableColumns",
							style: "margin-top:10px;",
							components: [
								{
									classes: "column-both column-left",
									content: "Bubble Sort"
								},
								{
									name: "displayBubbleSort", 
									classes: "column-both column-right",
									style: "padding:6px 8px;",
									fit: true,
									content: ""
								}
							]
						},
						{
							// Merge Sort
							kind: "FittableColumns",
							style: "margin-top:10px;margin-bottom:10px;",
							components: [
								{
									classes: "column-both column-left",
									content: "Merge Sort"
								},
								{
									name: "displayMergeSort", 
									classes: "column-both column-right",
									style: "padding:6px 8px;",
									fit: true,
									content: ""
								}
							]
						}
					]
				}
			]
		},
		{
			kind: "onyx.Toolbar", components: [
				{kind: "onyx.Button",                        content: "Clear", ontap: "clearTapped"},
				{kind: "onyx.Button", style: "float:right;", content: "About", ontap: "aboutTapped"}
			]
		},
		{
			name: "aboutPopup",
			kind: "onyx.Popup",
		    autoDismiss: true,
		    modal: false,
		    scrim: true,
		    centered: true,
		    ontap: "aboutHide",
			components: 
			[{
				name: "popupContent",
				kind: "FittableRows",
                allowHtml: true,
                style: "font-size:18px;padding: 15px;line-height: 150%;background-color:#C9B4A5;text-align: center;"
                // Font-size:
                // There is reference that default on Android is 12px.
                // But, in Chrome browser, it appears 16px is default and 18px is slightly larger.
			}]
		},
	    {kind: "Signals", onbackbutton: "backButtonHandler"}
	],
	create: function() {

		this.inherited(arguments);
		this.clearTapped();
	},
	aboutTapped: function(inSender, inEvent) {
		// PopUp for product and personal credit

		var popupContentString = "";

		popupContentString += "Merge sort is programmed recursively in javascript.<br />";
		popupContentString += "<br />";
		popupContentString += "Javascript Framework is Enyo<br />";
		popupContentString += "Platform Support by Cordova<br />";
		popupContentString += "Designed and Programmed by Troy<br />";
		popupContentString += "Copyright 2014 by Troy";

		this.$.popupContent.setContent(popupContentString);
		this.$.aboutPopup.show();
	},
	aboutHide: function(inSender, inEvent) {

		this.$.aboutPopup.hide();
	},
	clearTapped: function(inSender, inEvent) {

		this.$.aboutPopup.hide();
		this.$.inputString.setValue("");
		this.$.displayReverseString.setContent("-");
		this.$.displayBubbleSort.setContent("-");
		this.$.displayMergeSort.setContent("-");

		// For some reason, font is sometimes reset
		// So, manually setting it every time.
		this.$.inputString.addRemoveClass("column-right", true);
		this.$.displayReverseString.addRemoveClass("column-right", true);
		this.$.displayBubbleSort.addRemoveClass("column-right", true);
		this.$.displayMergeSort.addRemoveClass("column-right", true);
	},
	inputStringChanged: function(inSender, inEvent) {

		var stringToProcess = this.$.inputString.getValue();

		if (stringToProcess.length == 0) {

			this.clearTapped();
		}
		else {

			// Reverse String (recursive)
			this.$.displayReverseString.setContent( mySortMachine.reverseString (stringToProcess) );

			// Bubble Sort (not recursive)
			this.$.displayBubbleSort.setContent( mySortMachine.bubbleSort (stringToProcess) );

			// Merge Sort (recursive)
	        mySortMachine.setPrivateArray(stringToProcess);
	        mySortMachine.mergeSort();
			this.$.displayMergeSort.setContent( mySortMachine.getPrivateArray() );
		}
	},
	backButtonHandler: function(inSender, inEvent) {

		// On Android, back button is used to exit app.
		// On iOS, this has no effect.

		navigator.app.exitApp(); 
	}


});


// =============================================
//
// End of File
//





