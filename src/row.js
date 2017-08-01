/**
* @class PrettyJSON.view.Row
* @extends Backbone.View
* 
* @author #rbarriga
* @version 0.1
*
*/
PrettyTable.view.Row = Backbone.View.extend({
    initialize:function(opt) {
        this.model = opt.model;
        this.headers = opt.headers;
        this.el = $('<tr />');

        this.cells = [];

        this.renderCells();
    },
    renderCells:function() {
        if(this.headers !== undefined) {
            _.each(this.headers, function(header) {
                var opt = {data: this.model[header.value], parent: this};
                var cell = new PrettyTable.view.Cell(opt);
                this.el.append(cell.el);
                this.cells.push(cell);
            }, this)
        } else {
            var opt = {data: modal, parent: this}
            var cell = new PrettyTable.view.Cell(opt);
            this.el.append(cell.el);
            this.cells.push(cell);
        }

    }
});
