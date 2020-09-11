import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from './models/product.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public url = 'http://localhost:7189/v1';

  mockProducts: ProductModel[] = [
     {
       id: '1c0487fd-1e33-47ec-9541-f8de43d8abfe',
       title:  'GPS Automotivo Garmin Drive 51',
       brand:  'Garmin',
       tag:  'gps-automotivo-garmin-drive-51',
       price: 809.1,
       image:  'https://baltademos.blob.core.windows.net/eshop/gps-automotivo-garmin-drive-51.jpg'
     },
     {
       id:  'f58448de-bb53-48fa-8347-70bad73f1ec4',
       title:  'Notebook Samsung Essentials E30',
       brand:  'Samsung',
       tag:  'notebook-samsung-essentials-e30',
       price: 1709.99,
       image:  'https://baltademos.blob.core.windows.net/eshop/notebook-samsung-essentials-e30.jpg'
      },
      {
        id:  '0f8e8418-f3a3-4329-91c6-4548dc6af16b',
        title:  'Smartphone Apple iPhone Xr 128GB  ',
        brand:  'Apple  ',
        tag:  'smartphone-apple-iphone-xr-128gb  ',
        price: 4949.1,
        image:  'https://baltademos.blob.core.windows.net/eshop/smartphone-apple-iphone-xr-128gb.jpg  '
      },
      {
        id:  '9a0dc81e-0b76-427f-8f9e-7502c2bd1005',
        title:  'Smartphone Motorola One 64GB  ',
        brand:  'Motorola  ',
        tag:  'smartphone-motorola-one-64gb  ',
        price: 999.0,
        image:  'https://baltademos.blob.core.windows.net/eshop/smartphone-motorola-one-64gb.jpg  '
      },
      {
        id:  '58b3f5b6-55e8-4aa4-a352-a2e061b8aa6d',
        title:  'Smartphone Samsung Galaxy M20 64GB  ',
        brand:  'Samsung  ',
        tag:  'smartphone-samsung-galaxy-m20-64gb  ',
        price: 1079.0,
        image:  'https://baltademos.blob.core.windows.net/eshop/smartphone-samsung-galaxy-m20-64gb.jpg  '
      }
  ];

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return of(this.mockProducts);
    /*return this.http.get<ProductModel[]>(`${this.url}/products`);*/
  }
}