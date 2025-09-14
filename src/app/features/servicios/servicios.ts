import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.html',
  styleUrls: ['./servicios.css']
})
export class ServiciosComponent {
  servicios = [
    { nombre: 'Consulta General', descripcion: 'Revisión completa de tu mascota por veterinarios especializados', icono: 'bi bi-heart-pulse' },
    { nombre: 'Vacunación', descripcion: 'Aplicación de vacunas programadas y desparasitación', icono: 'bi bi-syringe' },
    { nombre: 'Baño y Estética', descripcion: 'Servicio completo de baño, corte y cuidado estético', icono: 'bi bi-scissors' },
    { nombre: 'Cirugía', descripcion: 'Procedimientos quirúrgicos con tecnología de punta', icono: 'bi bi-hospital' },
    { nombre: 'Urgencias', descripcion: 'Atención inmediata 24/7 para emergencias', icono: 'bi bi-ambulance' },
    { nombre: 'Hospedaje', descripcion: 'Servicio de guardería y hospedaje para mascotas', icono: 'bi bi-house-heart' }
  ];
}
