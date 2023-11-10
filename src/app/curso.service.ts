import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url = "http://localhost:8080/curso";

  constructor(private http: HttpClient) { }

  save(curso: Curso) : Observable<Curso> {
    return this.http.post<Curso>(this.url, curso)
  }

}
