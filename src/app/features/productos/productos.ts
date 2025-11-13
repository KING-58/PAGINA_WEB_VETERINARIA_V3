import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.html',
  styleUrls: ['./productos.css']
})
export class ProductosComponent {
  categorias = [
    { nombre: 'Todos', icono: '🔄' },
    { nombre: 'Perros', icono: '🐕' },
    { nombre: 'Gatos', icono: '🐱' },
    { nombre: 'Aves', icono: '🐦' },
    { nombre: 'Medicinas', icono: '💊' },
    { nombre: 'Alimentos', icono: '🍖' },
    { nombre: 'Accesorios', icono: '🎀' },
    { nombre: 'Higiene', icono: '🛁' },
    { nombre: 'Venta de Mascotas', icono: '🐾' }

  ];

  categoriaActiva = 'Todos';
   terminoBusqueda: string = '';

  productos = [
  // 🐕 PERROS
  { nombre: 'Collar Antipulgas', descripcion: 'Collar ajustable que protege a tu perro contra pulgas y garrapatas por 8 meses.', precio: 15.5, categoria: 'Perros', imagen: 'PERRO1.JPG' },
  { nombre: 'Cama Ortopédica', descripcion: 'Cama suave y acolchada para perros grandes con soporte ortopédico.', precio: 45.0, categoria: 'Perros', imagen: 'PERRO2.jpg' },
  { nombre: 'Ropa de Invierno', descripcion: 'Abrigo térmico impermeable para perros pequeños y medianos.', precio: 20.0, categoria: 'Perros', imagen: 'PERRO3.jpg' },
  { nombre: 'Pelota Mordedora', descripcion: 'Pelota de caucho resistente para el entretenimiento y ejercicio de tu perro.', precio: 8.0, categoria: 'Perros', imagen: 'PERRO4.jpg' },
  { nombre: 'Arnés Ajustable', descripcion: 'Arnés cómodo y seguro con correas ajustables y reflectantes.', precio: 18.5, categoria: 'Perros', imagen: 'PERRO5.jpg' },
  { nombre: 'Snack Dental', descripcion: 'Premios comestibles que ayudan a limpiar los dientes y encías de tu perro.', precio: 12.0, categoria: 'Perros', imagen: 'PERRO6.jpg' },
  { nombre: 'Shampoo Suavizante', descripcion: 'Shampoo hipoalergénico con aloe vera para perros de piel sensible.', precio: 9.5, categoria: 'Perros', imagen: 'PERRO7.jpg' },
  

  // 🐱 GATOS
  { nombre: 'Rascador Torre', descripcion: 'Torre de varios niveles con rascador y escondite para gatos.', precio: 60.0, categoria: 'Gatos', imagen: 'GATO1.jpg' },
  { nombre: 'Fuente de Agua', descripcion: 'Fuente automática que mantiene el agua siempre fresca y en movimiento.', precio: 28.5, categoria: 'Gatos', imagen: 'GATO2.jpg' },
  { nombre: 'Arena Aglomerante', descripcion: 'Arena de bentonita con control de olores, ideal para areneros.', precio: 15.0, categoria: 'Gatos', imagen: 'GATO3.jpg' },
  { nombre: 'Pelota con Cascabel', descripcion: 'Juguete interactivo con sonido que estimula el instinto de caza.', precio: 6.0, categoria: 'Gatos', imagen: 'GATO4.jpg' },
  { nombre: 'Transportadora', descripcion: 'Transportadora resistente y ventilada para viajes seguros.', precio: 35.0, categoria: 'Gatos', imagen: 'GATO5.jpg' },
  { nombre: 'Snack de Salmón', descripcion: 'Deliciosas golosinas de salmón natural para gatos.', precio: 9.0, categoria: 'Gatos', imagen: 'GATO6.jpg' },
  { nombre: 'Cueva Acolchada', descripcion: 'Cama en forma de iglú para que tu gato se sienta seguro y cómodo.', precio: 25.0, categoria: 'Gatos', imagen: 'GATO7.jpg' },
  

  // 🐦 AVES
  { nombre: 'Jaula Espaciosa', descripcion: 'Jaula amplia con perchas y comederos incluidos.', precio: 55.0, categoria: 'Aves', imagen: 'AVE1.jpg' },
  { nombre: 'Comedero Automático', descripcion: 'Dispensador de comida para aves pequeñas.', precio: 12.0, categoria: 'Aves', imagen: 'AVE2.jpg' },
  { nombre: 'Bebedero Colgante', descripcion: 'Bebedero transparente fácil de limpiar y rellenar.', precio: 8.0, categoria: 'Aves', imagen: 'AVE3.jpg' },
  { nombre: 'Snack de Semillas', descripcion: 'Mezcla de semillas y frutas secas para aves.', precio: 6.0, categoria: 'Aves', imagen: 'AVE4.jpg' },
  { nombre: 'Juguete de Columpio', descripcion: 'Columpio de madera para entretenimiento dentro de la jaula.', precio: 10.0, categoria: 'Aves', imagen: 'AVE5.jpg' },
  { nombre: 'Mineral de Calcio', descripcion: 'Bloque mineral que ayuda al fortalecimiento del pico.', precio: 5.5, categoria: 'Aves', imagen: 'AVE6.jpg' },
  { nombre: 'Nido Algodón', descripcion: 'Nido suave para aves pequeñas como canarios o periquitos.', precio: 7.5, categoria: 'Aves', imagen: 'AVE7.jpg' },
  
  // 💊 MEDICINAS
  { nombre: 'Desparasitante Interno', descripcion: 'Tabletas para eliminar parásitos intestinales en perros y gatos.', precio: 18.0, categoria: 'Medicinas', imagen: 'MEDICINA1.jpg' },
  { nombre: 'Antipulgas Pipeta', descripcion: 'Pipetas tópicas de acción rápida contra pulgas y garrapatas.', precio: 25.0, categoria: 'Medicinas', imagen: 'MEDICINA2.jpg' },
  { nombre: 'Vitaminas Complejas', descripcion: 'Suplemento multivitamínico para fortalecer defensas.', precio: 15.0, categoria: 'Medicinas', imagen: 'MEDICINA3.jpg' },
  { nombre: 'Calmante Natural', descripcion: 'Gotas naturales para reducir ansiedad en mascotas.', precio: 20.0, categoria: 'Medicinas', imagen: 'MEDICINA4.jpg' },
  { nombre: 'Pomada Cicatrizante', descripcion: 'Crema para heridas menores en piel de mascotas.', precio: 12.0, categoria: 'Medicinas', imagen: 'MEDICINA5.jpg' },
  { nombre: 'Suplemento Articular', descripcion: 'Glucosamina y condroitina para articulaciones sanas.', precio: 30.0, categoria: 'Medicinas', imagen: 'MEDICINA6.jpg' },
  { nombre: 'Jarabe Digestivo', descripcion: 'Ayuda a mejorar la digestión en perros y gatos.', precio: 14.0, categoria: 'Medicinas', imagen: 'MEDICINA7.jpg' },
  

  // 🍖 ALIMENTOS
  { nombre: 'Croquetas Premium Perros', descripcion: 'Alimento seco con pollo y arroz para perros adultos.', precio: 45.0, categoria: 'Alimentos', imagen: 'ALIMENTO1.jpg' },
  { nombre: 'Croquetas Gatos', descripcion: 'Croquetas de salmón para gatos esterilizados.', precio: 38.0, categoria: 'Alimentos', imagen: 'ALIMENTO2.jpg' },
  { nombre: 'Alimento Cachorros', descripcion: 'Fórmula balanceada para el crecimiento saludable.', precio: 40.0, categoria: 'Alimentos', imagen: 'ALIMENTO3.jpg' },
  { nombre: 'Pouch de Atún', descripcion: 'Alimento húmedo de atún para gatos.', precio: 12.0, categoria: 'Alimentos', imagen: 'ALIMENTO4.jpg' },
  { nombre: 'Galletas Caninas', descripcion: 'Snacks horneados con sabor a pollo.', precio: 10.0, categoria: 'Alimentos', imagen: 'ALIMENTO5.jpg' },
  { nombre: 'Alimento Aves', descripcion: 'Mezcla de semillas y nutrientes para aves.', precio: 15.0, categoria: 'Alimentos', imagen: 'ALIMENTO6.jpg' },
  { nombre: 'Snack Natural Deshidratado', descripcion: 'Carne deshidratada sin conservadores para perros.', precio: 22.0, categoria: 'Alimentos', imagen: 'ALIMENTO7.jpg' },
  

  // 🎀 ACCESORIOS
  { nombre: 'Juguete Mordedor', descripcion: 'Hueso de caucho natural para perros.', precio: 9.0, categoria: 'Accesorios', imagen: 'ACCESORIO1.jpg' },
  { nombre: 'Cuerda Interactiva', descripcion: 'Juguete de cuerda para juegos de tirar.', precio: 7.0, categoria: 'Accesorios', imagen: 'ACCESORIO2.jpg' },
  { nombre: 'Collar Luminoso', descripcion: 'Collar LED para paseos nocturnos.', precio: 14.0, categoria: 'Accesorios', imagen: 'ACCESORIO3.jpg' },
  { nombre: 'Ropa Navideña', descripcion: 'Disfraz navideño para perros y gatos.', precio: 20.0, categoria: 'Accesorios', imagen: 'ACCESORIO4.jpg' },
  { nombre: 'Transportín Plegable', descripcion: 'Bolso plegable y ventilado para viajes.', precio: 30.0, categoria: 'Accesorios', imagen: 'ACCESORIO5.jpg' },
  { nombre: 'Cinturón de Auto', descripcion: 'Cinturón de seguridad para mascotas en coche.', precio: 11.0, categoria: 'Accesorios', imagen: 'ACCESORIO6.jpg' },
  { nombre: 'Cama de Viaje', descripcion: 'Cama portátil ideal para llevar a cualquier lugar.', precio: 25.0, categoria: 'Accesorios', imagen: 'ACCESORIO7.jpg' },
  

  // 🛁 HIGIENE
  { nombre: 'Shampoo Antipulgas', descripcion: 'Elimina pulgas y garrapatas con extracto natural.', precio: 12.0, categoria: 'Higiene', imagen: 'HIGIENE1.jpg' },
  { nombre: 'Cepillo Desenredante', descripcion: 'Cepillo con cerdas metálicas para pelo largo.', precio: 15.0, categoria: 'Higiene', imagen: 'HIGIENE2.jpg' },
  { nombre: 'Toallas Húmedas', descripcion: 'Toallas desinfectantes para limpieza rápida.', precio: 7.0, categoria: 'Higiene', imagen: 'HIGIENE3.jpg' },
  { nombre: 'Cortaúñas', descripcion: 'Cortaúñas ergonómico para perros y gatos.', precio: 10.0, categoria: 'Higiene', imagen: 'HIGIENE4.jpg' },
  { nombre: 'Pasta Dental Canina', descripcion: 'Pasta dental con sabor a pollo para perros.', precio: 8.5, categoria: 'Higiene', imagen: 'HIGIENE5.jpg' },
  { nombre: 'Desodorante en Spray', descripcion: 'Spray neutralizador de olores para mascotas.', precio: 13.0, categoria: 'Higiene', imagen: 'HIGIENE6.jpg' },
  { nombre: 'Guantes Removedores de Pelo', descripcion: 'Guantes que eliminan pelo suelto mientras acaricias.', precio: 9.0, categoria: 'Higiene', imagen: 'HIGIENE7.jpg' },



    // 🐾 VENTA DE MASCOTAS
  { nombre: 'Cachorro Labrador', descripcion: 'Tiernos perritos Labrador de 2 meses, vacunados y desparasitados.', precio: 350.0, categoria: 'Venta de Mascotas', imagen: 'CACHORRO.jpg' },
  { nombre: 'Gato Persa Bebé', descripcion: 'Gatitos persas peludos, juguetones y listos para adopción.', precio: 280.0, categoria: 'Venta de Mascotas', imagen: 'GATO PERSA.jpg' },
  { nombre: 'Hamster Sirio', descripcion: 'Hamster dócil y divertido, ideal para niños.', precio: 35.0, categoria: 'Venta de Mascotas', imagen: 'HAMSTER.jpg' },
  { nombre: 'Cuy Peruano', descripcion: 'Cuyes jóvenes, saludables y bien alimentados.', precio: 25.0, categoria: 'Venta de Mascotas', imagen: 'CUY.jpg' },
  { nombre: 'Conejo Mini Lop', descripcion: 'Conejitos bebés de orejas caídas, muy sociables.', precio: 60.0, categoria: 'Venta de Mascotas', imagen: 'CONEJO.jpg' },
  { nombre: 'Perico Australiano', descripcion: 'Coloridos pericos parlanchines, en pareja o individual.', precio: 40.0, categoria: 'Venta de Mascotas', imagen: 'PERICO.jpg' },
  { nombre: 'Canario Cantor', descripcion: 'Ave melodiosa ideal para el hogar, en jaula lista.', precio: 45.0, categoria: 'Venta de Mascotas', imagen: 'CANARIO.jpg' },

  
];



  get productosFiltrados() {
    if (this.categoriaActiva === 'Todos') {
      return this.productos;
    }
    return this.productos.filter(p => p.categoria === this.categoriaActiva);
  }

  cambiarCategoria(cat: string) {
    this.categoriaActiva = cat;
  }
}
