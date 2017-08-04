var should = chai.should();

describe("Table", function() {
	describe("Initialization", function() {
		it("with no options", function() {
			var table = new PrettyTable.view.Table({});
		});
		it("with models text", function() {
			var table = new PrettyTable.view.Table({models: models});
			table.models.should.equal(models);
		});
		it("with header text", function() {
			var table = new PrettyTable.view.Table({headers: headerText});
			table.headerText.should.equal(headerText);
		});
		it("with next function", function() {
			var opt = {next: next}
			var table = new PrettyTable.view.Table(opt);
			table.next.should.equal(next);
		});
		it("with previous function", function() {
			var opt = {previous: previous}
			var table = new PrettyTable.view.Table(opt);
			table.previous.should.equal(previous);
		});
	});
	describe("Rendering Headers/Rows", function() {
		it("without actions", function() {
			var table = new PrettyTable.view.Table({models: models, headers: headerText});
			table.headers[0].text.should.equal(headerText[0]);
			table.rows[0].model.should.equal(models[0]);
		});
		it("with actions", function() {
			var table = new PrettyTable.view.Table({models: models, next: next, previous: previous});
			table.headers[table.headers.length-1].text.should.equal("actions");
		});
	});
	describe("Appending", function() {
		it("row with no options", function() {
			var table = new PrettyTable.view.Table({});
			var row = new PrettyTable.view.Row({});
			table.append(row);
		});
	});
});