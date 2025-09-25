import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.html',
  styleUrls: ['./galeria.css']
})
export class GaleriaComponent {
trabajos = [
  { titulo: 'SALA DE ESPERA', imagen: '/SALA_ESPERA.jpg' },
  { titulo: 'QUIRUFANO', imagen: '/QUIRUFANO.jpg' },
  { titulo: 'SALA DE BAÑOS', imagen: '/SALA_BAÑOS.jpg' },
  { titulo: 'PROCESO DE BAÑOS', imagen: '/FARMACIA.jpg', video: true },
  { titulo: 'FARMACIA', imagen: '/FARMACIA.jpg' },
  { titulo: 'CONSEJOS DE CUIDADO', imagen: '/FARMACIA.jpg', video: true }
];


}
