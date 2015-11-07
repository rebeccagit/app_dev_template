/**
 * Created by Sean Olson on 11/1/2015.
 */

//creates an object variable, RSJW, that drives the app
var RJSW = (function(){

    //creates a scaffolding that provides a basic structure for the app
    var rsjw = {data: {}, view: {}};

    //maps in all of the data and view's methods and properties to the object
    rsjw.init = function(){
        rsjw.data.title =  rsjw.plugin_config.page_title;
        rsjw.data.text = rsjw.plugin_config.intro;
        rsjw.data.header = rsjw.plugin_data.header;
        rsjw.data.body = rsjw.plugin_data.body;
        rsjw.data.footer = rsjw.plugin_data.footer;
        rsjw.view.schema = rsjw.plugin_config.display_schema;
        rsjw.view.loadTitle = rsjw.plugin_ui.loadTitle;
        rsjw.view.loadBody = rsjw.plugin_ui.loadBody;
        rsjw.view.loadFooter = rsjw.plugin_ui.loadFooter;

    };

    //loads the page using the data, properties and methods mapped-in by the init method
    rsjw.loadView = function(){
        RJSW.view.loadTitle(rsjw.view.schema, rsjw.data);
        RJSW.view.loadBody(rsjw.view.schema, rsjw.data);
        RJSW.view.loadFooter(rsjw.view.schema, rsjw.data);
    };

    return rsjw;

})();
