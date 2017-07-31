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
        console.log(this.data)
        this.render();
    },
    render:function() {
        this.tpl = _.template(PrettyTable.tpl.Cell)
        var ctx = {"value": this.data};
        $(this.el).html(this.tpl(ctx))
    }
});
