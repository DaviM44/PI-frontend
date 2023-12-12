import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DisciplinaService } from '../disciplina.service';
import { Disciplina } from '../disciplina';


@Component({
  selector: 'app-cadastrardisciplina',
  templateUrl: './cadastrardisciplina.component.html',
  styleUrls: ['./cadastrardisciplina.component.css']
})
export class CadastrardisciplinaComponent {
  formGroupDisciplina: FormGroup;
  @Input()
  disciplina: Disciplina = {} as Disciplina;



  constructor(private disciplinaService:DisciplinaService, private formBuilder: FormBuilder) 
  {
    this.formGroupDisciplina = this.formBuilder.group({
      id: [''],
      nome: ['', [Validators.required, this.noWhitespaceValidator, Validators.pattern(/^[a-zA-Z0-9\sáéíóúãõâêîôÂÊÎÔÁÉÍÓÚÇçãõüÜàÀèÈìÌòÒùÙäëïöüÄËÏÖÜÂÊÎÔÁÉÍÓÚÇç]+$/)]],
      cargahoraria: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
  
    });

  }

  noWhitespaceValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const isWhitespace = (control.value || '').trim().length === 0;
    return isWhitespace ? { 'whitespace': true } : null;
  }

  clean (){
    this.formGroupDisciplina.reset();
    }


  save() {
    
    this.disciplinaService.save(this.formGroupDisciplina.value).subscribe({
       next: () => {
         this.formGroupDisciplina.reset();}})
         }
         
         get nome(): any {
          return this.formGroupDisciplina.get('nome');
        }
        get periodo(): any {
          return this.formGroupDisciplina.get('periodo');
        }
        get cargahoraria(): any {
          return this.formGroupDisciplina.get('cargahoraria');
        }     
      
      }


