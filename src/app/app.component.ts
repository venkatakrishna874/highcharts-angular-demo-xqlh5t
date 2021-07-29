import {  Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Chart } from 'angular-highcharts';
import { HighchartsService } from './highcharts.service.ts'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('charts') public chartEl: ElementRef;
  constructor(private highcharts: HighchartsService) { }
  ngOnInit(){
    this.highcharts.createChart(this.chartEl.nativeElement, this.myOptions);
  }
   myOptions = {
    chart: {
        renderTo: "container",
        type: "column"
    },
    title: {
        useHTML: true,
        x: -10,
        y: 8,
        text: '<span class="chart-title"> Grouped categories <span class="chart-href"> <a href="http://www.blacklabel.pl/highcharts" target="_blank"> Black Label </a> </span> <span class="chart-subtitle">plugin by </span></span>'
    },
    series: [{
        data: [4, 14, 18, 5, 6, 5, 14, 15, 18]
    }],
    xAxis: {
        categories: [{
            name: "Fruit",
            categories: ["Apple", "Banana", "Orange"]
        }, {
            name: "Vegetable",
            categories: ["Carrot", "Potato", "Tomato"]
        }, {
            name: "Fish",
            categories: ["Cod", "Salmon", "Tuna"]
        }]
    }
};
}
