import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  public async getAllProducts(): Promise<any> {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  public async sortResults(): Promise<any> {
    try {
      const response = await fetch('https://fakestoreapi.com/products?sort=desc')
      const products = await response.json();
      return products;
    } catch (error) {
      console.error('Error fetching products',  error);
      throw error;
    }
  }
}
