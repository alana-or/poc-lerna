(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('tooltip', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.tooltip = {}, global.ng.core, global.ng.common));
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

    var TooltipService = /** @class */ (function () {
        function TooltipService() {
        }
        return TooltipService;
    }());
    TooltipService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: TooltipService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    TooltipService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: TooltipService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: TooltipService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var TooltipComponent = /** @class */ (function () {
        function TooltipComponent() {
            this.text = "Insira uma mensagem.";
            this.position = 'left';
        }
        TooltipComponent.prototype.getClasses = function () {
            return ['tooltip', this.position];
        };
        return TooltipComponent;
    }());
    TooltipComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: TooltipComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    TooltipComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: TooltipComponent, selector: "sb-tooltip", inputs: { text: "text", position: "position" }, ngImport: i0__namespace, template: "\n      <div [ngClass]=\"getClasses()\">\n        {{text}}\n      </div>\n      <ng-content></ng-content>\n  ", isInline: true, styles: [":host{position:relative}:host:hover .tooltip,:host:active .tooltip{opacity:1}:host .tooltip{position:absolute;background-color:#222a33;max-width:240px;border-radius:4px;padding:8px;width:max-content;text-align:left;color:#fff;font-size:14px;opacity:0}:host .tooltip:before{content:\"\";position:absolute;width:15px;height:15px;z-index:-1;background:#222a33;transform:rotate(45deg)}:host .tooltip.right{top:50%;transform:translate(calc(100% + 10px),-50%);right:0}:host .tooltip.right:before{left:-5px;top:50%;transform:translatey(-50%) rotate(45deg)}:host .tooltip.left{top:50%;transform:translate(calc(-100% - 10px),-50%);left:0}:host .tooltip.left:before{right:-5px;top:50%;transform:translatey(-50%) rotate(45deg)}:host .tooltip.top{left:50%;top:0;transform:translate(-50%,calc(-100% - 10px));right:50%}:host .tooltip.top:before{bottom:-5px;transform:translate(-50%) rotate(45deg);left:50%}:host .tooltip.top-right{top:0;transform:translateY(calc(-100% - 10px));left:0}:host .tooltip.top-right:before{bottom:-5px;left:5px}:host .tooltip.top-left{top:0;transform:translateY(calc(-100% - 10px));right:0}:host .tooltip.top-left:before{bottom:-5px;right:5px}:host .tooltip.bottom{left:50%;bottom:0;transform:translate(-50%,calc(100% + 10px));right:50%}:host .tooltip.bottom:before{top:-5px;transform:translate(-50%) rotate(45deg);left:50%}:host .tooltip.bottom-right{bottom:0;transform:translateY(calc(100% + 10px));left:0}:host .tooltip.bottom-right:before{top:-5px}:host .tooltip.bottom-left{bottom:0;transform:translateY(calc(100% + 10px));right:0}:host .tooltip.bottom-left:before{right:5px;top:-5px}\n"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: TooltipComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'sb-tooltip',
                        template: "\n      <div [ngClass]=\"getClasses()\">\n        {{text}}\n      </div>\n      <ng-content></ng-content>\n  ",
                        styleUrls: ['./tooltip.scss']
                    }]
            }], propDecorators: { text: [{
                    type: i0.Input
                }], position: [{
                    type: i0.Input
                }] } });

    var TooltipModule = /** @class */ (function () {
        function TooltipModule() {
        }
        return TooltipModule;
    }());
    TooltipModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: TooltipModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    TooltipModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: TooltipModule, declarations: [TooltipComponent], imports: [i1.CommonModule], exports: [TooltipComponent] });
    TooltipModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: TooltipModule, imports: [[
                i1.CommonModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: TooltipModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            TooltipComponent
                        ],
                        imports: [
                            i1.CommonModule
                        ],
                        exports: [
                            TooltipComponent
                        ]
                    }]
            }] });

    /*
     * Public API Surface of tooltip
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TooltipComponent = TooltipComponent;
    exports.TooltipModule = TooltipModule;
    exports.TooltipService = TooltipService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=tooltip.umd.js.map
