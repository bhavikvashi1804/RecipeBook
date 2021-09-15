import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDown]',
})
export class DropDownDirective {

  @HostBinding('class.open')
  isOpened = false;

  constructor() {}

  @HostListener('click')
  onDropdownClick() {
    //toggle the open
    this.isOpened =  !this.isOpened;
  }
}
