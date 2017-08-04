var should = chai.should();

describe("Cell", function() {
	describe("Initialization", function() {
		it("with no options", function() {
			var cell = new PrettyTable.view.Cell({});
		});
		it("with primitive data", function() {
			var cell = new PrettyTable.view.Cell({data: "test"});
			cell.data.should.equal("test");
		});
		it("with json object data", function() {
			var cell = new PrettyTable.view.Cell({data: data});
			cell.data.should.equal(data);
		});
		it("with cell counterpart (for linking objects)", function() {
			var opt1 = {data: data}
			var cell1 = new PrettyTable.view.Cell(opt1);
			var opt2 = {data: data, counterpart: cell1}
			var cell2 = new PrettyTable.view.Cell(opt2);
			cell1.counterpart.should.equal(cell2);
			cell2.counterpart.should.equal(cell1);
		});
		it("with important info (for showing only differences)", function() {
			var importantInfo = ["test"]
			var opt = {data: data, importantInfo: importantInfo}
			var cell = new PrettyTable.view.Cell(opt);
			cell.importantInfo.should.equal(importantInfo);
		});
	});
	describe("Rendering", function() {
		beforeEach(function() {
			this.cell1 = new PrettyTable.view.Cell({});
			this.cell2 = new PrettyTable.view.Cell({});
			this.cell = this.cell1;
		});
		it("with primitive types", function() {
			this.cell.update("updating");
			this.cell.el.html().should.equal("updating");
			this.cell.update(true);
			this.cell.el.html().should.equal('true');
			this.cell.update(1234);
			this.cell.el.html().should.equal('1234');
		});
		it("with json objects", function() {
			this.cell1.data = data;
			this.cell2.data = data;
			this.cell1.counterpart = this.cell2;
			this.cell2.counterpart = this.cell1;
			this.cell1.importantInfo = ["important"];
			this.cell2.importantInfo = ["important"];
			this.cell1.render();
			this.cell2.render();
			this.cell1.node.data.should.equal(data);
			this.cell1.node.compareTo.should.equal(this.cell2.data);
			this.cell2.node.counterpart.should.equal(this.cell1.node);
		})
	})
})