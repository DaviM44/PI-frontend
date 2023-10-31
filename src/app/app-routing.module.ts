import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarprofComponent } from './cadastrarprof/cadastrarprof.component';
import { CadastrarsalaComponent } from './cadastrarsala/cadastrarsala.component';
import { LoginComponent } from './login/login.component';
import { TelainicialComponent } from './telainicial/telainicial.component';

const routes: Routes = [
  {path: 'adm', component: TelainicialComponent },
  {path: 'login', component: LoginComponent },
  {path: 'adm/cadastrarprofessor', component: CadastrarprofComponent },
  {path: 'adm/cadastrarsala', component: CadastrarsalaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
