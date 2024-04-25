import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Item } from '../../models/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  produtos: Item[] = [
    { id: 1, name: 'Alicate Wiha', price: 10.99, quantity: 1, imgURL: ''},
    { id: 2, name: 'Arroz 1Kg', price: 8.09, quantity: 2, imgURL: ''},
    { id: 3, name: 'Feijão 1Kg', price: 7.99, quantity: 1, imgURL: ''},
    { id: 4, name: 'Lanterna LED dewalt', price: 20.99, quantity: 1, imgURL: ''},
    { id: 5, name: 'Sabonete novo perfume', price: 0.99, quantity: 3, imgURL: ''},
    { id: 6, name: 'Óleo de soja', price: 4.99, quantity: 2, imgURL: ''},
    { id: 7, name: 'Carne boa', price: 25.99, quantity: 1, imgURL: ''},
    { id: 8, name: 'SSD Western Digital 1TB', price: 99.00, quantity: 1, imgURL: ''},
    { id: 9, name: 'Processador intel i9', price: 170.99, quantity: 1, imgURL: ''},
    { id: 10, name: 'Gabinete', price: 100.87, quantity: 1, imgURL: ''}
  ];


  

}
