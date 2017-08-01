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
        this.el = $('<tr />');
        this.counterpart = opt.counterpart; //used by comparer
        this.model = opt.model;
        this.modelCounterpart = opt.modelCounterpart; //used by comparer
        this.headers = opt.headers;

        this.cells = [];

        this.renderCells();
    },
    renderCells:function() {
        if(this.counterpart === undefined) {
            var cellCounterpart = undefined;
        } else {
            var cellCounterpart = this.counterpart.cells[0];
        }
        if(this.headers !== undefined && this.headers.length !== 0) {
            _.each(this.headers, function(header) {
                var opt = {counterpart: cellCounterpart, data: this.model[header.value], parent: this};
                var cell = new PrettyTable.view.Cell(opt);
                this.el.append(cell.el);
                this.cells.push(cell);
            }, this);
        } else {
            var opt = {counterpart: cellCounterpart, data: this.model, dataCouterpart: this.modelCounterpart};
            var cell = new PrettyTable.view.Cell(opt);
            this.el.append(cell.el);
            this.cells.push(cell);
        }
    },
    setVisible:function(yes) { //used by comparer
        if(yes) {
            this.el.css('visibility', 'visible');
        } else {
            this.el.css('visibility', 'hidden');
        }
    }
});
