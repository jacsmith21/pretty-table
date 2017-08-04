var should = chai.should();

describe("Row", function() {
	describe("Initialization", function() {
		it("with no options", function() {
			var row = new PrettyTable.view.Row({});
		});
		it("with simple model", function() {
			var row = new PrettyTable.view.Row({model: model});
			row.model.should.equal(model);
		});
		it("with headers", function() {
			var row = new PrettyTable.view.Row({model: model, headers: headers});
			row.headers.should.equal(headers);
		});
		it("with row counterpart (for linking objects)", function() {
			var row1 = new PrettyTable.view.Row({model: model});
			var row2 = new PrettyTable.view.Row({model: model, counterpart: row1});
			row1.counterpart.should.equal(row2);
			row2.counterpart.should.equal(row1);
		});
		it("with important info (for showing only differences)", function() {
			var opt = {model: model, importantInfo: importantInfo}
			var row = new PrettyTable.view.Row(opt);
			row.importantInfo.should.equal(importantInfo);
		});
		it("with next function", function() {
			var opt = {model: model, next: next}
			var row = new PrettyTable.view.Row(opt);
			row.next.should.equal(next);
		});
		it("with previous function", function() {
			var opt = {model: model, previous: previous}
			var row = new PrettyTable.view.Row(opt);
			row.previous.should.equal(previous);
		});
	})
	describe("Rendering Cells", function() {
		beforeEach(function() {
			this.row1 = new PrettyTable.view.Row({});
			this.row2 = new PrettyTable.view.Row({});
			this.row = this.row1;
		});
		it("with headers", function() {
			this.row.headers = headers;
			this.row.update(model);
			this.row.cells[0].data.should.equal(model[headers[0].text]);
		});
		it("with no headers", function() {
			this.row1.counterpart = this.row2;
			this.row2.counterpart = this.row1;
			this.row1.next = next;
			this.row2.next = next;
			this.row1.previous = previous;
			this.row1.importantInfo = importantInfo;
			this.row1.update(model);
			this.row2.update(model);
			this.row1.cells.length.should.equal(1);
			this.row1.cells[0].data.should.equal(model);
			this.row1.cells[0].importantInfo.should.equal(importantInfo);
			this.row1.cells[0].counterpart.should.equal(this.row2.cells[0]);
			
		});
	});
	describe("Visibility", function() {
		beforeEach(function() {
			this.row = new PrettyTable.view.Row({});
		})
		it("hidden", function() {
			this.row.setVisible(false);
			this.row.el.css("visibility").should.equal("hidden");
		});
		it("visible", function() {
			this.row.setVisible(true);
			this.row.el.css("visibility").should.equal("visible");
		});
	});
})