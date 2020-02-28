import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

// Chart.js Angular 2 Directive by Valor Software (npm)
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { FlotModule } from '../../components/charts/flotChart';
import { IboxtoolsModule } from '../../components/common/iboxtools/iboxtools.module';
import { PeityModule } from '../../components/charts/peity';
import { SparklineModule } from '../../components/charts/sparkline';
import { JVectorMapModule } from '../../components/map/jvectorMap';
import { CassandraComponent } from "./cassandra.component";
import { ElasticComponent } from "./elastic.component";
import { FluentdComponent } from "./fluentd.component";
import { KafkaComponent } from "./kafka.component";
import { OthersComponent } from "./others.component";
import { TectonicComponent } from "./tectonic.component";
import {FunctionalHealthComponent} from "./functionalHealth.component";
import {OperationalStatusComponent} from "./operationalStatus.component";
import {InfrastructureHealthComponent} from "./infrastructureHealth.component";


@NgModule({
    declarations: [CassandraComponent,TectonicComponent,KafkaComponent,FluentdComponent,ElasticComponent,OthersComponent,FunctionalHealthComponent,OperationalStatusComponent,InfrastructureHealthComponent],
    imports     : [BrowserModule,ChartsModule, FlotModule,IboxtoolsModule,PeityModule,SparklineModule,JVectorMapModule],
    exports     : [CassandraComponent,TectonicComponent,KafkaComponent,FluentdComponent,ElasticComponent,OthersComponent,FunctionalHealthComponent,OperationalStatusComponent,InfrastructureHealthComponent],
})

export class DashboardsModule {}
