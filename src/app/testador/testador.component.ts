import { Component, OnInit } from '@angular/core';
import { AlocService } from '../aloc.service';
import { Agenda } from '../agenda';

@Component({
  selector: 'app-testador',
  templateUrl: './testador.component.html',
  styleUrls: ['./testador.component.css']
})
export class TestadorComponent implements OnInit {
  agendas: Agenda[] = [];

  constructor(private alocService: AlocService) {}

  ngOnInit() {
    this.carregarAgendas();
  }
  

  carregarAgendas() {
    this.alocService.getAgendas().subscribe((data: Agenda[]) => {
      this.agendas = data;
      
    });

    

    
  }
}
