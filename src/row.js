/**
* @class PrettyJSON.view.Node
* @extends Backbone.View
* 
* @author #rbarriga
* @version 0.1
*
*/
PrettyTable.view.Row = Backbone.View.extend({
    initialize:function(opt) {
        this.data = opt.data;
        this.el = $('<tr />');

        this.cells = [];

        this.renderCells();
    },
    renderCells:function() {
        _.each(this.data, function(cellData) {
            var opt = {data: cellData, parent: this};
            var cell = new PrettyTable.view.Cell(opt);

            this.el.append(cell.el);

            this.cells.push(cell);
        }, this)
    }
});
