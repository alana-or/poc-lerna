import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TooltipComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy90b29sdGlwL3NyYy9saWIvdG9vbHRpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVlqRCxNQUFNLE9BQU8sZ0JBQWdCO0lBVjdCO1FBYVMsU0FBSSxHQUFVLHNCQUFzQixDQUFDO1FBR3JDLGFBQVEsR0FDbUYsTUFBTSxDQUFDO0tBTTFHO0lBSkMsVUFBVTtRQUNSLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ25DLENBQUM7OzhHQVhVLGdCQUFnQjtrR0FBaEIsZ0JBQWdCLGtHQVJqQjs7Ozs7R0FLVDs0RkFHVSxnQkFBZ0I7a0JBVjVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRTs7Ozs7R0FLVDtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDOUI7OEJBSVEsSUFBSTtzQkFEVixLQUFLO2dCQUlDLFFBQVE7c0JBRGQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2ItdG9vbHRpcCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IFtuZ0NsYXNzXT1cImdldENsYXNzZXMoKVwiPlxuICAgICAgICB7e3RleHR9fVxuICAgICAgPC9kaXY+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL3Rvb2x0aXAuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBDb21wb25lbnR7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHRleHQ6c3RyaW5nID0gXCJJbnNpcmEgdW1hIG1lbnNhZ2VtLlwiO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwb3NpdGlvbjpcbiAgJ2xlZnQnIHwgJ3JpZ2h0JyB8ICd0b3AnIHwgJ3RvcC1sZWZ0JyB8ICd0b3AtcmlnaHQnIHwgJ2JvdHRvbScgfCAnYm90dG9tLWxlZnQnIHwgJ2JvdHRvbS1yaWdodCcgPSAnbGVmdCc7XG5cbiAgZ2V0Q2xhc3Nlcygpe1xuICAgIHJldHVybiBbJ3Rvb2x0aXAnLCB0aGlzLnBvc2l0aW9uXVxuICB9XG5cbn1cbiJdfQ==