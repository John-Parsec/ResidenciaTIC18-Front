import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() color: string = 'blue';
  @Input() color_selected: string = 'darkblue';
}
