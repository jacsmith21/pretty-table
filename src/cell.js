/**
* @class PrettyJSON.view.Cell
* @extends Backbone.View
* 
* @author #jacsmith21
* @version 0.1
*
*/
PrettyTable.view.Cell = Backbone.View.extend({
    initialize: function(opt) {
        this.el = $('<td />');
        
        this.counterpart = opt.counterpart;
        this.data = opt.data;
        this.importantInfo = opt.importantInfo;

        if(this.counterpart !== undefined) {
        	this.counterpart.counterpart = this;
        }
        
        this.render();
    },
    render: function() {
        if(_.isObject(this.data)) {
        	var nodeCounterpart = this.counterpart === undefined ? undefined : this.counterpart.node;
            var dataCounterpart = this.counterpart === undefined ? undefined : this.counterpart.data;
            this.node = new PrettyJSON.view.Node({
                el: this.el,
                data: this.data,
                compareTo: dataCounterpart,
                counterpart: nodeCounterpart,
                importantInfo: this.importantInfo
            });
        } else {
            this.el.html(this.data)
        }
    },
    update: function(data) {
    	this.data = data;
    	this.render();
    }
});
