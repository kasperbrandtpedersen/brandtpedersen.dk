import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Brandt Pedersen';
  isAuthenticated = false;
  fetching = false;

  constructor(private appService: AppService) {
    this.isAuthenticated = this.appService.isAuthenticated();
  }
}
