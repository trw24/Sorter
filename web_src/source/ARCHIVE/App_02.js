enyo.kind({
	name: "App",
	kind: "FittableRows",
	fit: true,
	style: "background-color:#E3D8CC;",
	components:[
		// {kind: "onyx.Toolbar", content: "String Manipulations"},

		{
			kind: "enyo.Scroller", 
			fit: true, 
			horizontal: "hidden", 
			strategyKind: "TouchScrollStrategy", 
			style: "margin: auto;width: 94%;text-align: center;", 
			components: [

			{kind: "onyx.Groupbox", style: "padding: 6px;", components: [
				{kind: "onyx.GroupboxHeader", content: "Input"},
				{kind: "onyx.InputDecorator", components: [
					{
						name: "inputString", 
						kind: "onyx.Input", 
						style: "width: 100%;", 
						placeholder: "Enter text here", 
						onkeyup: "inputStringChanged"
					}
				]}
			]},

			{kind: "onyx.Groupbox", style: "padding: 6px;", components: [
				{kind: "onyx.GroupboxHeader", content: "Reverse (Recursive)"},
				{kind: "onyx.InputDecorator", components: [
					{name: "displayReverseString", kind: "onyx.Input", style: "width: 100%;", disabled: true}
				]}
			]},

			{kind: "onyx.Groupbox", style: "padding: 6px;", components: [
				{kind: "onyx.GroupboxHeader", content: "Bubble Sort"},
				{kind: "onyx.InputDecorator", components: [
					{name: "displayBubbleSort", kind: "onyx.Input", style: "width: 100%;", disabled: true}
				]}
			]},

			{kind: "onyx.Groupbox", style: "padding: 6px;", components: [
				{kind: "onyx.GroupboxHeader", content: "Merge Sort (Recursive)"},
				{kind: "onyx.InputDecorator", components: [
					{name: "displayMergeSort", kind: "onyx.Input", style: "width: 100%;", disabled: true}
				]}
			]}

		]},

		{kind: "onyx.Toolbar", components: [
			{kind: "onyx.Button",                        content: "Clear", ontap: "clearTapped"},
			{kind: "onyx.Button", style: "float:right;", content: "About", ontap: "aboutTapped"}
		]},

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
                style: "padding: 15px;line-height: 150%;background-color:#C9B4A5;"
			}]
		}
	],
	aboutTapped: function(inSender, inEvent) {
		// PopUp for product and personal credit

		var popupContentString = "";
		popupContentString += "Javascript Framework is Enyo<br />";
		popupContentString += "Platform Support by Cordova<br />";
		popupContentString += "Designed and Programmed by Troy.";

		this.$.popupContent.setContent(popupContentString);
		this.$.aboutPopup.show();
	},
	aboutHide: function(inSender, inEvent) {

		this.$.aboutPopup.hide();
	},
	clearTapped: function(inSender, inEvent) {
		this.$.aboutPopup.hide();
		this.$.inputString.setValue("");
		this.inputStringChanged();
	},
	inputStringChanged: function(inSender, inEvent) {

		// Reverse String (recursive)
		this.$.displayReverseString.setValue ( mySortMachine.reverseString (this.$.inputString.getValue() ));

		// Bubble Sort (not recursive)
		this.$.displayBubbleSort.setValue ( mySortMachine.bubbleSort (this.$.inputString.getValue() ));

		// Merge Sort (recursive)
        mySortMachine.setPrivateArray ( this.$.inputString.getValue() );
        mySortMachine.mergeSort();
		this.$.displayMergeSort.setValue ( mySortMachine.getPrivateArray() );

	}





});








