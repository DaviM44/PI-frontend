import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professor } from './professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  url = "http://localhost:8080/professor";

  constructor(private http: HttpClient) { }

  save(professor: Professor) : Observable<Professor> {
    return this.http.post<Professor>(this.url, professor)
  }

  getProfessores(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

}
