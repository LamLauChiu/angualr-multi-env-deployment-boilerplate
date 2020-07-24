import { Component } from '@angular/core';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  environmentName = '';
  environmentUrl = 'Debug api';


  constructor() {
    console.log( "production?: " + environment.production); // Logs false for default environment
    this.environmentName = environment.environmentName;
    this.environmentUrl = environment.apiUrl;
    console.log( "environmentName: " + this.environmentName);
    console.log( "environmentUrl: " + this.environmentUrl);
  }
  title = 'app works!';
}