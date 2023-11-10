import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Disciplina } from './disciplina';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  url = "http://localhost:8080/disciplina";

  constructor(private http: HttpClient) { }

  save(disciplina: Disciplina) : Observable<Disciplina> {
    return this.http.post<Disciplina>(this.url, disciplina)
  }

}
