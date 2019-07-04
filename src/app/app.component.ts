import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Component2Component } from './component2/component2.component';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public data: Observable<{value: string}>;
  public data2: Observable<{value: string}>;
  public data3: Observable<{value: string}>;

  constructor(
    public cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
  }

  // Output from router-outlet run after module has been loaded.
  onActivate(e: Component2Component) {
    // Observe subject from my component2
    this.data = e.dataToInput.asObservable();
    this.data2 = e.dataToInput.asObservable();
    // this.data3 = e.dataToInputSimple;
    this.data3 = e.dataToInput;
    this.cd.detectChanges();
  }
}

