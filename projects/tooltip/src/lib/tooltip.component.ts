import { Component, Input } from '@angular/core';

@Component({
  selector: 'sb-tooltip',
  template: `
      <div [ngClass]="getClasses()">
        {{text}}
      </div>
      <ng-content></ng-content>
  `,
  styleUrls: ['./tooltip.scss']
})
export class TooltipComponent{

  @Input()
  public text:string = "Insira uma mensagem.";

  @Input()
  public position:
  'left' | 'right' | 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right' = 'left';

  getClasses(){
    return ['tooltip', this.position]
  }

}
