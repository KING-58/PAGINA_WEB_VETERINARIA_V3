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
  nombrePropietario = '';
  nombreMascota = '';
  motivo = '';
  especie = '';
  sexo = '';
  edad: number | null = null;
  raza = '';
  fecha = '';
  hora = '';
  firma = '';
  monto: number | null = null;

  // 👇 NUEVO: propiedad que usas en el HTML
  mensaje: string | null = null;

  reservar() {
    const numero = '51957682140';

    const mensajeWhats = `🐾 *Reserva de Cita - Veterinaria Curiosidades* 🐾

👤 Propietario: ${this.nombrePropietario}
🐶 Mascota: ${this.nombreMascota}
📋 Motivo: ${this.motivo}
🦴 Especie: ${this.especie}
⚧ Sexo: ${this.sexo}
🎂 Edad: ${this.edad ?? 'No indicada'}
🐕 Raza: ${this.raza}
📅 Fecha: ${this.fecha}
🕒 Hora: ${this.hora}
✍️ Firma: ${this.firma}
💵 Monto adelanto: S/${this.monto ?? 0}

📞 Por favor confirmar la cita. ¡Gracias!`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensajeWhats)}`;
    window.open(url, '_blank');

    // 👇 Mensaje que se mostrará en el template
    this.mensaje = 'Tu reserva ha sido enviada por WhatsApp. Espera la confirmación.';
  }
}
