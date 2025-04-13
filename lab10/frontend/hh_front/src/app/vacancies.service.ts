import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacancy } from '../models';

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {

  constructor(private client: HttpClient) { }

  getVacancies():Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>('http://127.0.0.1:8000/api/vacancies/')
  }

  getCompanyVacancies(companyId: number): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`http://127.0.0.1:8000/api/companies/${companyId}/vacancies/`)
  }
}