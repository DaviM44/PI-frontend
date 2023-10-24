import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarprofComponent } from './cadastrarprof/cadastrarprof.component';
import { LoginComponent } from './login/login.component';
import { TelainicialComponent } from './telainicial/telainicial.component';

const routes: Routes = [
  {path: 'home', component: TelainicialComponent },
  {path: 'login', component: LoginComponent },
  {path: 'cadastrarprofessor', component: CadastrarprofComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
