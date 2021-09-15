import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDown]',
})
export class DropDownDirective {

  @HostBinding('class.open')
  isOpened = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('click')
  onDropdownClick() {
    //toggle the open
    //this.isOpened =  this.elementRef.nativeElement.contains(event?.target);
    this.isOpened = !this.isOpened;
  }
}
