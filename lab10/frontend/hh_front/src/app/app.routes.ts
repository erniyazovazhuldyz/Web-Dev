import { Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { VacancyComponent } from './vacancy/vacancy.component';

export const routes: Routes = [
  { path: 'companies', component: CompanyComponent },
  { path: 'vacancies', component: VacancyComponent },
  { path: '', redirectTo: 'companies', pathMatch: 'full' }  // Optional default
];
