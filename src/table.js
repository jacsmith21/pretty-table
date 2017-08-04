/**
* @class PrettyJSON.view.Table
* @extends Backbone.View
* 
* @author #jacsmith21
* @version 0.1
*
*/
PrettyTable.view.Table = Backbone.View.extend({
	initialize:function(opt) {
	    this.headerText = opt.headers;
	    this.models = opt.models || [];
	    this.next = opt.next;
	    this.previous = opt.previous;

        this.headers = [];
        this.rows = [];
        
        this.render();
        this.renderRows();
    },
    elements:function(){
        this.els = {
            head: $(this.el).find('thead'),
            body: $(this.el).find('tbody')
        };
    },
    render:function() {
    	this.tpl = _.template(PrettyTable.tpl.Table);
        $(this.el).html(this.tpl);
        this.elements();
        _.each(this.headerText, function(text) {
            var opt = {text: text};
            var header = new PrettyTable.view.Header(opt);

            this.els.head.append(header.el);

            this.headers.push(header);
        }, this);
        
        if(this.next || this.previous) {
            var opt = {text: "actions"};
            var header = new PrettyTable.view.Header(opt);
            this.els.head.append(header.el);
            this.headers.push(header);
        }
    },
    renderRows:function(models, renderer) {
    	_.each(this.models, function(model) {
    		var opt = {model: model, headers: this.headers, next: this.next, previous: this.previous};
    		var row = new PrettyTable.view.Row(opt);

    		this.els.body.append(row.el);

    		this.rows.push(row)
    	}, this);
    },
    append:function(row) { //used by comparer
        this.rows.push(row);
        this.els.body.append(row.el);
    }
})