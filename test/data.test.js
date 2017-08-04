var models = [{
		header1: "data1",
		header2: "data2"
}]

var models1 = models;

var models2 = [{
	header1: "dat1",
	header2: "data2"
}]

keys = ["header1", "header2"]

var model = {
		header1: "data1",
		header2: "data2"
}

var data = {
		test: "me",
		more: {
			tests: "are great"
		}
}

var importantInfo = ["header1"];

var previous = function() {
	return model;
}

var next = function() {
	return model;
}

var headers = [new PrettyTable.view.Header({text: "header1"}), new PrettyTable.view.Header({text: "header2"})];

var headerText = ["header1", "header2"]