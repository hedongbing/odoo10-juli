中国省市区/县三级联动组件
---------------

中国省市区/县三级联动组件，该组件支持响应式布局，并且包含了中国大部分城市地点，当然你也可以扩展，扩展如下：


修改文件static/src/js/city-picker.data.js添加相应的城市对应关系即可


---------------
注意：没有特殊情况基本上不用修改

使用示例：
<record id="web_address_view_form" model="ir.ui.view">
    <field name="name">add.view.form</field>
    <field name="model">web.address</field>
    <field name="arch" type="xml">
        <form string="test">
             <field name="address" widget="city_picker"/>
             <field name="now_address" widget="city_picker"/>
        </form>
    </field>
</record>
