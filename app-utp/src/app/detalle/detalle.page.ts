import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ResumenAppComponent } from '../components/resumen-app/resumen-app.component';
import { SelectorTipoComponent } from '../components/selector-tipo/selector-tipo.component';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  imports: [IonicModule, CommonModule, ResumenAppComponent, SelectorTipoComponent],
  standalone: false
})

export class DetallePage {
  tipo = '';
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.tipo = params['tipo'] || 'Sin tipo seleccionado';
    });
  }
}
