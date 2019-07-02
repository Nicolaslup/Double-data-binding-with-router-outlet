import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  public dataToInput = new Subject<{value: string}>();
  public data: {value: string};

  constructor() { }

  ngOnInit() {
    // initialize data
    this.data = {value: ''};

    // set the data to the subject
    this.dataToInput.next(this.data);
  }
}
