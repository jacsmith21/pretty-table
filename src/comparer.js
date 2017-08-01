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

        var comparator = this.createComparator(this.keys);

        this.table1.rows.sort(comparator);
        this.table2.rows.sort(comparator);

        this.table1.clear();
        this.table2.clear();


        var table1Length = this.table1.rows.length;
        var table2Length = this.table2.rows.length;
        var i = 0;
        var j = 0;
        while(i < table1Length && j < table2Length) {
            if(comparator(this.table1.rows[i], this.table2.rows[j]) === 0) {
                console.log("showing both rows")
                this.table1.append(this.table1.rows[i])
                this.table2.append(this.table2.rows[j])
                i++;
                j++;
            } else if(comparator(this.table1.rows[i], this.table2.rows[j]) < 0) {
                console.log("showing only table 1 row")
                this.copyAndAppend(this.table1.rows[i], this.table1, this.table2);
                i++;
            } else {
                console.log("showing only table 2 row")
                var copy = $.extend(true, {}, this.table2.rows[j]);
                this.copyAndAppend(this.table2.rows[j], this.table2, this.table1);
                j++;
            }
        }
        while(i < table1Length) {
            console.log("showing only table 1 row")
            this.copyAndAppend(this.table1.rows[i], this.table1, this.table2);
            i++;
        }
        while(j < table2Length) {
            console.log("showing only table 2 row")
            this.copyAndAppend(this.table2.rows[j], this.table2, this.table1);
            j++;
        }
    },
    copyAndAppend:function(row, table, otherTable) {
        var copy = row.clone();
        copy.setVisible(false);
        table.append(row);
        otherTable.append(copy);
    },
    createComparator:function(keys) {
        return function(row1, row2) {
            for(var i in keys){
                var key = keys[i];
                if(row1.model[key] === undefined || row2.model[key] === undefined) {
                    throw key + ' doesnt exsit in one of the models'
                }
                if(row1.model[key] < row2.model[key]) return -1;
                if(row1.model[key] > row2.model[key]) return 1;
            }
            return 0;
        }
    }
})