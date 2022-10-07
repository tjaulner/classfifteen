import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentSearchTerm = '';
  //searchHistory = [];
  @Output() searchTransfer = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  //addSearch(value: string) {
    //this.searchHistory.push(this.currentSearchTerm);
  //}

  sendTransfer(value: string) {
    this.searchTransfer.emit(value);
  }
}
