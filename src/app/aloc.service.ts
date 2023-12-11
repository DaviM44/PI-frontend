import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agenda } from './agenda';

@Injectable({
  providedIn: 'root'
})
export class AlocService {

  url = "https://mocki.io/v1/32369bb2-8561-4661-be17-ba5d1b97f540";

  constructor(private http: HttpClient) { }

  save(agenda: Agenda): Observable<Agenda> {
    return this.http.post<Agenda>(this.url, agenda)
  }

  getAgendas(): Observable<Agenda[]> {
    return this.http.get<Agenda[]>(this.url);
  }

}
