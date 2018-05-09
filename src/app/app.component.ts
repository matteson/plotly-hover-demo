import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dataEndpoint: any;
  layoutEndpoint: any;

  dataTraces: any;
  layoutTraces: any;

  visibleTraces: any;

  ngOnInit(): void {
    let endpointTrace = {
      x: [1, 2, 3, 4, 5, 6],
      y: [100, 90, 70, 40, 20, 10],
      type: 'scatter',
      visible: true,
    };

    this.dataEndpoint = [endpointTrace];
    this.layoutEndpoint = {
      'title': 'Endpoints',
      'showlegend': true
    };

    let dataTrace1 = {
      x: [ 1, 2, 3, 4],
      y: [100, 100, 100, 100],
      type: 'scatter',
      visible: true
    };
    let dataTrace2 = {
      x: [ 1, 2, 3, 4],
      y: [100, 100, 95, 90],
      type: 'scatter',
      visible: false
    };
    let dataTrace3 = {
      x: [ 1, 2, 3, 4],
      y: [100, 95, 90, 70],
      type: 'scatter',
      visible: false
    };
    let dataTrace4 = {
      x: [ 1, 2, 3, 4],
      y: [95, 90, 70, 40],
      type: 'scatter',
      visible: false
    };
    let dataTrace5 = {
      x: [ 1, 2, 3, 4],
      y: [80, 65, 40, 20],
      type: 'scatter',
      visible: false
    };
    let dataTrace6 = {
      x: [ 1, 2, 3, 4],
      y: [60, 35, 20, 10],
      type: 'scatter',
      visible: true
    };

    this.dataTraces = [dataTrace1, dataTrace2, dataTrace3, dataTrace4, dataTrace5, dataTrace6];
    this.layoutTraces = {
      'title': 'Traces',
      'showlegend': true
    };
  }

  hover(event: any): void {
    console.log(event);
    const ind = event['points'][0]['pointIndex'];
    this.dataTraces[ind].visible = true;
  }

  unhover(event: any): void {
    this.dataTraces[0].visible = true;
    this.dataTraces[1].visible = false;
    this.dataTraces[2].visible = false;
    this.dataTraces[3].visible = false;
    this.dataTraces[4].visible = false;
    this.dataTraces[5].visible = true;
  }
}

