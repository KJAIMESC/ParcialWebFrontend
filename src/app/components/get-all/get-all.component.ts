import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Celular } from '../../models/celular';
import { CelularService } from '../../services/celular.service';

@Component({
  selector: 'app-get-all',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-all.component.html',
  styleUrl: './get-all.component.css'
})
export class GetAllComponent {
  celulares: Celular[] = [];

  constructor(private celularService: CelularService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.celularService.getAll().then((post) => {
      this.celulares = post;
    });
  }
}
