import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencyService.getCurrencyExchange('USD', 10).subscribe(
      (res) => {console.log(res); },
      (error) => { console.error(error); }
    );
  }

}
