import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-domicilio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './domicilio.html',
  styleUrls: ['./domicilio.css']
})
export class DomicilioComponent {
  servicios = [
    { nombre: 'Vacunaciones', descripcion: 'Aplicación segura de vacunas en tu domicilio por veterinarios calificados.', imagen: 'DOMI_VACUNACION.jpg' },
    { nombre: 'Desparasitaciones', descripcion: 'Control de parásitos internos y externos sin salir de casa.', imagen: 'DESPARACITACION.jpg' },
    { nombre: 'Asistencia Médica', descripcion: 'Evaluación y tratamiento de tu mascota en la comodidad de tu hogar.', imagen: 'ASISTENCIA MEDICA.jpg' },
    { nombre: 'Emergencias', descripcion: 'Atención veterinaria urgente a domicilio, disponible 24/7.', imagen: 'EMERGENCIAS.jpg' },
    { nombre: 'Grooming', descripcion: 'Baño, corte y cuidado estético profesional a domicilio.', imagen: 'GROOMING.jpg' }
  ];
}
