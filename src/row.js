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
        this.compareTo = opt.compareTo;
        this.counterpart = opt.counterpart;
        this.renderer = opt.renderer;
        this.headers = opt.headers;
        this.el = $('<tr />');

        this.cells = [];

        this.renderCells();
    },
    renderCells:function() {
        if(this.headers !== undefined && this.headers.length !== 0) {
            _.each(this.headers, function(header) {
                var opt = {data: this.model[header.value], parent: this};
                var cell = new PrettyTable.view.Cell(opt);
                this.el.append(cell.el);
                this.cells.push(cell);
            }, this);
        } else {
            if(this.counterpart === undefined) {
                var cellCounterpart = undefined;
            } else {
                var cellCounterpart = this.counterpart.cells[0];
            }
            var opt = {data: this.model, compareTo: this.compareTo, counterpart: cellCounterpart, parent: this};
            var cell = new PrettyTable.view.Cell(opt);
            this.el.append(cell.el);
            this.cells.push(cell);
        }
    },
    setVisible:function(yes) {
        if(yes) {
            this.el.css('visibility', 'visible');
        } else {
            this.el.css('visibility', 'hidden');
        }
    },
    clone:function() {
        var opt = {model: this.model, renderer: this.renderer, headers: this.headers};
        var clone = new PrettyTable.view.Row(opt);
        return clone;
    }
});
