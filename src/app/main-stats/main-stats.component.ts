import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-stats',
  templateUrl: './main-stats.component.html',
  styleUrls: ['./main-stats.component.scss']
})
export class MainStatsComponent implements OnInit {
  totalCases = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  lastUpdated = 0;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('https://disease.sh/v3/covid-19/all').subscribe((data: any) => {
      this.totalCases = data.cases;
      this.totalDeaths = data.deaths;
      this.totalRecovered = data.recovered;
      this.lastUpdated = data.updated;
    });
  }

}
