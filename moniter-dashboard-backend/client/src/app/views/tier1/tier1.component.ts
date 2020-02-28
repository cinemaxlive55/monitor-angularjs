import { Component, OnInit } from '@angular/core';
import { ColorBlockComponent} from '../../components/color-block/color-block.component';
import { COLORS} from '../../constants/colors';
import { interval} from 'rxjs/observable/interval';
import { Tier1Service} from '../../services/tier1.service';
import { Subscription } from "rxjs/Rx";


@Component({
  selector: 'app-tier1',
  templateUrl: './tier1.component.html',
  styleUrls: ['./tier1.component.css'],
  providers: [Tier1Service]
})
export class Tier1Component implements OnInit {
  functionalHealthObj: ColorBlockComponent = new ColorBlockComponent();
  cassandraObj: ColorBlockComponent = new ColorBlockComponent();
  infrastructureObj: ColorBlockComponent = new ColorBlockComponent();
  supportApplicationsObj: ColorBlockComponent = new ColorBlockComponent();
  operationalStatusObj: ColorBlockComponent = new ColorBlockComponent();
  tectonicObj: ColorBlockComponent = new ColorBlockComponent();
  kafkaObj: ColorBlockComponent = new ColorBlockComponent();
  fluentdObj: ColorBlockComponent = new ColorBlockComponent();
  elasticObj: ColorBlockComponent = new ColorBlockComponent();
  // sub :Subscription;
  constructor(private tier1Service: Tier1Service) {
    this.functionalHealthObj.color = COLORS.RED;
    this.functionalHealthObj.name = 'Functional Health';
    this.functionalHealthObj.link = '/functionalHealth';
    this.cassandraObj.color = COLORS.RED;
    this.cassandraObj.name = 'Cassandra';
    this.cassandraObj.link = '/cassandra';
    this.infrastructureObj.color = COLORS.RED;
    this.infrastructureObj.name = 'Infrastructure';
    this.infrastructureObj.link = '/infrastructureHealth';
    this.supportApplicationsObj.color = COLORS.RED;
    this.supportApplicationsObj.name = 'Support Application';
    this.supportApplicationsObj.link = 'infrastructure';
    this.operationalStatusObj.color = COLORS.RED;
    this.operationalStatusObj.name = 'Operational Status';
    this.operationalStatusObj.link = '/operationalStatus';
    this.tectonicObj.color = COLORS.RED;
    this.tectonicObj.name = 'Tectonic';
    this.tectonicObj.link = '/tectonic';
    this.kafkaObj.color = COLORS.RED;
    this.kafkaObj.name = 'Kafka';
    this.kafkaObj.link = '/kafka';
    this.fluentdObj.color = COLORS.RED;
    this.fluentdObj.name = 'Fluentd';
    this.fluentdObj.link = '/fluentd';
    this.elasticObj.color = COLORS.RED;
    this.elasticObj.name = 'Elastic';
    this.elasticObj.link = '/elastic';

    // Create an Observable that will publish a value on an interval
    // const secondsCounter = interval(5000);
    // // Subscribe to begin publishing values
    // this.sub = secondsCounter.subscribe(n => {
    //   console.log(`It's been ${n} *5 seconds since subscribing!`);
    //   tier1Service.getCassandraStatus().subscribe(result => {
    //     console.log(`Status ${result} get!`);
    //     this.cassandraObj.setColor(result);
    //   });
    //   tier1Service.getFunctionalHealthStatus().subscribe(result => {
    //     console.log(`Status ${result} get!`);
    //     this.functionalHealthObj.setColor(result);
    //   });
    //   tier1Service.getInfrastructureStatus().subscribe(result => {
    //     console.log(`Status ${result} get!`);
    //     this.infrastructureObj.setColor(result);
    //   });
    //   tier1Service.getSupportApplicationsStatus().subscribe(result => {
    //     console.log(`Status ${result} get!`);
    //     this.supportApplicationsObj.setColor(result);
    //   });
    //   tier1Service.getOperationalStatusStatus().subscribe(result => {
    //     console.log(`Status ${result} get!`);
    //     this.operationalStatusObj.setColor(result);
    //   });
    //
    //   tier1Service.getTectonicStatus().subscribe(result => {
    //     console.log(`Status ${result} get!`);
    //     this.tectonicObj.setColor(result);
    //   });
    //   tier1Service.getKafkaStatus().subscribe(result => {
    //     console.log(`Status ${result} get!`);
    //     this.kafkaObj.setColor(result);
    //   });
    //   tier1Service.getFluentdStatus().subscribe(result => {
    //     console.log(`Status ${result} get!`);
    //     this.fluentdObj.setColor(result);
    //   });
    //
    //   tier1Service.getElasticStatus().subscribe(result => {
    //     console.log(`Status ${result} get!`);
    //     this.elasticObj.setColor(result);
    //   });
    // });
  }

  ngOnInit() {
    this.tier1Service.getCassandraStatus().subscribe(data => {
      console.log(data);
      this.cassandraObj.color=data;
      console.log(555555555);
    });

    // ({
    //   next: data => {
    //     console.log(data);
    //     this.cassandraObj.color=data;
    //     console.log(555555555);
    //   },
    //   error: err => console.error('something wrong occurred: ' + err),
    //   complete: () => console.log('done'),
    // });
  }

  //
  // canDeactivate(): boolean {
  //   this.sub.unsubscribe();
  //   return true;
  // }

}
