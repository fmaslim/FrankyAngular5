import { Component, OnInit, Injectable } from '@angular/core';

export class Metric {
  eventName: string;
  scope: string;
}

export interface AnalyticsImplementation {
  recordEvent(metric: Metric): void;
}

// To use this Service, we need to configure the provider to use a factory
// 1. create an implementation that conforms to AnalyticsImplementation
// 2. add it to providers with useFactory

@Injectable()
export class AnalyticsService {
  constructor(private implementation: AnalyticsImplementation) {
  }

  record(metric: Metric) {
    this.implementation.recordEvent(metric);
  }
}

@Component({
  selector: 'app-analytics-demo',
  templateUrl: './analytics-demo.component.html',
  styleUrls: ['./analytics-demo.component.css']
})
export class AnalyticsDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
