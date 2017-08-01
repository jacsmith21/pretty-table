/**
 * @class PrettyJSON.view.Table
 * @extends Backbone.View
 *
 * @author #jacsmith21
 * @version 0.1
 *
 */
PrettyTable.view.Comparer = Backbone.View.extend({
    initialize:function(opt) {
        this.table1 = opt.table1;
        this.table2 = opt.table2;

        this.keys = opt.keys;

        this.render();
        this.renderTables();
    },
    elements:function(){
        this.els = {
            cell1: $(this.el).find('.table1'),
            cell2: $(this.el).find('.table2')
        };
    },
    render:function() {
        this.tpl = _.template(PrettyTable.tpl.Comparer);
        $(this.el).html(this.tpl);
        this.elements();
    },
    renderTables:function() {
        this.els.cell1.html(this.table1.el);
        this.els.cell2.html(this.table2.el);

        this.table1.sortRows(this.toCompareFields);
        this.table2.sortRows(this.toCompareFields);

        var table1Length = this.table1.rows.length;
        var table2Length = this.table2.rows.length;

        /*
        var i = 0;
        var j = 0;
        while(i < table1Length && j < table2Length) {
            if(comparator(table1.rows[i], table2[j]) === 0) {
                appender(tableId, list1[i], list2[j]);
                i++;
                j++;
            } else if(comparator(list1[i], list2[j]) < 0) {
                appender(tableId, list1[i], null);
                i++;
            } else {
                appender(tableId, null, list2[j]);
                j++;
            }
        }
        while(i < list1.length) {
            appender(tableId, list1[i], null);
            i++;
        }
        while(j < list2.length) {
            appender(tableId, null, list2[j]);
            j++;
        }
        */
    }
})