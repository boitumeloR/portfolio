import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  opened = false;
  loggedIn = false;
  socialLogin = false;
  itineraryCount = 0;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleBurger() {
    this.opened = !this.opened;
  }
  Scroll($element: HTMLElement) {
    console.log($element);
    $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

}
