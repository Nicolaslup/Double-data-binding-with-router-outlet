import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  public dataToInput = new Subject<{value: string}>();
  // public dataToInputSimple = new Subject<{value: string}>();
  public data: {value: string};
  // public data2: {value: string};

  constructor() { }

  ngOnInit() {
    // initialize data
    this.data = {value: '2'};
    // this.data2 = {value: '4'};

    // set the data to the subject
    this.dataToInput.next(this.data);
    // this.dataToInputSimple.next(this.data2);
    // this.dataToInputSimple.asObservable().subscribe(
    //   (res: {value: string}) => {
    //     this.data2 = res;
    //   }
    // );
    this.dataToInput.asObservable().subscribe(
      (res: {value: string}) => {
        this.data = res;
      }
    );
  }

  change(value: string) {
    this.data = {value};
    // this.dataToInputSimple.next(this.data2);
    this.dataToInput.next(this.data);
  }
}
