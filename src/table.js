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
        this.headers = [];
        this.rows = [];
        
        this.render(opt.headers);
        this.renderRows(opt.models, opt.renderer);
    },
    elements:function(){
        this.els = {
            head: $(this.el).find('thead'),
            body: $(this.el).find('tbody')
        };
    },
    render:function(headerData) {
    	this.tpl = _.template(PrettyTable.tpl.Table);
        $(this.el).html(this.tpl);
        this.elements();
        _.each(headerData, function(headerValue) {
            var opt = {value: headerValue, parent: this};
            var header = new PrettyTable.view.Header(opt);

            this.els.head.append(header.el);

            this.headers.push(header);
        }, this);
        return this;
    },
    renderRows:function(models, renderer) {
    	_.each(models, function(model) {
    		var opt = {model: model, headers: this.headers, renderer: renderer, parent: this};
    		var row = new PrettyTable.view.Row(opt);

    		this.els.body.append(row.el);

    		this.rows.push(row)
    	}, this);
    },
    append:function(row) {
        this.rows.push(row);
        this.els.body.append(row.el);
    }
})