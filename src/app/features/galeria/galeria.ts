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
    { titulo: 'Sala de Espera', imagen: 'SALA_ESPERA.jpg' },
    { titulo: 'Quirófano', imagen: 'QUIRUFANO.jpg' },
    { titulo: 'Sala de Baños', imagen: 'sala-banos.jpg' },
    { titulo: 'Proceso de Baño', imagen: 'proceso-bano.jpg', video: true },
    { titulo: 'Farmacia', imagen: 'farmacia.jpg' },
    { titulo: 'Consejos de Cuidado', imagen: 'consejos.jpg', video: true }
  ];
}
