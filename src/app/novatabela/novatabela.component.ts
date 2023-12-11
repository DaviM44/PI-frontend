import { Component, OnInit } from '@angular/core';
import { AlocService } from '../aloc.service';
import { Agenda } from '../agenda';

@Component({
  selector: 'app-novatabela',
  templateUrl: './novatabela.component.html',
  styleUrls: ['./novatabela.component.css']
})
export class NovatabelaComponent implements OnInit {
  agendas: Agenda[] = [];
  termoPesquisa: string = '';

  constructor(private alocService: AlocService) {}

  ngOnInit() {
    this.carregarAgendas();
  }

  carregarAgendas() {
    this.alocService.getAgendas().subscribe((data: Agenda[]) => {
      this.agendas = data;
    });
  }

  filtrarAgendas() {
    return this.agendas.filter(agenda => agenda.curso.toLowerCase().includes(this.termoPesquisa.toLowerCase()));
  }
}
