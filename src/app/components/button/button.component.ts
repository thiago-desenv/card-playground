import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input({ required: true }) buttonText: string = '';
  @Input({ required: true }) buttonStyle: 'white' | 'purple' = 'white';
  @Input('disabled') isDisabled: boolean = false;

  @Output('clicked') buttonClickedEmitt = new EventEmitter<void>();

  onButtonClicked() {
    this.buttonClickedEmitt.emit();
  }
}
