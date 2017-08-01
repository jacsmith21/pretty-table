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
        this.keys = opt.keys;
        this.headers = opt.headers;
        this.renderer = opt.renderer;

        this.render();
        this.renderTables(opt);
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
    renderTables:function(opt) {
        var models1 = opt.models1;
        var models2 = opt.models2;

        var table1 = new PrettyTable.view.Table({});
        var table2 = new PrettyTable.view.Table({});
        this.els.cell1.html(table1.el);
        this.els.cell2.html(table2.el);

        var comparator = this.createComparator(this.keys);
        models1.sort(comparator);
        models2.sort(comparator);

        var models1Length = models1.length;
        var models2Length = models2.length;
        var i = 0;
        var j = 0;
        while(i < models1Length && j < models2Length) {
            if(comparator(models1[i], models2[j]) === 0) {
                this.createAndAppend(models1[i], models2[j], table1, table2);
                i++;
                j++;
            } else if(comparator(models1[i], models2[j]) < 0) {
                this.createAndAppend(models1[i], models1[i], table1, table2);
                table2.rows[table2.rows.length-1].setVisible(false);
                i++;
            } else {
                this.createAndAppend(models2[j], models2[j], table1, table2);
                table1.rows[table1.rows.length-1].setVisible(false);
                j++;
            }
        }
        while(i < models1Length) {
            this.createAndAppend(models1[i], models1[i], table1, table2);
            table2.rows[table2.rows.length-1].setVisible(false);
            i++;
        }
        while(j < models2Length) {
            this.createAndAppend(models1[j], models2[j], table1, table2);
            table1.rows[table1.rows.length-1].setVisible(false);
            j++;
        }
    },
    createAndAppend:function(model1, model2, table1, table2) {
        var row1 = new PrettyTable.view.Row({model: model1, compareTo: model2, headers: this.headers, renderer: this.renderer, parent: this});
        table1.append(row1);
        var row2 = new PrettyTable.view.Row({model: model2, compareTo: model2, counterpart: row1, headers: this.headers, renderer: this.renderer, parent: this});
        table2.append(row2);
    },
    createComparator:function(keys) {
        return function(model1, model2) {
            for(var i in keys){
                var key = keys[i];
                if(model1[key] < model2[key]) return -1;
                if(model1[key] > model2[key]) return 1;
            }
            return 0;
        }
    }
})