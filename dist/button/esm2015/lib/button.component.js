import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ButtonComponent {
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
</button>`, isInline: true, styles: [":host button{padding:14px 16px;border-radius:4px;border:0;cursor:pointer}:host button.btn-primary:hover,:host button.btn-primary:focus,:host button.btn-secondary:hover,:host button.btn-secondary:focus,:host button.btn-tertiary:hover,:host button.btn-tertiary:focus,:host button.btn-primary-dark:hover,:host button.btn-primary-dark:focus,:host button.btn-secondary-dark:hover,:host button.btn-secondary-dark:focus,:host button.btn-tertiary-dark:hover,:host button.btn-tertiary-dark:focus{box-shadow:0 0 8px #3fa1d680}:host button.btn-primary.disabled:hover,:host button.btn-primary.disabled:focus,:host button.btn-secondary.disabled:hover,:host button.btn-secondary.disabled:focus,:host button.btn-tertiary.disabled:hover,:host button.btn-tertiary.disabled:focus,:host button.btn-primary-dark.disabled:hover,:host button.btn-primary-dark.disabled:focus,:host button.btn-secondary-dark.disabled:hover,:host button.btn-secondary-dark.disabled:focus,:host button.btn-tertiary-dark.disabled:hover,:host button.btn-tertiary-dark.disabled:focus{box-shadow:none}:host button.btn-primary{border:1px solid #1e1e1e;background-color:#1e1e1e;color:#fff}:host button.btn-primary.disabled{border:1px solid #b5b8bb;background-color:#b5b8bb;color:#6b7177}:host button.btn-primary.disabled:active{border:1px solid #b5b8bb}:host button.btn-primary:active{border:1px solid #1F8EC3}:host button.btn-secondary{border:1px solid;background-color:transparent;color:#1e1e1e}:host button.btn-secondary.disabled{border:1px solid #b5b8bb;background-color:#b5b8bb;color:#84888d}:host button.btn-secondary.disabled:hover,:host button.btn-secondary.disabled:focus{background-color:#b5b8bb}:host button.btn-secondary.disabled:active{border:1px solid #b5b8bb}:host button.btn-secondary:hover,:host button.btn-secondary:focus{background-color:#fff}:host button.btn-secondary:active{border:1px solid #1F8EC3}:host button.btn-tertiary{border:1px solid transparent;background-color:transparent;text-decoration:underline;color:#1e1e1e}:host button.btn-primary-dark{border:1px solid #ffffff;background-color:#fff;color:#09121c}:host button.btn-primary-dark.disabled{border:1px solid #ced0d2;background-color:#ced0d2;color:#9da0a4}:host button.btn-primary-dark.disabled:active{border:1px solid #ced0d2}:host button.btn-primary-dark:active{border:1px solid #1F8EC3}:host button.btn-secondary-dark{border:1px solid #ffffff;background-color:transparent;color:#fff}:host button.btn-secondary-dark.disabled{border:1px solid #ced0d2;background-color:#ced0d2;color:#9da0a4}:host button.btn-secondary-dark.disabled:active{border:1px solid #ced0d2}:host button.btn-secondary-dark:active{border:1px solid #1F8EC3}:host button.btn-tertiary-dark{background-color:transparent;text-decoration:underline;color:#fff}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2J1dHRvbi9zcmMvbGliL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVlqRCxNQUFNLE9BQU8sZUFBZTtJQVY1QjtRQWFTLFNBQUksR0FBeUMsVUFBVSxDQUFDO1FBR3hELFVBQUssR0FBcUIsT0FBTyxDQUFDO1FBR2xDLGFBQVEsR0FBWSxLQUFLLENBQUM7S0FnQmxDO0lBZEMsVUFBVTtRQUNSLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFakIsSUFBRyxJQUFJLENBQUMsUUFBUTtZQUNkLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFFeEIsT0FBTyxHQUFHLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLElBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxNQUFNO1lBQ3JCLE9BQU8sR0FBRyxPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRTdDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7NkdBdkJVLGVBQWU7aUdBQWYsZUFBZSxpSEFQakI7Ozs7O1VBS0Q7NEZBRUcsZUFBZTtrQkFWM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUM1QixRQUFRLEVBQUM7Ozs7O1VBS0Q7aUJBQ1Q7OEJBSVEsSUFBSTtzQkFEVixLQUFLO2dCQUlDLEtBQUs7c0JBRFgsS0FBSztnQkFJQyxRQUFRO3NCQURkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NiLWJ1dHRvbicsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi5zY3NzJ10sXG4gIHRlbXBsYXRlOmAgPGJ1dHRvblxuICAgIHR5cGU9XCJidXR0b25cIlxuICAgIFtuZ0NsYXNzXT1cImdldENsYXNzZXMoKVwiXG4gID5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9idXR0b24+YFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0eXBlOiAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICd0ZXJ0aWFyeScgPSAndGVydGlhcnknO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0aGVtZTogJ2RhcmsnIHwgJ2xpZ2h0JyA9ICdsaWdodCc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgZ2V0Q2xhc3Nlcygpe1xuICAgIGxldCBkaXNhYmxlZCA9ICcnO1xuICAgIGxldCBjbGFzc2VzID0gJyc7XG5cbiAgICBpZih0aGlzLmRpc2FibGVkKVxuICAgICAgZGlzYWJsZWQgPSAnZGlzYWJsZWQnO1xuXG4gICAgY2xhc3NlcyA9IGBidG4tJHt0aGlzLnR5cGV9YDtcbiAgICBpZih0aGlzLnRoZW1lID09ICdkYXJrJylcbiAgICAgIGNsYXNzZXMgPSBgYnRuLSR7dGhpcy50eXBlfS0ke3RoaXMudGhlbWV9YDtcblxuICAgIHJldHVybiBbY2xhc3NlcywgZGlzYWJsZWRdO1xuICB9XG5cbn1cbiJdfQ==