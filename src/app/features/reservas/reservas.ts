import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reservas.html',
  styleUrls: ['./reservas.css']
})
export class ReservasComponent {
  nombre = '';
  mascota = '';
  fecha = '';
  hora = '';
  mensaje = '';

  reservar() {
    this.mensaje = `✅ Reserva confirmada para ${this.mascota} a nombre de ${this.nombre} el día ${this.fecha} a las ${this.hora}.`;
  }
}
