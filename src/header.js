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
        this.value = opt.value;
        this.el = $('<th />');
        this.render();
    },
    render:function() {
        this.el.html(this.value);
        return this;
    }
});
