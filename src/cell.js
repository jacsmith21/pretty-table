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
        this.renderer = opt.renderer;
        this.el = $('<td />');
        this.render();
    },
    render:function() {
        if(this.renderer !== undefined) {
            this.renderer(this.data, this);
        } else {
            this.el.html(this.data.toString())
        }
    }
});
