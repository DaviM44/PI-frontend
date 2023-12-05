import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      nomedolab: [''],
      capacidade: [''],
      descricao: [''],
      ndm: ['']
    });

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
        get desc(): any {
          return this.formGroupLab.get('desc');
        }
        get ndm(): any {
          return this.formGroupLab.get('ndm');
        }
      
      
      }


