// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        result:cc.Label,
        input:cc.EditBox,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    showInstallPrompt(){
        cc.androidInstant.showInstallPrompt();
    },

    isInstantApp(){
        this.result.string = cc.androidInstant.isInstantApp();
    },

    getInstantAppCookie(){
        this.result.string = cc.androidInstant.getInstantAppCookie();
    },

    setInstantAppCookie(){
        this.result.string = cc.androidInstant.setInstantAppCookie(this.input.string);
    },

    getInstantAppCookieMaxSize(){
        this.result.string= cc.androidInstant.getInstantAppCookieMaxSize();
    },

    clearCookie(){
        this.result.string = cc.androidInstant.clearInstantAppCookie();
    }

    // update (dt) {},
});
