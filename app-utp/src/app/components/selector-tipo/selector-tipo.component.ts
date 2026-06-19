import { Component, EventEmitter, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-selector-tipo',
  templateUrl: './selector-tipo.component.html',
  styleUrls: ['./selector-tipo.component.scss'],
})
export class SelectorTipoComponent {
 @Output() tipoCambiado = new EventEmitter<string>();
 elegir(tipo: string) {
 this.tipoCambiado.emit(tipo);
 }
}
