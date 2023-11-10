import { CadastrarcursoComponent } from './cadastrarcurso/cadastrarcurso.component';
import { CadastrarprofComponent } from './cadastrarprof/cadastrarprof.component';
import { CadastrarsalaComponent } from './cadastrarsala/cadastrarsala.component';
import { LoginComponent } from './login/login.component';
import { TelainicialComponent } from './telainicial/telainicial.component';
import { VTabelaComponent } from './v-tabela/v-tabela.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrardisciplinaComponent } from './cadastrardisciplina/cadastrardisciplina.component';

const routes: Routes = [
  {path: 'adm', component: TelainicialComponent },
  {path: 'login', component: LoginComponent },
  {path: 'adm/cadastrarprofessor', component: CadastrarprofComponent },
  {path: 'adm/cadastrarsala', component: CadastrarsalaComponent },
  {path: 'adm/cadastrarcurso', component: CadastrarcursoComponent },
  {path: 'adm/cadastrardisciplina', component: CadastrardisciplinaComponent },
  {path: 'tabela', component: VTabelaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
