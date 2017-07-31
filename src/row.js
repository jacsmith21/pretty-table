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

        this.cells = [];

        this.render();
        this.renderCells();
    },
    elements:function() {
        this.els = {
            row: $(this.el).find('tr')
        }
    },
    render:function() {
        this.tpl = _.template(PrettyTable.tpl.Row);
        $(this.el).html(this.tpl);
        this.elements();
        return this;
    },
    renderCells:function() {
        _.each(this.data, function(cellData) {
            var opt = {data: cellData, parent: this};
            var cell = new PrettyTable.view.Cell(opt);

            this.els.row.append(cell.el);

            this.cells.push(cell);
        }, this)
    }
});
