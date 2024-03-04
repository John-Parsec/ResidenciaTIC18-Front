import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'P007';
  classes: string[] = [];
  jsonContent: any;
  name_obejct: string = 'Objetos';
  name_prop: string = 'Propriedades';
  veiculo_list: string[] = [];
  valor: string = '';
  
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      this.readJsonFile(file);
    }
  }

  readJsonFile(file: File): void {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      try {
        this.jsonContent = JSON.parse(e.target.result);
        this.classes = Object.keys(this.jsonContent);
        
      } catch (error) {
        console.error('Erro ao analisar o arquivo JSON:', error);
      }
    };

    reader.readAsText(file);
  }

  get_object_names(category: string): any[] {
    return this.jsonContent[category].map((obj: any) => obj.Name);
  }

  get_object(category: string): any[] {
    return this.jsonContent[category];
  }

  get_prop(category: string, name: string, prop: string): string {
    const obj_list = this.get_object(category); 
    console.log(obj_list);
    if (obj_list.length > 0) {
      const obj = obj_list.find((o: any) => o.Name === name);
      console.log(obj);
      console.log(prop);
      console.log(obj[prop]);
      console.log(obj.prop);
      console.log(obj[prop].toString());
      if (obj) {
        return obj[prop];
      }
    }
    return '';
  }

  handleCategoria(categoria: string) {
    this.name_obejct = categoria;
    this.veiculo_list = this.get_object_names(categoria);
  }

  handleVeiculo(veiculo: string) {
    this.name_prop = veiculo;
  }

  handlePropriedade(propriedade: string) {
    this.valor = this.get_prop(this.name_obejct, this.name_prop, propriedade);
    console.log(this.valor);
  }
}
