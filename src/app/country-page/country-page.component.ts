import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent implements OnInit {
  countryStat: any;

  constructor(
      private route: ActivatedRoute,
      private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    const country = this.route.snapshot.params.country;
    console.log(country);
    this.httpClient.get('https://disease.sh/v3/covid-19/countries/' + country).subscribe((data: any) => {
      this.countryStat = data;
    });
  }

}
