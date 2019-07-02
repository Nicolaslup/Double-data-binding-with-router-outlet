import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Component2Component } from './component2/component2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public data: Observable<{value: string}>;

  constructor() {}

  ngOnInit(): void {
    // Initilization data
    this.data = of({value: ''});
  }

  // Output from router-outlet run after module has been loaded.
  onActivate(e: Component2Component) {
    // Observe subject from my component2
    this.data = e.dataToInput.asObservable();
  }
}

