import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sala } from './sala';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  url = "http://localhost:8080/sala";

  constructor(private http: HttpClient) { }

  save(sala: Sala) : Observable<Sala> {
    return this.http.post<Sala>(this.url, sala)
  }

  getSala(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

}
