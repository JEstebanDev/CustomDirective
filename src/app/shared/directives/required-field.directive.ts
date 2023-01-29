import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ccRequiredField]',
})
export class RequiredFieldDirective implements OnInit {
  private _color: string = 'red';
  private _message: string = 'Required!';
  htmlElement: ElementRef<HTMLElement>;
  @Input() set color(color: string) {
    this._color = color;
    this.setColor();
  }
  @Input() set message(message: string) {
    this._message = message;
    this.setMessage();
  }

  @Input() set valid(valid: boolean) {
    if (valid) {
      this.htmlElement.nativeElement.classList.add('invisible');
    } else {
      this.htmlElement.nativeElement.classList.remove('invisible');
    }
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
    this.htmlElement.nativeElement.classList.add('form-text');
    this.htmlElement.nativeElement.classList.add('text-capitalize');
    //this.htmlElement.nativeElement.className = 'form-text text-capitalize'; //alternative
  }

  ngOnInit(): void {
    this.setColor();
    this.setMessage();
  }

  setColor(): void {
    set: this.htmlElement.nativeElement.style.color = this._color;
  }
  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this._message;
  }
}
