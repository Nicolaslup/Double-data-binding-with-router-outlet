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
    // Initialization data
    this.data = of({value: ''});
  }

  // Output from router-outlet run after route has been loaded.
  onActivate(e: Component2Component) {
    // Observe Subject
    this.data = e.dataToInput.asObservable();
  }
}

