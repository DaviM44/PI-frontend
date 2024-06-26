import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Agenda } from '../agenda';
import { AlocService } from '../aloc.service';
import { ProfessorService } from '../professor.service';
import { CursoService } from '../curso.service';
import { SalaService } from '../sala.service';
import { DisciplinaService } from '../disciplina.service';
import { LabService } from '../lab.service';
import { Sala } from '../sala';
import { Validators } from '@angular/forms';



@Component({
  selector: 'app-tabelateste',
  templateUrl: './tabelateste.component.html',
  styleUrls: ['./tabelateste.component.css']
})
export class TabelatesteComponent {
  formGroupAgenda: FormGroup;
  @Input()
  agenda: Agenda = {} as Agenda;
  professores: any[] = [];
  salas: Sala[] = [];
  disciplinas: any[] = [];
  cursos: any[] = [];
  labs: any[] = [];
  saveSuccess = false;



  constructor(private alocService: AlocService, private formBuilder: FormBuilder,
    private professorService: ProfessorService,
    private cursoService: CursoService,
    private disciplinaService: DisciplinaService,
    private salaService: SalaService,
    private labService: LabService,
  ) {
    this.formGroupAgenda = this.formBuilder.group({
      curso: [''],
      periodo: [''],
      ano: ['', [Validators.required, Validators.maxLength(4)]], 
      semestre: [''],
      dia: [''],
      horario: [''],
      professor: [''],
      disciplina: [''],
      sala: [''],
      lab: ['']

    });

  }

  ngOnInit() {
    this.carregarProfessores();
    this.carregarCursos();
    this.carregarDisciplinas();
    this.carregarSalas();
    this.carregarLabs();
  }
  carregarSalas() {
    this.salaService.getSala().subscribe((data: any) => {
      this.salas = data;

      console.log('Salas carregadas:', this.salas);
    });
  }



  carregarDisciplinas() {
    this.disciplinaService.getDisciplina().subscribe((data: any) => {
      this.disciplinas = data;
    });
  }

  carregarCursos() {
    this.cursoService.getCurso().subscribe((data: any) => {
      this.cursos = data;
    });
  }

  carregarLabs() {
    this.labService.getLab().subscribe((data: any) => {
      this.labs = data;
    });
  }

  carregarProfessores() {
    this.professorService.getProfessores().subscribe((data: any) => {
      this.professores = data;
    });

  }

  clean() {
    this.formGroupAgenda.reset();
  }

  save() {
    this.alocService.save(this.formGroupAgenda.value).subscribe({
      next: () => {
        this.formGroupAgenda.reset();
        this.saveSuccess = true;
      },
    });
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
  get horario(): any {
    return this.formGroupAgenda.get('horario');
  }
  get professor(): any {
    return this.formGroupAgenda.get('professor');
  }
  get disciplina(): any {
    return this.formGroupAgenda.get('disciplina');
  }
  get sala(): any {
    return this.formGroupAgenda.get('sala');
  }
  get lab(): any {
    return this.formGroupAgenda.get('lab');
  }


  limitarDigitos(event: any) {
    const input = event.target;
    const maxLength = 4;

    const isBackspaceOrDelete = event.code === 'Backspace' || event.code === 'Delete';

    if (input.value.length >= maxLength && !isBackspaceOrDelete) {
      event.preventDefault();
    }
  }


}