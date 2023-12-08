import { CadastrarcursoComponent } from './cadastrarcurso/cadastrarcurso.component';
import { CadastrarprofComponent } from './cadastrarprof/cadastrarprof.component';
import { CadastrarsalaComponent } from './cadastrarsala/cadastrarsala.component';
import { LoginComponent } from './login/login.component';
import { TelainicialComponent } from './telainicial/telainicial.component';
import { VTabelaComponent } from './v-tabela/v-tabela.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrardisciplinaComponent } from './cadastrardisciplina/cadastrardisciplina.component';
import { AdmloginComponent } from './admlogin/admlogin.component';
import { TabelaadmComponent } from './tabelaadm/tabelaadm.component';
import { CadastrarlabComponent } from './cadastrarlab/cadastrarlab.component';
import { TabelatesteComponent } from './tabelateste/tabelateste.component';

const routes: Routes = [
  {path: 'adm', component: TelainicialComponent },
  {path: '', component: LoginComponent },
  {path: 'adm/cadastrarprofessor', component: CadastrarprofComponent },
  {path: 'adm/cadastrarsala', component: CadastrarsalaComponent },
  {path: 'adm/cadastrarlab', component: CadastrarlabComponent },
  {path: 'adm/cadastrarcurso', component: CadastrarcursoComponent },
  {path: 'adm/tabela', component: TabelaadmComponent },
  {path: 'adm/cadastrardisciplina', component: CadastrardisciplinaComponent },
  {path: 'login', component: AdmloginComponent },
  {path: 'tabela', component: VTabelaComponent },
  {path: 'tabelateste', component: TabelatesteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
