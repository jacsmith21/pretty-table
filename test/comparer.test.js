var should = chai.should();
var expect = chai.expect();
//var assert = chai.assert();

var text = "header";

describe("Comparer", function() {
	describe("Initialization", function() {
		it("with no options", function() {
			//var comparer = new PrettyTable.view.Comparer({});
		});
		it("with no only one set of models", function() {
			//assert.throws(new PrettyTable.view.Comparer({keys: keys, models1: models1}), Error, "error thrown");
		});
		it("with both sets of models", function() {
			var comparer = new PrettyTable.view.Comparer({keys: keys, models1: models1, models2: models2});
			comparer.models1.should.equal(models1);
			comparer.models2.should.equal(models2);
		});
		it("with a key that isn't in the models", function() {
			var keys = ["no in the models!!"]
			//var comparer = new PrettyTable.view.Comparer({keys: keys, models1: models1, models2: models2});
		});
		it("with important info", function() {
			var comparer = new PrettyTable.view.Comparer({keys: keys, importantInfo: importantInfo});
			comparer.importantInfo.should.equal(importantInfo);
		});
	});
	describe("Rendering Rows Tables", function() {
		it("like usual", function() {
			var comparer = new PrettyTable.view.Comparer({keys: keys, models1: models1, models2: models2, headers: headerText});
			comparer.table1.headers[0].text.should.equal(comparer.table2.headers[0].text);
			comparer.table1.rows.length.should.equal(comparer.table2.rows.length);
			for(var i in comparer.table1.rows) {
				var row1 = comparer.table1.rows[i];
				var row2 = comparer.table2.rows[i];
				row1.counterpart.should.equal(row2);
				row2.counterpart.should.equal(row1);
				_.each(keys, function(key) {
					row1.model[key].should.equal(row2.model[key]);
				}, this);
			}
		});
	});
	describe("Comparator", function() {
		beforeEach(function() {
			var keys = ["key"];
			model1 = {
					key: "aaa"
			}
			model2 = {
					key: "bbb"
			}
			model3 = {
					key: "bbb"
			}
			var comparer = new PrettyTable.view.Comparer({keys: keys});
			this.comparator = comparer.createComparator(keys);
		});
		it("are not equal", function() {
			this.comparator(model1, model2).should.equal(-1);
			this.comparator(model2, model1).should.equal(1);
		});
		it("are equal", function() {
			this.comparator(model2, model2).should.equal(0);
		});
	})
});