import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agenda } from './agenda';

@Injectable({
  providedIn: 'root'
})
export class AlocService {

  url = "https://mocki.io/v1/0f501a6b-4397-4c56-a3cf-9e9a13131e22";

  constructor(private http: HttpClient) { }

  save(agenda: Agenda): Observable<Agenda> {
    return this.http.post<Agenda>(this.url, agenda)
  }

  getAgendas(): Observable<Agenda[]> {
    return this.http.get<Agenda[]>(this.url);
  }

}
