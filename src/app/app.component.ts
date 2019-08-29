import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
declare var Module: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ScheduleOptimizer4000';
  fibonacciResult:number;
  n:number;
  fibonacci(n: number)
  {
      this.fibonacciResult = Module.ccall('fibonacci', 'number', ['number'], [n]);
  }
  ngOnInit()
  {


  }
}
