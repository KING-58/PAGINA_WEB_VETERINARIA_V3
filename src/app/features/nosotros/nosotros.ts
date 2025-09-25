import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nosotros.html',
  styleUrls: ['./nosotros.css']
})
export class NosotrosComponent {
  equipo = [
    { nombre: 'Dr. Juan Pérez', rol: 'Veterinario Jefe', imagen: '/DOC1.jpg' },
    { nombre: 'Dra. María López', rol: 'Especialista en Cirugía', imagen: '/DOC2.jpg' },
    { nombre: 'Carlos Gómez', rol: 'Asistente Veterinario', imagen: '/DOC3.jpg' }
  ];
}
