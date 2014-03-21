enyo.kind({
	name: "App",
	kind: "FittableRows",
	fit: true,
	components:[
		{kind: "onyx.Toolbar", content: "String Manipulations"},

		{kind: "enyo.Scroller", fit: true, horizontal: "hidden", strategyKind: "TouchScrollStrategy", style: "margin: auto;width: 94%;text-align: center;", components: [

			{kind: "onyx.Groupbox", style: "padding: 10px;", components: [
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

			{kind: "onyx.Groupbox", style: "padding: 10px;", components: [
				{kind: "onyx.GroupboxHeader", content: "Reverse (Recursive)"},
				{kind: "onyx.InputDecorator", components: [
					{name: "displayOne", kind: "onyx.Input", style: "width: 100%;", disabled: true}
				]}
			]},

			{kind: "onyx.Groupbox", style: "padding: 10px;", components: [
				{kind: "onyx.GroupboxHeader", content: "Bubble Sort"},
				{kind: "onyx.InputDecorator", components: [
					{name: "displayTwo", kind: "onyx.Input", style: "width: 100%;", disabled: true}
				]}
			]},

			{kind: "onyx.Groupbox", style: "padding: 10px;", components: [
				{kind: "onyx.GroupboxHeader", content: "Merge Sort (Recursive)"},
				{kind: "onyx.InputDecorator", components: [
					{name: "displayThree", kind: "onyx.Input", style: "width: 100%;", disabled: true}
				]}
			]}

		]},

		{kind: "onyx.Toolbar", components: [
			{kind: "onyx.Button",                        content: "Clear", ontap: "clearTapped"},
			{kind: "onyx.Button", style: "float:right;", content: "About", ontap: "aboutTapped"}
		]}

		// Create PopUp for product and personal credits

	],
	clearTapped: function(inSender, inEvent) {
		this.$.main.addContent("The Clear button was tapped.<br/>");
	},
	inputStringChanged: function(inSender, inEvent) {

		// console.log("Input = " + this.$.inputString.getValue());
		this.$.displayOne.setValue ( this.$.inputString.getValue() );
		this.$.displayTwo.setValue ( this.$.inputString.getValue() );
		this.$.displayThree.setValue ( this.$.inputString.getValue() );

	}





});



