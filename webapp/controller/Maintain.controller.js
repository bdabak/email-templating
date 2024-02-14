sap.ui.define(
  ["./BaseController", "sap/ui/model/json/JSONModel", "../model/formatter"],
  function (BaseController, JSONModel, formatter) {
    "use strict";

    return BaseController.extend(
      "com.thy.ux.emailtemplate.controller.Maintain",
      {
        /* =========================================================== */
        /* lifecycle methods                                           */
        /* =========================================================== */
        onInit: function () {
          const oViewModel = new JSONModel({
            pageTitle: null,
            busy: false,
            emailTemplate: {
              TemplateId: null,
              TemplateCode: null,
              TemplateDescription: null,
              HtmlString: null,
            },
          });

          this.setModel(oViewModel, "maintainView");

          this.getRouter()
            .getRoute("maintain")
            .attachPatternMatched(this._onMaintainMatched, this);
        },

        /* =========================================================== */
        /* event handlers                                              */
        /* =========================================================== */
        onSaveTemplate: function (oEvent) {
          const oViewModel = this.getModel("maintainView");
          const oModel = this.getModel();

          let oPayload = {
            ...oViewModel.getProperty("/emailTemplate"),
          };

          if(oPayload.HtmlString === null || oPayload.HtmlString === ""){
            this.toastMessage("W", "WARNING_MESSAGE", "FIELD_OBLIGATORY", ["HTML kodu"]);
            return;
          }

          if(oPayload.TemplateCode === null || oPayload.TemplateCode === ""){
            this.toastMessage("W", "WARNING_MESSAGE", "FIELD_OBLIGATORY", ["Şablon Tanıcıtısı"]);
            return;
          }


          if(oPayload.TemplateDescription === null || oPayload.TemplateDescription === ""){
            this.toastMessage("W", "WARNING_MESSAGE", "FIELD_OBLIGATORY", ["Mail Başlığı"]);
            return;
          }

          this.openBusyFragment("TEMPLATE_BEING_SAVED", [])

          if(oPayload.TemplateId){
            oModel.update(`/EmailTemplateSet('${oPayload["TemplateId"]}')`, oPayload, {
              success: (oData) => {
                this.closeBusyFragment();
                this.toastMessage("S", "SUCCESS_MESSAGE", "TEMPLATE_UPDATED", []);
                this.getRouter().navTo("list", null, null, true); //--No history entry
              },
              error: (oError) => {
                this.toastMessage("E", "ERROR_MESSAGE", "TEMPLATE_SAVE_ERROR", []);
                this.closeBusyFragment();
                this.getRouter().navTo("list", null, null, true); //--No history entry
              },
            });
          }else{
            delete oPayload["TemplateId"];
            oModel.create("/EmailTemplateSet", oPayload, {
              success: (oData) => {
                this.closeBusyFragment();
                this.toastMessage("S", "SUCCESS_MESSAGE", "TEMPLATE_CREATED", []);
                this.getRouter().navTo("list", null, null, true); //--No history entry
              },
              error: (oError) => {
                this.toastMessage("E", "ERROR_MESSAGE", "TEMPLATE_SAVE_ERROR", []);
                this.closeBusyFragment();
                this.getRouter().navTo("list", null, null, true); //--No history entry
              },
            });
          }
        },
        onCancelEditing: function(){
          this.getRouter().navTo("list", null, null, true); //--No history entry
        },
        onDeleteTemplate: function(){
          const oViewModel = this.getModel("maintainView");
          const oModel = this.getModel();

          let oPayload = {
            ...oViewModel.getProperty("/emailTemplate"),
          };
          const doDelete = ()=>{
            this.openBusyFragment("TEMPLATE_BEING_DELETED", []);
            oModel.remove(`/EmailTemplateSet('${oPayload["TemplateId"]}')`, {
              success: () => {
                this.closeBusyFragment();
                this.toastMessage("S", "SUCCESS_MESSAGE", "TEMPLATE_DELETED", []);
                this.getRouter().navTo("list", null, null, true); //--No history entry
              },
              error: (oError) => {
                this.toastMessage("E", "ERROR_MESSAGE", "TEMPLATE_DELETE_ERROR", []);
                this.closeBusyFragment();
                this.getRouter().navTo("list", null, null, true); //--No history entry
              },
            });
          };

          this.confirmDialog({
            title: this.getText("TEMPLATE_DELETION", []),
            html: this.getText("TEMPLATE_WILL_BE_DELETED", []),
            icon: "warning",
            showConfirmButton: true,
            confirmButtonText: this.getText("DELETE_ACTION", []),
            confirmButtonColor: "#d33",
            cancelButtonText: this.getText("CANCEL_ACTION", []),
            cancelButtonColor: "#3085d6",
            confirmCallbackFn: doDelete.bind(this)
          });
        },
        /* =========================================================== */
        /* private methods                                             */
        /* =========================================================== */
        _onMaintainMatched: function (oEvent) {
          const sTemplateId = oEvent.getParameter("arguments").templateId;
          const oViewModel = this.getModel("maintainView");
          let sTitle;

          oViewModel.setProperty("/emailTemplate", {
            TemplateId: null,
              TemplateCode: null,
              TemplateDescription: null,
              HtmlString: null,
          });
          

          if (sTemplateId === "new") {
            sTitle = this.getText("CREATE_MODE", []);
          } else {
            sTitle = this.getText("EDIT_MODE", []);
            this._readTemplateProperties(sTemplateId);
          }

          oViewModel.setProperty("/pageTitle", sTitle);
        },
        _readTemplateProperties: function (sTemplateId) {
          const oModel = this.getModel();
          const oViewModel = this.getModel("maintainView");
          const sPath = oModel.createKey("/EmailTemplateSet", {
            TemplateId: sTemplateId,
          });
          this.openBusyFragment("READING_TEMPLATE_DATA", []);
          oModel.read(sPath, {
            success: (oData) => {
              oViewModel.setProperty("/emailTemplate", {
                TemplateId: oData.TemplateId,
                TemplateCode: oData.TemplateCode,
                TemplateDescription: oData.TemplateDescription,
                HtmlString: oData.HtmlString,
              });
              this.closeBusyFragment();
            },
            error: () => {
              this.closeBusyFragment();
              this.toastMessage(
                "E",
                "ERROR_MESSAGE",
                "TEMPLATE_INFO_NOT_READ",
                [sTemplateId]
              );
              this.getRouter().navTo("list", null, null, true); //--No history entry
            },
          });
        },
      }
    );
  }
);
