import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { FraseComponent } from './frase/frase.component';

import { from } from 'rxjs';

const routes : Routes = [
  { path: 'pessoa', component: PessoaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'frase', component: FraseComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
