import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agenda } from './agenda';

@Injectable({
  providedIn: 'root'
})
export class AlocService {

  url = "http://localhost:8080/agenda";

  constructor(private http: HttpClient) { }

  save(agenda: Agenda): Observable<Agenda> {
    return this.http.post<Agenda>(this.url, agenda)
  }

  getAgendas(): Observable<Agenda[]> {
    return this.http.get<Agenda[]>(this.url);
  }

}
