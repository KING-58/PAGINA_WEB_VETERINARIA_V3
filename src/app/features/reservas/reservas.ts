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

  reservar() {
    // ✅ Número de WhatsApp del veterinario
    const numero = '51957682140';

    // 📩 Mensaje con formato para enviar a WhatsApp
    const mensaje = `🐾 *Reserva de Cita - Veterinaria Curiosidades* 🐾

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

    // 🔗 Crear el enlace para WhatsApp
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    // 🚀 Abrir WhatsApp en una nueva pestaña
    window.open(url, '_blank');
  }
}
