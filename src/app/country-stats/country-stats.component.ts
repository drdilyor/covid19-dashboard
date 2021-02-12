import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-country-stats',
  templateUrl: './country-stats.component.html',
  styleUrls: ['./country-stats.component.scss']
})
export class CountryStatsComponent implements OnInit {
  allStats: any;
  countryStats: any;
  searchKeyword = '';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('https://disease.sh/v3/covid-19/countries').subscribe((data: any) => {
      this.allStats = data;
      this.countryStats = data;
    });
  }
  onCountrySearch(): void {
    this.countryStats = this.allStats.filter(
      (stat: any) => stat.country.toLowerCase().includes(this.searchKeyword.toLowerCase())
    );
  }

}
