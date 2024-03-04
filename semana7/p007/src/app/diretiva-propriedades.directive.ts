import { Directive, Input, Output, EventEmitter, ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { ButtonComponent } from './button/button.component';

@Directive({
  selector: '[appDiretivaPropriedades]'
})
export class DiretivaPropriedadesDirective {
  @Output() select = new EventEmitter<string>();

  constructor(private elementRef: ElementRef, private renderer: Renderer2, private viewContainer: ViewContainerRef) { }

  @Input() set appDiretivaPropriedades(veiculos: string[]) {
    this.renderizadorVeiculos(veiculos);
  }

  private renderizadorVeiculos(veiculos: string[]) {
    veiculos.forEach(veiculo => {
      const component = this.viewContainer.createComponent(ButtonComponent);
  
      component.instance.text = veiculo;

      this.renderer.listen(component.location.nativeElement, 'click', () => {
        this.select.emit(veiculo);
      });

      this.renderer.appendChild(this.elementRef.nativeElement, component.location.nativeElement);

    });
  }

}
