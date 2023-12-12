import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LabService } from '../lab.service';
import { Lab } from '../lab';


@Component({
  selector: 'app-cadastrarlab',
  templateUrl: './cadastrarlab.component.html',
  styleUrls: ['./cadastrarlab.component.css']
})
export class CadastrarlabComponent {
  formGroupLab: FormGroup;
  @Input()
  lab: Lab = {} as Lab;



  constructor(private labService:LabService, private formBuilder: FormBuilder) 
  {
    this.formGroupLab = this.formBuilder.group({
      id: [''],
      nomedolab: ['', [Validators.required, this.noWhitespaceValidator, Validators.pattern(/^[a-zA-Z0-9\sáéíóúãõâêîôÂÊÎÔÁÉÍÓÚÇçãõüÜàÀèÈìÌòÒùÙäëïöüÄËÏÖÜÂÊÎÔÁÉÍÓÚÇç]+$/)]],
      capacidade: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      descricao: ['', [Validators.required, this.noWhitespaceValidator, Validators.pattern(/^[a-zA-Z0-9\sáéíóúãõâêîôÂÊÎÔÁÉÍÓÚÇçãõüÜàÀèÈìÌòÒùÙäëïöüÄËÏÖÜÂÊÎÔÁÉÍÓÚÇç]+$/)]],
      ndm: ['', [Validators.required, Validators.pattern(/^\d+$/)]]
    });

  }

  noWhitespaceValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const isWhitespace = (control.value || '').trim().length === 0;
    return isWhitespace ? { 'whitespace': true } : null;
  }

  clean (){
    this.formGroupLab.reset();
    }


  save() {
    
    this.labService.save(this.formGroupLab.value).subscribe({
       next: () => {
         this.formGroupLab.reset();}})
         }
         
         get nomedolab(): any {
          return this.formGroupLab.get('nomedolab');
        }
        get capacidade(): any {
          return this.formGroupLab.get('capacidade');
        }
        get descricao(): any {
          return this.formGroupLab.get('descricao');
        }
        get ndm(): any {
          return this.formGroupLab.get('ndm');
        }
      
      
      }


