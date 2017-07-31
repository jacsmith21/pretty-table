/**
* @class PrettyJSON.view.Leaf
* @extends Backbone.View
* 
* @author #jacsmith21
* @version 0.1
*
*/
PrettyTable.view.Cell = Backbone.View.extend({
    initialize:function(opt) {
        this.data = opt.data;
        this.el = $('<td />')
        this.render();
    },
    render:function() {
        this.el.html(this.data)
    }
});
