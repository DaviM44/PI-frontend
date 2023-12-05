import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lab } from './lab';

@Injectable({
  providedIn: 'root'
})
export class LabService {

  url = "http://localhost:8080/lab";

  constructor(private http: HttpClient) { }

  save(lab: Lab) : Observable<Lab> {
    return this.http.post<Lab>(this.url, lab)
  }

  getLab(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
  
}
