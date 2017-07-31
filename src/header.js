/**
* @class PrettyJSON.view.Header
* @extends Backbone.View
*
* @author #jacsmith21
* @version 0.1
*
*/
PrettyTable.view.Header = Backbone.View.extend({
    initialize:function(opt) {
        this.data = opt.data;
        this.el = $('<th />');
        this.render();
    },
    render:function() {
        this.el.html(this.data);
        return this;
    }
});
