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
        this.headers = opt.headers;
        this.importantInfo = opt.importantInfo;
        this.next = opt.next;
        this.previous = opt.previous;
        
        if(this.counterpart !== undefined) {
        	this.counterpart.counterpart = this;
        }

        this.cells = [];

        this.renderCells();
    },
    renderCells:function() {
    	if(this.model === undefined) {
    		return;
    	}
    	
        if(this.headers !== undefined && this.headers.length !== 0) {
            _.each(this.headers, function(header) {
                var opt = {data: this.model[header.text]};
                var cell = new PrettyTable.view.Cell(opt);
                this.el.append(cell.el);
                this.cells.push(cell);
            }, this);
        } else {
        	var cellCounterpart = this.counterpart === undefined ? undefined : this.counterpart.cells[0];
            var opt = {counterpart: cellCounterpart, data: this.model, importantInfo: this.importantInfo};
            var cell = new PrettyTable.view.Cell(opt);
            this.el.append(cell.el);
            this.cells.push(cell);
        }

        //Creating actions icons and binding to the passed in functions
        if(this.next || this.previous) {
            var actions = '';
            if(this.previous) actions += '<a href="#" class="previous"><i class="fa fa-lg fa-chevron-left"></i>' //creating html
            if(this.next) actions += '<a href="#" class="next"><i class="fa fa-lg fa-chevron-right"></i></a>';
            var opt = {data: actions}
            var cell = new PrettyTable.view.Cell(opt);
            this.el.append(cell.el);
            if(this.next) cell.el.find("a.next").on("click", {next: this.next, row: this, model: this.model}, function(e){
                e.data.next(e.data.row, e.data.model)
            })
            if(this.previous) cell.el.find("a.previous").on("click", {previous: this.previous, row: this, model: this.model}, function(e){
                e.data.previous(e.data.row, e.data.model)
            })
        }
    },
    setVisible:function(yes) { //used by comparer
        if(yes) {
            this.el.css('visibility', 'visible');
        } else {
            this.el.css('visibility', 'hidden');
        }
    },
    update:function(model) {
        this.model = model;
        this.el.empty();
        this.cells = [];
        this.renderCells();
    }
});
