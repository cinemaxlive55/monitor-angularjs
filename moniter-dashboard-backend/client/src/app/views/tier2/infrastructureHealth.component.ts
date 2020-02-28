import {Component, OnDestroy, OnInit,} from '@angular/core';
import {Location} from '@angular/common';

declare var jQuery: any;

@Component({
  selector: 'infrastructureHealth',
  templateUrl: 'infrastructureHealth.template.html'
})

export class InfrastructureHealthComponent implements OnDestroy, OnInit {

  public nav: any;

  public httpErrorsSparklineData: Array<any> = [322, 14, 32];
  public httpErrorsSparklineOptions: any = {
    type: 'pie',
    height: '140',
    sliceColors: ['#1ab394', '#ff0000', '#FFFF00']
  };

  public hostsSparklineData: Array<any> = [8, 2];
  public hostsSparklineOptions: any = {
    type: 'pie',
    height: '140',
    sliceColors: ['#1ab394', '#ff0000']
  };

  public barOptions = {
    series: {
      lines: {
        show: true,
        lineWidth: 2,
        fill: true,
        fillColor: {
          colors: [{
            opacity: 0.0
          }, {
            opacity: 0.0
          }]
        }
      }
    },
    xaxis: {
      tickDecimals: 0
    },
    colors: ["#1ab394"],
    grid: {
      color: "#999999",
      hoverable: true,
      clickable: true,
      tickColor: "#D4D4D4",
      borderWidth: 0
    },
    legend: {
      show: false
    },
    tooltip: true,
    tooltipOpts: {
      content: "x: %x, y: %y"
    }
  };
  public barDataset = [{
    label: "bar",
    data: [
      ['1', '34'],
      [2, 25],
      [3, 19],
      [4, 34],
      [5, 32]
    ]
  }];

  public successTransactionSparklineData: Array<any> = [322, 4];
  public successTransactionSparklineOptions: any = {
    type: 'pie',
    height: '140',
    sliceColors: ['#1ab394', '#F5F5F5']
  };

  public failedTransactionSparklineData: Array<any> = [1, 4];
  public failedTransactionSparklineOptions: any = {
    type: 'pie',
    height: '140',
    sliceColors: ['#ed5565', '#F5F5F5']
  };

  goBack(): void {
    this.location.back();
  }


  public constructor(private location: Location) {
    this.nav = document.querySelector('nav.navbar');
  }

  public ngOnInit(): any {
    this.nav.className += " white-bg";
  }


  public ngOnDestroy(): any {
    this.nav.classList.remove("white-bg");
  }

  // Flot chart data and options

  private gd(year, month, day) {
    return new Date(year, month - 1, day).getTime();
  }

  private data1 = [
    [this.gd(2012, 1, 1), 7], [this.gd(2012, 1, 2), 6], [this.gd(2012, 1, 3), 4], [this.gd(2012, 1, 4), 8],
    [this.gd(2012, 1, 5), 9], [this.gd(2012, 1, 6), 7], [this.gd(2012, 1, 7), 5], [this.gd(2012, 1, 8), 4],
    [this.gd(2012, 1, 9), 7], [this.gd(2012, 1, 10), 8], [this.gd(2012, 1, 11), 9], [this.gd(2012, 1, 12), 6],
    [this.gd(2012, 1, 13), 4], [this.gd(2012, 1, 14), 5], [this.gd(2012, 1, 15), 11], [this.gd(2012, 1, 16), 8],
    [this.gd(2012, 1, 17), 8], [this.gd(2012, 1, 18), 11], [this.gd(2012, 1, 19), 11], [this.gd(2012, 1, 20), 6],
    [this.gd(2012, 1, 21), 6], [this.gd(2012, 1, 22), 8], [this.gd(2012, 1, 23), 11], [this.gd(2012, 1, 24), 13],
    [this.gd(2012, 1, 25), 7], [this.gd(2012, 1, 26), 9], [this.gd(2012, 1, 27), 9], [this.gd(2012, 1, 28), 8],
    [this.gd(2012, 1, 29), 5], [this.gd(2012, 1, 30), 8], [this.gd(2012, 1, 31), 25]
  ];

  private data2 = [
    [this.gd(2012, 1, 1), 800], [this.gd(2012, 1, 2), 500], [this.gd(2012, 1, 3), 600], [this.gd(2012, 1, 4), 700],
    [this.gd(2012, 1, 5), 500], [this.gd(2012, 1, 6), 456], [this.gd(2012, 1, 7), 800], [this.gd(2012, 1, 8), 589],
    [this.gd(2012, 1, 9), 467], [this.gd(2012, 1, 10), 876], [this.gd(2012, 1, 11), 689], [this.gd(2012, 1, 12), 700],
    [this.gd(2012, 1, 13), 500], [this.gd(2012, 1, 14), 600], [this.gd(2012, 1, 15), 700], [this.gd(2012, 1, 16), 786],
    [this.gd(2012, 1, 17), 345], [this.gd(2012, 1, 18), 888], [this.gd(2012, 1, 19), 888], [this.gd(2012, 1, 20), 888],
    [this.gd(2012, 1, 21), 987], [this.gd(2012, 1, 22), 444], [this.gd(2012, 1, 23), 999], [this.gd(2012, 1, 24), 567],
    [this.gd(2012, 1, 25), 786], [this.gd(2012, 1, 26), 666], [this.gd(2012, 1, 27), 888], [this.gd(2012, 1, 28), 900],
    [this.gd(2012, 1, 29), 178], [this.gd(2012, 1, 30), 555], [this.gd(2012, 1, 31), 993]
  ];
}
