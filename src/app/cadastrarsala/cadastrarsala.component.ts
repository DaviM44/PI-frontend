import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      nomedasala: [''],
      capacidade: [''],
      tipo: [''],
      ndm: [''],
      descricao: ['']
    });

  }

  clean (){
    this.formGroupSala.reset();
    }


  save() {
    
    this.salaService.save(this.formGroupSala.value).subscribe({
       next: () => {
         this.formGroupSala.reset();}})
         }
         
         get nome(): any {
          return this.formGroupSala.get('nome');
        }
        get capacidade(): any {
          return this.formGroupSala.get('capacidade');
        }
        get tipo(): any {
          return this.formGroupSala.get('tipo');
        }
        get ndm(): any {
          return this.formGroupSala.get('ndm');
        }
        get desc(): any {
          return this.formGroupSala.get('desc');
        }
      
      
      }


