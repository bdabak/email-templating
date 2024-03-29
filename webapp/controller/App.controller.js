sap.ui.define([
    "./BaseController",
    "com/smod/ux/lib/thirdparty/swal",
    "com/smod/ux/lib/thirdparty/lodash",
    "sap/ui/model/json/JSONModel"
], function (BaseController, SwalJS, LodashJS,JSONModel) {
    "use strict";

    return BaseController.extend("com.thy.ux.emailtemplate.controller.App", {

        onInit : function () {
            var oViewModel,
                fnSetAppNotBusy,
                iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();

            oViewModel = new JSONModel({
                busy : true,
                delay : 0,
            });
            this.setModel(oViewModel, "appView");

            fnSetAppNotBusy = function() {
                oViewModel.setProperty("/busy", false);
                oViewModel.setProperty("/delay", iOriginalBusyDelay);
            };

            // since then() has no "reject"-path attach to the MetadataFailed-Event to disable the busy indicator in case of an error
            this.getOwnerComponent().getModel().metadataLoaded().then(fnSetAppNotBusy);
            this.getOwnerComponent().getModel().attachMetadataFailed(fnSetAppNotBusy);

            // apply content density mode to root view
            this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
        }

    });
});