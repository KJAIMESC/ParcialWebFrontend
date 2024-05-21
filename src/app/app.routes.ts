import { Routes } from '@angular/router';
import { GetAllComponent } from './components/get-all/get-all.component';
import { CreateComponent } from './components/create/create.component';

export const routes: Routes = [
    { path: 'getAll', component: GetAllComponent },
    { path: 'create', component: CreateComponent }
];
