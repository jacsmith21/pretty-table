var should = chai.should();

var text = "header";

describe("Header", function() {
	describe("Initialization", function() {
		it("with no options", function() {
			var header = new PrettyTable.view.Header({});
		});
		it("with header text", function() {
			var header = new PrettyTable.view.Header({text: text});
			header.text.should.equal(text);
		});
	});
	describe("Rendering", function() {
		it("with header text", function() {
			var header = new PrettyTable.view.Header({text: text});
			header.el.html().should.equal(text);
		});
	});
});