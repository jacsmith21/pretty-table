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
        this.headerData = opt.headers;
        this.rowData = opt.data;

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
        _.each(this.headerData, function(headerData) {
            console.log(headerData)
            var opt = {data: headerData, parent: this};
            var header = new PrettyTable.view.Header(opt);

            this.els.head.append(header.el);

            this.headers.push(header);
        }, this);
        return this;
    },
    renderRows:function() {
    	_.each(this.rowData, function(rowData) {
    		var opt = {data: rowData, parent: this};
    		var row = new PrettyTable.view.Row(opt);

    		this.els.body.append(row.el);

    		this.rows.push(row)
    	}, this);
    }
})