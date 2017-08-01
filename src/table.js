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
        this.models = opt.models;

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
        _.each(this.headerData, function(headerValue) {
            var opt = {value: headerValue, parent: this};
            var header = new PrettyTable.view.Header(opt);

            this.els.head.append(header.el);

            this.headers.push(header);
        }, this);
        return this;
    },
    renderRows:function() {
    	_.each(this.models, function(model) {
    		var opt = {model: model, keys: this.keys, headers: this.headers, parent: this};
    		var row = new PrettyTable.view.Row(opt);

    		this.els.body.append(row.el);

    		this.rows.push(row)
    	}, this);
    },
    sortRows:function(keys) {
        var comparator = function(obj1, obj2) {
            _.each(keys, function(key) {
                if(obj1.el[key] < obj2.el[key]) return -1;
                if(obj1.el[key] > obj2.el[key]) return 1;
            }, this);
            return 0;
        }
        this.rows.sort(comparator);
    }
})