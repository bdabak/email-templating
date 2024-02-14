sap.ui.define(
  [
    "sap/ui/core/Control",
    "com/thy/ux/emailtemplate/controls/thirdparty/uikit/js/uikit",
    "com/thy/ux/emailtemplate/controls/thirdparty/uikit/dependency/codemirror",
    "com/thy/ux/emailtemplate/controls/thirdparty/uikit/dependency/highlight",
    "com/thy/ux/emailtemplate/controls/thirdparty/uikit/js/components/htmleditor",
  ],
  function (Control, UiKitJS, CodeMirrorJS, HighLightJS, UiKitHtmlEditorJS) {
    "use strict";

    return Control.extend("com.thy.ux.emailtemplate.controls.HtmlEditor", {
      metadata: {
        properties: {
          htmlString: {
            type: "string",
            bindable: true,
            defaultValue: "",
          },
        },
        aggregations: {},
        events: {},
      },
      /**
       * @override
       * @param {jQuery.Event} oEvent <p>onAfterRendering event object</p>
       */
      onAfterRendering: function (oEvent) {
        
        if (!this.rendered) {
          this.rendered = true;
          this.htmleditor = UIkit.htmleditor(this.getDomRef(), {
            mode: "split",
            height: "800px",
            width: "100%",
            iframe: false,
          });
          //Get a reference to the CodeMirror editor

          
        }

        const editor = $(".CodeMirror")[0].CodeMirror;
        editor.off("change");
        editor.on("change", (e) => {
          this.setProperty("htmlString", editor.getValue(), true);
        });
        //You can then use it as you wish
        editor.setValue(this.getHtmlString());
      },
      init: function () {
        const libraryPath = jQuery.sap.getModulePath(
          "com.thy.ux.emailtemplate"
        ); //get the server location of the ui library
        jQuery.sap.includeStyleSheet(
          libraryPath + "/controls/thirdparty/uikit/css/uikit.css"
        );
        jQuery.sap.includeStyleSheet(
          libraryPath + "/controls/thirdparty/uikit/dependency/codemirror.css"
        );
        jQuery.sap.includeStyleSheet(
          libraryPath + "/controls/thirdparty/uikit/dependency/highlight.css"
        );

        jQuery.sap.includeStyleSheet(
          libraryPath +
            "/controls/thirdparty/uikit/css/components/htmleditor.css"
        );
      },
      renderer: function (oRM, oControl) {
        oRM
          .openStart("textarea", oControl)
          //   .attr("data-uk-htmleditor", {mode: 'split'})
          .style("visibility","hidden")
          .style("height","0px")
          .openEnd()
          // .text(oControl.getHtmlString())
          .close("textarea");
      },
    });
  }
);
