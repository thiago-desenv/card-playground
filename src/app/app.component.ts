import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  planType: string = 'Simples';
  planPrice: number = 5000;

  buttonClicked() {
    console.log('Button blicked!');
  }
}
