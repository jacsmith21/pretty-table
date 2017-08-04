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
        this.text = opt.text;
        this.el = $('<th />');
        this.render();
    },
    render:function() {
        this.el.html(this.text);
        return this;
    }
});
