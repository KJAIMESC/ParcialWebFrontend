import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';

  constructor(private router: Router){}

  getAll(){
    this.router.navigate(["getAll"]);
  }

  create(){
    this.router.navigate(["create"]);
  }
}
