import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class ButtonService {
    constructor() { }
}
ButtonService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: ButtonService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ButtonService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: ButtonService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: ButtonService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class ButtonComponent {
    constructor() {
        this.type = 'tertiary';
        this.theme = 'light';
        this.disabled = false;
    }
    getClasses() {
        let disabled = '';
        let classes = '';
        if (this.disabled)
            disabled = 'disabled';
        classes = `btn-${this.type}`;
        if (this.theme == 'dark')
            classes = `btn-${this.type}-${this.theme}`;
        return [classes, disabled];
    }
}
ButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: ButtonComponent, selector: "sb-button", inputs: { type: "type", theme: "theme", disabled: "disabled" }, ngImport: i0, template: ` <button
    type="button"
    [ngClass]="getClasses()"
  >
  <ng-content></ng-content>
</button>`, isInline: true, styles: [":host button{padding:14px 16px;border-radius:4px;border:0;cursor:pointer}:host button.btn-primary:hover,:host button.btn-primary:focus,:host button.btn-secondary:hover,:host button.btn-secondary:focus,:host button.btn-tertiary:hover,:host button.btn-tertiary:focus,:host button.btn-primary-dark:hover,:host button.btn-primary-dark:focus,:host button.btn-secondary-dark:hover,:host button.btn-secondary-dark:focus,:host button.btn-tertiary-dark:hover,:host button.btn-tertiary-dark:focus{box-shadow:0 0 8px #3fa1d680}:host button.btn-primary.disabled:hover,:host button.btn-primary.disabled:focus,:host button.btn-secondary.disabled:hover,:host button.btn-secondary.disabled:focus,:host button.btn-tertiary.disabled:hover,:host button.btn-tertiary.disabled:focus,:host button.btn-primary-dark.disabled:hover,:host button.btn-primary-dark.disabled:focus,:host button.btn-secondary-dark.disabled:hover,:host button.btn-secondary-dark.disabled:focus,:host button.btn-tertiary-dark.disabled:hover,:host button.btn-tertiary-dark.disabled:focus{box-shadow:none}:host button.btn-primary{border:1px solid #666666;background-color:#666;color:#fff}:host button.btn-primary.disabled{border:1px solid #b5b8bb;background-color:#b5b8bb;color:#6b7177}:host button.btn-primary.disabled:active{border:1px solid #b5b8bb}:host button.btn-primary:active{border:1px solid #1F8EC3}:host button.btn-secondary{border:1px solid;background-color:transparent;color:#666}:host button.btn-secondary.disabled{border:1px solid #b5b8bb;background-color:#b5b8bb;color:#84888d}:host button.btn-secondary.disabled:hover,:host button.btn-secondary.disabled:focus{background-color:#b5b8bb}:host button.btn-secondary.disabled:active{border:1px solid #b5b8bb}:host button.btn-secondary:hover,:host button.btn-secondary:focus{background-color:#fff}:host button.btn-secondary:active{border:1px solid #1F8EC3}:host button.btn-tertiary{border:1px solid transparent;background-color:transparent;text-decoration:underline;color:#666}:host button.btn-primary-dark{border:1px solid #ffffff;background-color:#fff;color:#09121c}:host button.btn-primary-dark.disabled{border:1px solid #ced0d2;background-color:#ced0d2;color:#9da0a4}:host button.btn-primary-dark.disabled:active{border:1px solid #ced0d2}:host button.btn-primary-dark:active{border:1px solid #1F8EC3}:host button.btn-secondary-dark{border:1px solid #ffffff;background-color:transparent;color:#fff}:host button.btn-secondary-dark.disabled{border:1px solid #ced0d2;background-color:#ced0d2;color:#9da0a4}:host button.btn-secondary-dark.disabled:active{border:1px solid #ced0d2}:host button.btn-secondary-dark:active{border:1px solid #1F8EC3}:host button.btn-tertiary-dark{background-color:transparent;text-decoration:underline;color:#fff}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sb-button',
                    styleUrls: ['./button.scss'],
                    template: ` <button
    type="button"
    [ngClass]="getClasses()"
  >
  <ng-content></ng-content>
</button>`
                }]
        }], propDecorators: { type: [{
                type: Input
            }], theme: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

class ButtonModule {
}
ButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: ButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: ButtonModule, declarations: [ButtonComponent], imports: [CommonModule], exports: [ButtonComponent] });
ButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: ButtonModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: ButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ButtonComponent
                    ],
                    imports: [
                        CommonModule
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

export { ButtonComponent, ButtonModule, ButtonService };
//# sourceMappingURL=button.js.map
