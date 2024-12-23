import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';

  buttons = [
    ['1', '2', '3', '/'],
    ['4', '5', '6', '*'],
    ['7', '8', '9', '-'],
    ['0', '.', '=', '+']
  ];
  

}
