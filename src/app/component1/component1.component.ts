import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
})
export class Component1Component implements OnInit {

  public dataNoAsync: {value: string};
  public dataAsync: {value: string};
  public letter: string;
  public index: number;

  @Input() data: {value: string};
  @Input() set data2(value: string) {
      const letter = ['a', 'b', 'c' , 'd'];
      this.letter = letter[this.index];
      this.index++;
      if (this.index === 4) {
        this.index = 0;
      }
      this.dataNoAsync = {value};
      this.cd.detectChanges();
  }

  @Input() data3: Subject<{value: string}>;



  constructor(
    public cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.index = 0;
    this.data3.asObservable().subscribe(
      (res: {value: string}) => {
        const letter = ['a', 'b', 'c' , 'd'];
        this.letter = letter[this.index];
        this.index++;
        if (this.index === 4) {
          this.index = 0;
        }
        this.dataAsync = res;
        this.cd.detectChanges();
      }
    );
  }

  change(value: string) {
    this.data3.next({value});
  }

}

