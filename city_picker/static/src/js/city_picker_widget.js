odoo.define('web.cityWidget', function (require) {
"use strict";

var core = require('web.core');
var form_widgets = require('web.form_widgets');
var common = require('web.form_common');


var CityWidget = common.AbstractField.extend(common.ReinitializeFieldMixin,{

    template: "CityPickerField",

    init: function(field_manager, node) {
        this._super(field_manager, node);
        this.no_rerender = false;
    },
    build_widget: function () {
        this.$input = this.$('input.o_datepicker_input');
    },
    start_widget: function(){
        var options = this.build_options();
        var _options = _.defaults({"responsive": true}, options);
        this.$input.citypicker(_options);
    },
    destroy_widget: function () {
        this.$input.citypicker("destroy");
    },
    build_options: function () {
        var value = this.get_value();
        if (value == "" || value == undefined) return {};
        var options = {};
        var vals = value.split('/');
        options["province"] = vals[0];
        if(vals.length == 2){
            options["city"] = vals[1];
        }else if (vals.length == 3){
            options["city"] = vals[1];
            options["district"] = vals[2];
        }
        return options;
    },
    is_false: function () {
        var result = this.get('value') === '' || this._super();
        return result
    },
    initialize_content: function() {
        if (this.$input) {
            this.destroy_widget();
            this.$input = undefined;
        }
        if(!this.get("effective_readonly")){
            if(!this.$input){
                this.build_widget();
            }
             var self = this;
            this.$input.on('selected_val', function () {
                self.internal_set_value(self.$input.val());
            });
        }
    },
    internal_set_value:function (value_) {
        var tmp = this.no_rerender;
        this.no_rerender = true;
        this.set({'value': value_});
        this.no_rerender = tmp;
        this.$input.val(this.get('value'));
    },
    render_value: function() {
        if (this.get("effective_readonly")) {
            this.$el.text(this.get('value') ? this.get('value'): '');
        } else {
            if(this.$input){
                 this.destroy_widget();
                 this.$input = undefined;
            }
            this.build_widget();
            this.$input.val(this.get_value());
            this.start_widget();
        }
    },
    focus: function() {
        if (!this.get("effective_readonly")) {
            return this.$input.focus();
        }
        return false;
    }
});

core.form_widget_registry.add('city_picker', CityWidget);
});