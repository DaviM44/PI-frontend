import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CursoService } from '../curso.service';
import { Curso } from '../curso';


@Component({
  selector: 'app-cadastrarcurso',
  templateUrl: './cadastrarcurso.component.html',
  styleUrls: ['./cadastrarcurso.component.css']
})
export class CadastrarcursoComponent {
  formGroupCurso: FormGroup;
  @Input()
  curso: Curso = {} as Curso;



  constructor(private cursoService:CursoService, private formBuilder: FormBuilder) 
  {
    this.formGroupCurso = this.formBuilder.group({
      id: [''],
      nome: [''],
      periodo: [''],
      duracao: [''],
  
    });

  }

  clean (){
    this.formGroupCurso.reset();
    }


  save() {
    
    this.cursoService.save(this.formGroupCurso.value).subscribe({
       next: () => {
         this.formGroupCurso.reset();}})
         }
         
         get nome(): any {
          return this.formGroupCurso.get('nome');
        }
        get periodo(): any {
          return this.formGroupCurso.get('periodo');
        }
        get duracao(): any {
          return this.formGroupCurso.get('duracao');
        }     
      
      }


