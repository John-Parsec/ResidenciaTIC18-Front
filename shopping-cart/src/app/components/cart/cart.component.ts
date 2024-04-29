import { Component, Input, computed, signal } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  produtos: Item[] = [
    { id: 1, name: 'Alicate Wiha', price: 10.99, quantity: 1, imgURL: 'https://picsum.photos/200/300'},
    { id: 2, name: 'Arroz 1Kg', price: 8.09, quantity: 1, imgURL: 'https://picsum.photos/200/300'},
    { id: 3, name: 'Feijão 1Kg', price: 7.99, quantity: 1, imgURL: 'https://picsum.photos/200/300'},
    { id: 4, name: 'Lanterna LED dewalt', price: 20.99, quantity: 1, imgURL: 'https://picsum.photos/200/300'},
    { id: 5, name: 'Sabonete novo perfume', price: 0.99, quantity: 1, imgURL: 'https://picsum.photos/200/300'},
    { id: 6, name: 'Óleo de soja', price: 4.99, quantity: 1, imgURL: 'https://picsum.photos/200/300'},
    { id: 7, name: 'Carne boa', price: 25.99, quantity: 1, imgURL: 'https://picsum.photos/200/300'},
    { id: 8, name: 'SSD Western Digital 1TB', price: 99.00, quantity: 1, imgURL: 'https://picsum.photos/200/300'},
    { id: 9, name: 'Processador intel i9', price: 170.99, quantity: 1, imgURL: 'https://picsum.photos/200/300'},
    { id: 10, name: 'Gabinete', price: 100.87, quantity: 1, imgURL: 'https://picsum.photos/200/300'}
  ];

  itensDoCarrinho: Item[] = [];

  listaDeItens = signal(this.itensDoCarrinho);
  
  constructor() { }

  precoTotal = computed(() => {
    const total = this.listaDeItens().reduce((acc, item) => acc + (item.price * item.quantity), 0);
    
    return total.toFixed(2);
  });

  adcionarAoCarrinho(produto: Item) {
    if (this.itensDoCarrinho.includes(produto)) {
      produto.quantity++;
      return;
    }
    
    this.itensDoCarrinho.push(produto);
    this.listaDeItens.set(this.itensDoCarrinho);
  }
  
  removeItem(index: number) {
    this.listaDeItens.set(this.listaDeItens().filter((item, i) => i !== index));
  }

  plusQtde(produto: Item) {
    produto.quantity++;
  }

  minusQtde(produto: Item) {
    if (produto.quantity > 1) {
      produto.quantity--;
    }
    else{
      this.removeItem(this.itensDoCarrinho.indexOf(produto));
    }
  }
}
