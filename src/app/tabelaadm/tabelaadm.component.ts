import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Agenda } from '../agenda';
import { AlocService } from '../aloc.service';

@Component({
  selector: 'app-tabelaadm',
  templateUrl: './tabelaadm.component.html',
  styleUrls: ['./tabelaadm.component.css']
})
export class TabelaadmComponent {
  formGroupAgenda: FormGroup;
  @Input()
  agenda: Agenda = {} as Agenda;


constructor(private alocService:AlocService, private formBuilder: FormBuilder) 
  {
    this.formGroupAgenda = this.formBuilder.group({
      curso: [''],
      periodo: [''],
      ano: [''],
      semestre: [''],
      dia: [''],
      aula: [''],
      professor: [''],
      materia: [''],
      sala: ['']
  
    });

  }

  clean (){
    this.formGroupAgenda.reset();
    }

    save() {
    
      this.alocService.save(this.formGroupAgenda.value).subscribe({
         next: () => {
           this.formGroupAgenda.reset();}})
           }
           
           get curso(): any {
            return this.formGroupAgenda.get('curso');
          }
          get periodo(): any {
            return this.formGroupAgenda.get('periodo');
          }
          get ano(): any {
            return this.formGroupAgenda.get('ano');
          } 
          get semestre(): any {
            return this.formGroupAgenda.get('semestre');
          }
          get dia(): any {
            return this.formGroupAgenda.get('dia');
          }
          get aula(): any {
            return this.formGroupAgenda.get('aula');
          }
          get professor(): any {
            return this.formGroupAgenda.get('professor');
          }
          get materia(): any {
            return this.formGroupAgenda.get('materia');
          }    
          get sala(): any {
            return this.formGroupAgenda.get('sala');
          }    


  }