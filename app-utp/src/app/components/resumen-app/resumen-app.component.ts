import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumen-app',
  templateUrl: './resumen-app.component.html',
  styleUrls: ['./resumen-app.component.scss'],
  standalone: false
})
export class ResumenAppComponent {

@Input() tipo = '';

}
