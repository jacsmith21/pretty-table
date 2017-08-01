/**
* @class PrettyJSON.view.Cell
* @extends Backbone.View
* 
* @author #jacsmith21
* @version 0.1
*
*/
PrettyTable.view.Cell = Backbone.View.extend({
    initialize:function(opt) {
        this.data = opt.data;
        this.compareTo = opt.compareTo;
        this.counterpart = opt.counterpart;
        this.el = $('<td />');
        this.render();
    },
    render:function() {
        if(this.counterpart === undefined) {
            var counterpart = undefined;
        } else {
            var counterpart = this.counterpart.tree;
        }
        console.log(this.compareTo)
        if(_.isObject(this.data)) {
            this.tree = new PrettyJSON.view.Node({
                el: this.el,
                data: this.data,
                compareTo: this.compareTo,
                compare: true,
                counterpart: counterpart
            });
        } else {
            this.el.html(this.data.toString())
        }
    }
});
