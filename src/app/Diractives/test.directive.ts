import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appTest]',
})
export class TestDirective implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    (this.element.nativeElement as HTMLElement).style.color = 'blue';
  }
}
