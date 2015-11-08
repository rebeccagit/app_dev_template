/**
 * Created by Sean Olson on 11/1/2015.
 */

RJSW.plugin_config = {
    display_schema:{
        structure: "table",
        definition: {
            header_template: "<div class=\"data-head\"><div class=\"data-row\"><div class=\"data-cell\">{|COL_HEADER|}</div></div></div>",
            row_template: "<div class=\"data-row\"><div class=\"data-cell\">{|BOOK_TITLE|}</div></div>",
            footer_template: "<div class=\"foot-item\">{|FOOT_ITEM|}</div>"
        },
        scriptHeader: function(data, template){
            if(data.header && data.header.length) {
                return template.replace("{|COL_HEADER|}", data.header[0]);
            } else {
                return template.replace("{|COL_HEADER|}", "Header");
            }
        },
        scriptRow: function(item, template){
            var text_value = "<a href=\"" + item.url + "\" target=\"_bookView\">" + item.title + "</a>";
            return template.replace("{|BOOK_TITLE|}", text_value);
        },
        scriptFooter: function(item, template){
            var text_value = "<a href=\"" + item.url + "\" >" + item.text + "</a>";
            return template.replace("{|FOOT_ITEM|}", text_value);
        }
    },
    page_title: "Top-Rated JavaScript Books",
    intro: "A list of the top-rated JavaScript books sold on Amazon.com.  They are listed in no particular order.  Please note that because some " +
    "reviews are placed by bots and paid reviewers, you should proceed with caution."
};
