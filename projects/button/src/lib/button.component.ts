import { Component, Input } from '@angular/core';

@Component({
  selector: 'sb-button',
  styleUrls: ['./button.scss'],
  template:` <button
    type="button"
    [ngClass]="getClasses()"
  >
  <ng-content></ng-content>
</button>`
})
export class ButtonComponent {

  @Input()
  public type: 'primary' | 'secondary' | 'tertiary' = 'tertiary';

  @Input()
  public theme: 'dark' | 'light' = 'light';

  @Input()
  public disabled: boolean = false;

  getClasses(){
    let disabled = '';
    let classes = '';

    if(this.disabled)
      disabled = 'disabled';

    classes = `btn-${this.type}`;
    if(this.theme == 'dark')
      classes = `btn-${this.type}-${this.theme}`;

    return [classes, disabled];
  }

}
