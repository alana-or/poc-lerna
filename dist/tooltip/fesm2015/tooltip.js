import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class TooltipService {
    constructor() { }
}
TooltipService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: TooltipService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
TooltipService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: TooltipService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: TooltipService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class TooltipComponent {
    constructor() {
        this.text = "Insira uma mensagem.";
        this.position = 'left';
    }
    getClasses() {
        return ['tooltip', this.position];
    }
}
TooltipComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: TooltipComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TooltipComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: TooltipComponent, selector: "sb-tooltip", inputs: { text: "text", position: "position" }, ngImport: i0, template: `
      <div [ngClass]="getClasses()">
        {{text}}
      </div>
      <ng-content></ng-content>
  `, isInline: true, styles: [":host{position:relative}:host:hover .tooltip,:host:active .tooltip{opacity:1}:host .tooltip{position:absolute;background-color:#222a33;max-width:240px;border-radius:4px;padding:8px;width:max-content;text-align:left;color:#fff;font-size:14px;opacity:0}:host .tooltip:before{content:\"\";position:absolute;width:15px;height:15px;z-index:-1;background:#222a33;transform:rotate(45deg)}:host .tooltip.right{top:50%;transform:translate(calc(100% + 10px),-50%);right:0}:host .tooltip.right:before{left:-5px;top:50%;transform:translatey(-50%) rotate(45deg)}:host .tooltip.left{top:50%;transform:translate(calc(-100% - 10px),-50%);left:0}:host .tooltip.left:before{right:-5px;top:50%;transform:translatey(-50%) rotate(45deg)}:host .tooltip.top{left:50%;top:0;transform:translate(-50%,calc(-100% - 10px));right:50%}:host .tooltip.top:before{bottom:-5px;transform:translate(-50%) rotate(45deg);left:50%}:host .tooltip.top-right{top:0;transform:translateY(calc(-100% - 10px));left:0}:host .tooltip.top-right:before{bottom:-5px;left:5px}:host .tooltip.top-left{top:0;transform:translateY(calc(-100% - 10px));right:0}:host .tooltip.top-left:before{bottom:-5px;right:5px}:host .tooltip.bottom{left:50%;bottom:0;transform:translate(-50%,calc(100% + 10px));right:50%}:host .tooltip.bottom:before{top:-5px;transform:translate(-50%) rotate(45deg);left:50%}:host .tooltip.bottom-right{bottom:0;transform:translateY(calc(100% + 10px));left:0}:host .tooltip.bottom-right:before{top:-5px}:host .tooltip.bottom-left{bottom:0;transform:translateY(calc(100% + 10px));right:0}:host .tooltip.bottom-left:before{right:5px;top:-5px}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: TooltipComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sb-tooltip',
                    template: `
      <div [ngClass]="getClasses()">
        {{text}}
      </div>
      <ng-content></ng-content>
  `,
                    styleUrls: ['./tooltip.scss']
                }]
        }], propDecorators: { text: [{
                type: Input
            }], position: [{
                type: Input
            }] } });

class TooltipModule {
}
TooltipModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: TooltipModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TooltipModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: TooltipModule, declarations: [TooltipComponent], imports: [CommonModule], exports: [TooltipComponent] });
TooltipModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: TooltipModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: TooltipModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TooltipComponent
                    ],
                    imports: [
                        CommonModule
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

export { TooltipComponent, TooltipModule, TooltipService };
//# sourceMappingURL=tooltip.js.map
