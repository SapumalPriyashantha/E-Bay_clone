import { Component } from '@angular/core';
import { Dummy_Data } from './dummy-class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = Dummy_Data;
}
