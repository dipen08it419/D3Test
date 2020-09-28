import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'D3Test';
  d3: any;

  constructor() {
    this.d3 = window['d3'];
  }

  ngOnInit() {
    const svg = this.d3
      .select('#video_container')
      .append('svg')
      .attr('width', 1000)
      .attr('height', 1000);

    const rectangle = svg
      .append('rect')
      .attr('width', 100)
      .attr('height', 70)
      .attr('x', 0)
      .attr('y', 50)
      .attr('fill', 'blue')
      .attr('opacity', '1');

    const duration = 5000;
    const posicionFinal = 250;
    const posicionActual = 0;
    const segundosDuracion = 0;
    const oProperties = { x: posicionFinal, fill: 'red' };

    rectangle
      .datum(oProperties)
      .transition()
      .duration(duration)
      .ease(this.d3.easeLinear)
      .attrs(oProperties);
  }
}
