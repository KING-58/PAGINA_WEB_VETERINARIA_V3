import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos = [
    { nombre: 'Chaleco', descripcion: 'Impermeable', precio: 25.99, imagen: 'assets/chaleco.jpg' },
    { nombre: 'Arenero', descripcion: 'Premium', precio: 35.50, imagen: 'assets/arenero.jpg' }
  ];

  carrito: any[] = [];

  getProductos() {
    return this.productos;
  }

  addToCarrito(producto: any) {
    this.carrito.push(producto);
  }
}
