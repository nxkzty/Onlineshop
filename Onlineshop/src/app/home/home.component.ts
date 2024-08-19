import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  products: any[] = [];

  constructor(private productService: ProductsService) {
  }

  async ngOnInit() {
    try {
      this.products = await this.productService.getAllProducts();
    } catch (error) {
      console.error('Error loading products:', error);
    }

  }
  }
