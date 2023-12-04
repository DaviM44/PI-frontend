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
      id: [''],
      nome: [''],
      periodo: [''],
      duracao: [''],
  
    });

  }

}