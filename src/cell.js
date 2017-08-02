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
        this.el = $('<td />');
        this.counterpart = opt.counterpart;
        this.data = opt.data;
        this.dataCouterpart = opt.dataCouterpart;
        this.importantInfo = opt.importantInfo;

        this.render();
    },
    render:function() {
        if(this.counterpart === undefined) {
            var nodeCounterpart = this.counterpart === undefined ? undefined : this.counterpart.node;
        } else {
            var nodeCounterpart = this.counterpart.node;
        }
        if(_.isObject(this.data)) {
            this.node = new PrettyJSON.view.Node({
                el: this.el,
                data: this.data,
                compareTo: this.dataCouterpart,
                compare: true,
                counterpart: nodeCounterpart,
                importantInfo: this.importantInfo
            });
        } else {
            this.el.html(this.data.toString())
        }
    }
});
