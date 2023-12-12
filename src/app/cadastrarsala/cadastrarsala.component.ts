import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalaService } from '../sala.service';
import { Sala } from '../sala';


@Component({
  selector: 'app-cadastrarsala',
  templateUrl: './cadastrarsala.component.html',
  styleUrls: ['./cadastrarsala.component.css']
})
export class CadastrarsalaComponent {
  formGroupSala: FormGroup;
  @Input()
  sala: Sala = {} as Sala;



  constructor(private salaService:SalaService, private formBuilder: FormBuilder) 
  {
    this.formGroupSala = this.formBuilder.group({
      id: [''],
      nomedasala: ['', [Validators.required, this.noWhitespaceValidator, Validators.pattern(/^[a-zA-Z0-9\sáéíóúãõâêîôÂÊÎÔÁÉÍÓÚÇçãõüÜàÀèÈìÌòÒùÙäëïöüÄËÏÖÜÂÊÎÔÁÉÍÓÚÇç]+$/)]],
      capacidade: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      descricao: ['', [Validators.required, this.noWhitespaceValidator, Validators.pattern(/^[a-zA-Z0-9\sáéíóúãõâêîôÂÊÎÔÁÉÍÓÚÇçãõüÜàÀèÈìÌòÒùÙäëïöüÄËÏÖÜÂÊÎÔÁÉÍÓÚÇç]+$/)]]
    });

  }

  noWhitespaceValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const isWhitespace = (control.value || '').trim().length === 0;
    return isWhitespace ? { 'whitespace': true } : null;
  }

  clean (){
    this.formGroupSala.reset();
    }


  save() {
    
    this.salaService.save(this.formGroupSala.value).subscribe({
       next: () => {
         this.formGroupSala.reset();}})
         }
         
         get nomedasala(): any {
          return this.formGroupSala.get('nomedasala');
        }
        get capacidade(): any {
          return this.formGroupSala.get('capacidade');
        }
        get descricao(): any {
          return this.formGroupSala.get('descricao');
        }
      
      
      }


