import { Component, OnInit, NgZone } from '@angular/core';
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
  constructor(private tier1Service: Tier1Service, private zone: NgZone) {
    this.functionalHealthObj.color = COLORS.DEFAULT;
    this.functionalHealthObj.name = 'Functional Health';
    this.functionalHealthObj.link = '/functionalHealth';
    this.cassandraObj.color = COLORS.DEFAULT;
    this.cassandraObj.name = 'Cassandra';
    this.cassandraObj.link = '/cassandra';
    this.infrastructureObj.color = COLORS.DEFAULT;
    this.infrastructureObj.name = 'Infrastructure';
    this.infrastructureObj.link = '/infrastructureHealth';
    this.supportApplicationsObj.color = COLORS.DEFAULT;
    this.supportApplicationsObj.name = 'Support Application';
    this.supportApplicationsObj.link = 'infrastructure';
    this.operationalStatusObj.color = COLORS.DEFAULT;
    this.operationalStatusObj.name = 'Operational Status';
    this.operationalStatusObj.link = '/operationalStatus';
    this.tectonicObj.color = COLORS.DEFAULT;
    this.tectonicObj.name = 'Tectonic';
    this.tectonicObj.link = '/tectonic';
    this.kafkaObj.color = COLORS.DEFAULT;
    this.kafkaObj.name = 'Kafka';
    this.kafkaObj.link = '/kafka';
    this.fluentdObj.color = COLORS.DEFAULT;
    this.fluentdObj.name = 'Fluentd';
    this.fluentdObj.link = '/fluentd';
    this.elasticObj.color = COLORS.DEFAULT;
    this.elasticObj.name = 'Elastic';
    this.elasticObj.link = '/elastic';
  }

  ngOnInit() {
    this.tier1Service.getCassandraStatus().subscribe({
      next: data => {
        this.zone.run(() => {
          this.cassandraObj.setColor(data);
        });
        console.log(`Cassandra color status ${data} get!`);
      },
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });

    this.tier1Service.getFunctionalHealthStatus().subscribe({
      next: data => {
        this.zone.run(() => {
          this.functionalHealthObj.setColor(data);
        });
      },
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });

    this.tier1Service.getInfrastructureStatus().subscribe({
      next: data => {
        this.zone.run(() => {
          this.infrastructureObj.setColor(data);
        });
      },
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });

    this.tier1Service.getSupportApplicationsStatus().subscribe({
      next: data => {
        this.zone.run(() => {
          this.supportApplicationsObj.setColor(data);
        });
      },
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });

    this.tier1Service.getOperationalStatusStatus().subscribe({
      next: data => {
        this.zone.run(() => {
          this.operationalStatusObj.setColor(data);
        });
      },
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });

    this.tier1Service.getTectonicStatus().subscribe({
      next: data => {
        this.zone.run(() => {
          this.tectonicObj.setColor(data);
        });
      },
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });

    this.tier1Service.getKafkaStatus().subscribe({
      next: data => {
        this.zone.run(() => {
          this.kafkaObj.setColor(data);
        });
      },
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });

    this.tier1Service.getFluentdStatus().subscribe({
      next: data => {
        this.zone.run(() => {
          this.fluentdObj.setColor(data);
        });
      },
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });

    this.tier1Service.getElasticStatus().subscribe({
      next: data => {
        this.zone.run(() => {
          this.elasticObj.setColor(data);
        });
      },
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });
  }

}
