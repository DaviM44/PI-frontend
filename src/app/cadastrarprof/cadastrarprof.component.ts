import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfessorService } from '../professor.service';
import { Professor } from '../professor';


@Component({
  selector: 'app-cadastrarprof',
  templateUrl: './cadastrarprof.component.html',
  styleUrls: ['./cadastrarprof.component.css']
})
export class CadastrarprofComponent {
  formGroupProf: FormGroup;
  @Input()
  professor: Professor = {} as Professor;



  constructor(private professorService:ProfessorService, private formBuilder: FormBuilder) 
  {
    this.formGroupProf = this.formBuilder.group({
      id: [''],
      nome: [''],
      email: [''],
      telefone: [''],
      genero: ['']
    });

  }

  clean (){
    this.formGroupProf.reset();
    }


  save() {
    
    this.professorService.save(this.formGroupProf.value).subscribe({
       next: () => {
         this.formGroupProf.reset();}})
         }
         
         get nome(): any {
          return this.formGroupProf.get('nome');
        }
        get email(): any {
          return this.formGroupProf.get('email');
        }
        get telefone(): any {
          return this.formGroupProf.get('telefone');
        }
        get genero(): any {
          return this.formGroupProf.get('genero');
        }
      
      
      }


