import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() id: string;
  @Input() name: string;
  @Input() label: string;
  @Input() placeHolder!: string;
  @Input() pattern!: string;
  @Input() minLength!: number;
  @Input() maxLength!: number;
  @Input() value!: string;
  @Input() input: string;
  @Input() class!: string;
  @Output() ngModelChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() blur: EventEmitter<void> = new EventEmitter<void>();
  @Output() touch: EventEmitter<void> = new EventEmitter<void>();
  @Output() focus: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}
  onChange: any = (event: string) => {
    this.ngModelChange.emit(event);
  };

  onBlur() {
    this.blur.emit();
  }
  onFocus() {
    this.focus.emit();
  }
  onTouch() {
    this.touch.emit();
  }
}
