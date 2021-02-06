import { Component } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: any
  isLoading = false
  default = { name: "Indian Rupee", code: "INR" }
  constructor(private currency: CurrencyService) { }

  ngOnInit(): void {
    this.fetchCurrencyData(this.default);
  }

  fetchCurrencyData(e) {
    this.isLoading = true
    setTimeout(()=> {
      console.log(e)
      this.currency.getCurrenyData(e.code).subscribe((response) => {
        this.data = response
        this.isLoading = false
      });
    }, 1000);
  }
}
