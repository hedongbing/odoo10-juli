# -*- coding: utf-8 -*-
{
    'name': "City Picker",
    'summary': """中国省市区/县三级联动组件""",
    'description': """
        中国省市区/县三级联动组件，该组件支持响应式布局，并且包含了中国大部分城市地点，当然你也可以扩展，扩展具体查看：README.md
    """,
    "author": "LGHDB",
    'category': 'web',
    'version': '10.0.2.0.0',
    'depends': ['base'],
    'qweb': [
        'static/src/xml/city_picker_qweb.xml',
    ],
    'data': [
        'views/city_pricker_template.xml',
    ],
    'installable': True,
    'auto_install': True,
}