import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      nome: ['', [Validators.required, this.noWhitespaceValidator, Validators.pattern(/^[a-zA-Z\sáéíóúãõâêîôÂÊÎÔÁÉÍÓÚÇçãõüÜàÀèÈìÌòÒùÙäëïöüÄËÏÖÜÂÊÎÔÁÉÍÓÚÇç]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      genero: ['']
    });

  }

  clean (){
    this.formGroupProf.reset();
    }

    noWhitespaceValidator(control: AbstractControl): { [key: string]: boolean } | null {
      const isWhitespace = (control.value || '').trim().length === 0;
      return isWhitespace ? { 'whitespace': true } : null;
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


