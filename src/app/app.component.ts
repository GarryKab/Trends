import { Component } from '@angular/core';
import { TrendsService } from './trends.service';
import { Chart } from 'chart.js';
import { normalize, schema } from 'normalizr';
// import { deflateSync } from 'zlib';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private _trends: TrendsService) {}

  chart = [];

  ngOnInit() {
    this._trends.cases()
      .subscribe(res => {
        let Datadates = [];
        let Datacases = [];
        let Datastatus = [];
        

        // res.forEach((res) => {
        //   Datadates.push(moment(res['Date']).format('ddd, LL').toString());
        //   Datacases.push(res['Cases']);
        //   Datastatus.push(res['Status']);
        //   // console.log(Datacases);
        // })
        // console.log(res[0]);

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: Datadates,
            datasets: [
              {
                label: 'Confirmed Cases',
                data: Datacases,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: false,
                borderWidth: 1
              }
            ]
          },
          options: {
            responsive: true,
            title:      {
                display: true,
                text:    "Covid-19 cases trend"
            },
            scales:     {
                xAxes: [{
                    scaleLabel: {
                        display:     true,
                        labelString: 'Date'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display:     true,
                        labelString: 'Number of Cases'
                    }
                }]
            }
        }
        })

      })
  }
  // title = 'sacovid19trends';
}
