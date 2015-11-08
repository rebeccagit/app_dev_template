/**
 * Created by Sean Olson on 11/1/2015.
 */

RJSW.plugin_ui = {

    loadTitle: function(schema, data) {
        document.getElementById('title').innerHTML = data.title;
        document.getElementById('heading').innerHTML = data.text;
    },

    loadBody: function(schema, data){

        if(schema.structure == 'table'){
            var table_buffer = '';
            table_buffer += schema.scriptHeader(RJSW.data, schema.definition.header_template);
            for(var i = 0; i < data.body.length; i++) {
                table_buffer += schema.scriptRow(data.body[i], schema.definition.row_template);
            }
            document.getElementById('content').innerHTML = table_buffer;
        }

    },

    loadFooter: function(schema, data){

        var footer_buffer = '';
        for(var i = 0; i < data.footer.length; i++) {
            footer_buffer += schema.scriptFooter(data.footer[i], schema.definition.footer_template);
        }
        document.getElementById('footer').innerHTML = footer_buffer;

    }
}
