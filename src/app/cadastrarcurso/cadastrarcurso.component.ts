import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      nome: ['', [Validators.required, this.noWhitespaceValidator, Validators.pattern(/^[a-zA-Z0-9\s]+$/)]], // Não permite caracteres especiais
      duracao: [''],
  
    });

  }

  noWhitespaceValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const isWhitespace = (control.value || '').trim().length === 0;
    return isWhitespace ? { 'whitespace': true } : null;
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


