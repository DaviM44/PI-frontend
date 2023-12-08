import { Component, OnInit } from '@angular/core';
import { AlocService } from '../aloc.service';
import { Agenda } from '../agenda';

@Component({
  selector: 'app-v-tabela',
  templateUrl: './v-tabela.component.html',
  styleUrls: ['./v-tabela.component.css']
})
export class VTabelaComponent implements OnInit {
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
