import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-country-stats',
  templateUrl: './country-stats.component.html',
  styleUrls: ['./country-stats.component.scss']
})
export class CountryStatsComponent implements OnInit {
  allStats: any;
  sortedStats: any;
  countryStats: any;
  searchKeyword = '';
  sortBy = 'country';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('https://disease.sh/v3/covid-19/countries').subscribe((data: any) => {
      this.allStats = data;
      this.sortedStats = data;
      this.countryStats = data;
    });
  }
  onCountrySearch(): void {
    this.countryStats = this.sortedStats.filter(
      (stat: any) => stat.country.toLowerCase().includes(this.searchKeyword.toLowerCase())
    );
  }
  onSortChange(): void {
    console.log(this.sortBy);
    this.sortedStats = this.allStats.slice();
    this.sortedStats.sort((aObj: any, bObj: any) => {
      const desc = this.sortBy[0] === '-';
      const sortBy = desc ? this.sortBy.slice(1) : this.sortBy;
      const a = aObj[sortBy];
      const b = bObj[sortBy];
      return desc ? ((a > b) ? -1 : (a < b) ? 1 : 0) : (a > b) ? 1 : (a < b) ? -1 : 0;
    });
    console.log(this.sortedStats);
    this.onCountrySearch();
  }

}
