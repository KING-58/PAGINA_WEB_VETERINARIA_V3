import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../../core/services/producto';

@Component({
  selector: 'app-card-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-producto.html',
  styleUrls: ['./card-producto.css']
})
export class CardProductoComponent {
  @Input() producto: any;

  constructor(private productoService: ProductoService) {}

  agregarAlCarrito() {
    this.productoService.addToCarrito(this.producto);
  }
}
