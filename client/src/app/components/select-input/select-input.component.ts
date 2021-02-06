import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';
import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';


@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})
export class SelectInputComponent implements OnInit {

  @Output() onChange = new EventEmitter<any>();

  currencies: any;
  formattedCurrencyList:Array<Select2OptionData>;
  public options: Options;

  constructor(private currency: CurrencyService) { }

  ngOnInit(): void {
    this.getAllCountry();
  }
  getAllCountry() {
    this.currency.getCurrencies().subscribe((response) => {
      console.info(response);
        this.currencies = response
        this.formattedCurrencyList = response.map(function (item) {
          return {
            id: item.code,
            text: item.name,
          };
        })
    });
  }
  valueChanged(e) {
    const fltCountry = this.currencies.find((currency) => (currency.code === e));
    if (!!fltCountry) {
      this.onChange.emit({ name: fltCountry.name, code: fltCountry.code });
    }
  }

}

