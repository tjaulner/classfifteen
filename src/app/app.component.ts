import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'classfifteen';
  searchHistory = [];

  addSearch(newSearch: string) {
    this.searchHistory.push(newSearch);
  }
}
