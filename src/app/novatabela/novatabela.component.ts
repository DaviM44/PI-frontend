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
  termoPeriodo: string = '';
  termoAno: string = ''; 

  constructor(private alocService: AlocService) {}

  ngOnInit() {
    this.carregarAgendas();
  }

  carregarAgendas() {
    this.alocService.getAgendas().subscribe((data: Agenda[]) => {
      this.agendas = data;
      // Ordenar a lista com base no tipo de aula (primeira, segunda, terceira, ...) e no dia da semana
      this.agendas.sort((a, b) => this.ordenarPorTipoAulaDia(a.dia, a.horario, b.dia, b.horario));
    });
  }

  filtrarAgendas() {
    return this.agendas.filter(agenda => 
      agenda.curso.toLowerCase().includes(this.termoPesquisa.toLowerCase()) &&
      (this.termoPeriodo === '' || agenda.periodo.toLowerCase().includes(this.termoPeriodo.toLowerCase())) &&
      (this.termoAno === '' || agenda.ano.toString().includes(this.termoAno))
    );
  }

  ordenarPorTipoAulaDia(diaA: string, horarioA: string, diaB: string, horarioB: string): number {
    // Ordem desejada dos dias da semana
    const ordemDias = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo'];

    // Obtenha o índice do dia da semana para a ordenação
    const indiceDiaA = ordemDias.indexOf(diaA.toLowerCase());
    const indiceDiaB = ordemDias.indexOf(diaB.toLowerCase());

    // Se os dias forem diferentes, ordene pelos dias
    if (indiceDiaA !== indiceDiaB) {
      return indiceDiaA - indiceDiaB;
    }

    // Caso os dias sejam iguais, ordene pelas aulas
    const tipoAulaA = this.obterTipoAula(horarioA);
    const tipoAulaB = this.obterTipoAula(horarioB);

    // Ordem desejada das aulas
    const ordemAulas = [
      'primeira aula',
      'segunda aula',
      'terceira aula',
      'quarta aula',
      'quinta aula',
      'sexta aula'
      // Adicione mais aulas, se necessário
    ];

    // Obtenha o índice da aula para a ordenação
    const indiceAulaA = ordemAulas.indexOf(tipoAulaA);
    const indiceAulaB = ordemAulas.indexOf(tipoAulaB);

    // Ordene com base nos dias e, em seguida, nas aulas
    if (indiceAulaA !== indiceAulaB) {
      return indiceAulaA - indiceAulaB;
    } else {
      return 0;
    }
  }

  obterTipoAula(horario: string): string {
    // Extrai o tipo de aula do horário
    return horario.toLowerCase().replace('ª aula', '').trim();
  }

  exibirTabela(): boolean {
    return this.termoPesquisa.trim() !== '' && this.filtrarAgendas().length > 0;
  }
}