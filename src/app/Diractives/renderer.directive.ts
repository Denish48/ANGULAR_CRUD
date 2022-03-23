import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
@Directive({
  selector: '[appRenderer]',
})
export class RendererDirective implements OnInit {
  constructor(private element: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.setStyle(
      this.element.nativeElement,
      'background-color',
      'yellow'
    );
  }

  @HostListener('mouseover') onmouseover(event: Event) {
    this.render.setStyle(
      this.element.nativeElement,
      'background-color',
      'greenyellow'
    );
  }
  @HostListener('mouseleave') onmouseleave(event: Event) {
    this.render.setStyle(
      this.element.nativeElement,
      'background-color',
      'yellow'
    );
  }
}
