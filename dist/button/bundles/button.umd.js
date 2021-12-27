(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('button', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.button = {}, global.ng.core, global.ng.common));
})(this, (function (exports, i0, i1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    var ButtonService = /** @class */ (function () {
        function ButtonService() {
        }
        return ButtonService;
    }());
    ButtonService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: ButtonService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ButtonService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: ButtonService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: ButtonService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
            this.type = 'tertiary';
            this.theme = 'light';
            this.disabled = false;
        }
        ButtonComponent.prototype.getClasses = function () {
            var disabled = '';
            var classes = '';
            if (this.disabled)
                disabled = 'disabled';
            classes = "btn-" + this.type;
            if (this.theme == 'dark')
                classes = "btn-" + this.type + "-" + this.theme;
            return [classes, disabled];
        };
        return ButtonComponent;
    }());
    ButtonComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: ButtonComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    ButtonComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: ButtonComponent, selector: "sb-button", inputs: { type: "type", theme: "theme", disabled: "disabled" }, ngImport: i0__namespace, template: " <button\n    type=\"button\"\n    [ngClass]=\"getClasses()\"\n  >\n  <ng-content></ng-content>\n</button>", isInline: true, styles: [":host button{padding:14px 16px;border-radius:4px;border:0;cursor:pointer}:host button.btn-primary:hover,:host button.btn-primary:focus,:host button.btn-secondary:hover,:host button.btn-secondary:focus,:host button.btn-tertiary:hover,:host button.btn-tertiary:focus,:host button.btn-primary-dark:hover,:host button.btn-primary-dark:focus,:host button.btn-secondary-dark:hover,:host button.btn-secondary-dark:focus,:host button.btn-tertiary-dark:hover,:host button.btn-tertiary-dark:focus{box-shadow:0 0 8px #3fa1d680}:host button.btn-primary.disabled:hover,:host button.btn-primary.disabled:focus,:host button.btn-secondary.disabled:hover,:host button.btn-secondary.disabled:focus,:host button.btn-tertiary.disabled:hover,:host button.btn-tertiary.disabled:focus,:host button.btn-primary-dark.disabled:hover,:host button.btn-primary-dark.disabled:focus,:host button.btn-secondary-dark.disabled:hover,:host button.btn-secondary-dark.disabled:focus,:host button.btn-tertiary-dark.disabled:hover,:host button.btn-tertiary-dark.disabled:focus{box-shadow:none}:host button.btn-primary{border:1px solid #1e1e1e;background-color:#1e1e1e;color:#fff}:host button.btn-primary.disabled{border:1px solid #b5b8bb;background-color:#b5b8bb;color:#6b7177}:host button.btn-primary.disabled:active{border:1px solid #b5b8bb}:host button.btn-primary:active{border:1px solid #1F8EC3}:host button.btn-secondary{border:1px solid;background-color:transparent;color:#1e1e1e}:host button.btn-secondary.disabled{border:1px solid #b5b8bb;background-color:#b5b8bb;color:#84888d}:host button.btn-secondary.disabled:hover,:host button.btn-secondary.disabled:focus{background-color:#b5b8bb}:host button.btn-secondary.disabled:active{border:1px solid #b5b8bb}:host button.btn-secondary:hover,:host button.btn-secondary:focus{background-color:#fff}:host button.btn-secondary:active{border:1px solid #1F8EC3}:host button.btn-tertiary{border:1px solid transparent;background-color:transparent;text-decoration:underline;color:#1e1e1e}:host button.btn-primary-dark{border:1px solid #ffffff;background-color:#fff;color:#09121c}:host button.btn-primary-dark.disabled{border:1px solid #ced0d2;background-color:#ced0d2;color:#9da0a4}:host button.btn-primary-dark.disabled:active{border:1px solid #ced0d2}:host button.btn-primary-dark:active{border:1px solid #1F8EC3}:host button.btn-secondary-dark{border:1px solid #ffffff;background-color:transparent;color:#fff}:host button.btn-secondary-dark.disabled{border:1px solid #ced0d2;background-color:#ced0d2;color:#9da0a4}:host button.btn-secondary-dark.disabled:active{border:1px solid #ced0d2}:host button.btn-secondary-dark:active{border:1px solid #1F8EC3}:host button.btn-tertiary-dark{background-color:transparent;text-decoration:underline;color:#fff}\n"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: ButtonComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'sb-button',
                        styleUrls: ['./button.scss'],
                        template: " <button\n    type=\"button\"\n    [ngClass]=\"getClasses()\"\n  >\n  <ng-content></ng-content>\n</button>"
                    }]
            }], propDecorators: { type: [{
                    type: i0.Input
                }], theme: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }] } });

    var ButtonModule = /** @class */ (function () {
        function ButtonModule() {
        }
        return ButtonModule;
    }());
    ButtonModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: ButtonModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ButtonModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: ButtonModule, declarations: [ButtonComponent], imports: [i1.CommonModule], exports: [ButtonComponent] });
    ButtonModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: ButtonModule, imports: [[
                i1.CommonModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: ButtonModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ButtonComponent
                        ],
                        imports: [
                            i1.CommonModule
                        ],
                        exports: [
                            ButtonComponent
                        ]
                    }]
            }] });

    /*
     * Public API Surface of button
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ButtonComponent = ButtonComponent;
    exports.ButtonModule = ButtonModule;
    exports.ButtonService = ButtonService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=button.umd.js.map
