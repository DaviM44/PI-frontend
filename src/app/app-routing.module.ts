import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarprofComponent } from './cadastrarprof/cadastrarprof.component';
import { CadastrarsalaComponent } from './cadastrarsala/cadastrarsala.component';
import { LoginComponent } from './login/login.component';
import { TelainicialComponent } from './telainicial/telainicial.component';
import { VTabelaComponent } from './v-tabela/v-tabela.component';

const routes: Routes = [
  {path: 'adm', component: TelainicialComponent },
  {path: 'login', component: LoginComponent },
  {path: 'adm/cadastrarprofessor', component: CadastrarprofComponent },
  {path: 'adm/cadastrarsala', component: CadastrarsalaComponent },
  {path: 'tabela', component: VTabelaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
