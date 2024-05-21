import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Celular } from '../../models/celular';
import { CelularService } from '../../services/celular.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  createCelularForm: FormGroup;
  celular: Celular = new Celular();
  message: string = "";

  constructor(private celularService: CelularService) { 
    this.createCelularForm = new FormGroup({
        marca: new FormControl("", [Validators.required]),
        fechaDeCompra: new FormControl("", [Validators.required]),
        anoLanzamiento: new FormControl("", [Validators.required]),
        precio: new FormControl("", [Validators.required, Validators.min(0)]),
        sistemaOperativo: new FormControl("", [Validators.required]),
        gama: new FormControl("", [Validators.required])
    });
}

  createCelular(){
    this.celular.marca = this.createCelularForm.get("marca")?.value;
    this.celular.fechaDeCompra = this.createCelularForm.get("fechaDeCompra")?.value;
    this.celular.anoLanzamiento = this.createCelularForm.get("anoDeLanzamiento")?.value;
    this.celular.precio = this.createCelularForm.get("precio")?.value;
    this.celular.sistemaOperativo = this.createCelularForm.get("sistemaOperativo")?.value;
    this.celular.gama = this.createCelularForm.get("gama")?.value;
    this.celularService.create(this.celular)
      .then(response => {this.message = "Celular creado con éxito";})
      .catch(error => {this.message = "Error al crear el celular";});
  }
}
