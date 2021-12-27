import * as i0 from "@angular/core";
export declare class ButtonComponent {
    type: 'primary' | 'secondary' | 'tertiary';
    theme: 'dark' | 'light';
    disabled: boolean;
    getClasses(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "sb-button", never, { "type": "type"; "theme": "theme"; "disabled": "disabled"; }, {}, never, ["*"]>;
}
