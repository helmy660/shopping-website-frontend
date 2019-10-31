import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') toggle: boolean = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.toggle = this.elRef.nativeElement.contains(event.target) ? !this.toggle : false;
  }
  constructor(private elRef: ElementRef) {}
}
