import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PessoaComponent } from './pessoa/pessoa.component';

const routes : Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'pessoa', component: PessoaComponent},
  { path: '**', redirectTo: ''}
]

export class AppRoutingModule { }
export const ModuloRoteador = RouterModule.forRoot(routes)
