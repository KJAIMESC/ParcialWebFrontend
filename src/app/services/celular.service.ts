import { Injectable } from '@angular/core';
import axios from 'axios';
import { Celular } from '../models/celular';

@Injectable({
  providedIn: 'root'
})
export class CelularService {
  private url = 'http://localhost:8080/celulares';

  constructor() { }

  getAll(): Promise<Celular[]>{
    return axios.get<Celular[]>(this.url).then(response => {
      console.log(response.data);
      return response.data;
    });
  }

  create(celular: Celular): Promise<Celular>{
    return axios.post<Celular>(this.url, celular).then(response => {
      console.log(response.data);
      return response.data;
    });
  }
}
