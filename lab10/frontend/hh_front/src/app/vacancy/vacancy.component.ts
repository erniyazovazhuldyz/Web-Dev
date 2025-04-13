import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../../models';
import { VacanciesService } from '../vacancies.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacancy',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './vacancy.component.html',
  styleUrl: './vacancy.component.css'
})
export class VacancyComponent implements OnInit{
  vacancies: Vacancy[] = []
  loaded: boolean = false;
  companyId!: number;

  constructor(private vacanciesService: VacanciesService,
    private route: ActivatedRoute
  ){}


  ngOnInit(): void {
    this.getVacancies(),
    this.route.paramMap.subscribe(params => {
      this.companyId = Number(params.get('id'));
      this.loadCompanyVacancies();
    });
  }

  loadCompanyVacancies() {
    this.vacanciesService.getCompanyVacancies(this.companyId).subscribe(data => {
      this.vacancies = data;
      this.loaded = true;
    });
  }



  getVacancies(){
    this.vacanciesService.getVacancies().subscribe((vacancies) => {
      this.vacancies = vacancies;
      this.loaded = true;
    })

  }

}
