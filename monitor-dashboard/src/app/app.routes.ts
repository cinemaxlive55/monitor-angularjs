import {Routes} from '@angular/router';

import {StarterViewComponent} from './views/appviews/starterview.component';
import {LoginComponent} from './views/appviews/login.component';
import {ProfileComponent} from './views/profile.component';

import {BlankLayoutComponent} from './components/common/layouts/blankLayout.component';
import {BasicLayoutComponent} from './components/common/layouts/basicLayout.component';
import {TopNavigationLayoutComponent} from './components/common/layouts/topNavigationLayout.component';
import {AuthGuardService} from './auth-guard.service';
import {Tier1Component} from './views/tier1/tier1.component';
import {CassandraComponent} from './views/tier2/cassandra.component';
import {ElasticComponent} from './views/tier2/elastic.component';
import {FluentdComponent} from './views/tier2/fluentd.component';
import {KafkaComponent} from './views/tier2/kafka.component';
import {OthersComponent} from './views/tier2/others.component';
import {TectonicComponent} from './views/tier2/tectonic.component';
import {FunctionalHealthComponent} from './views/tier2/functionalHealth.component';
import {CanDeactivateGuard} from "app/can-deactivate-guard.service";
import {OperationalStatusComponent} from "./views/tier2/operationalStatus.component";
import {InfrastructureHealthComponent} from "./views/tier2/infrastructureHealth.component";

export const ROUTES: Routes = [
  // Main redirect
  {path: '', redirectTo: 'login', pathMatch: 'full'},

  // App views
  {
    path: '',
    component: BasicLayoutComponent,
//    loadChildren: 'app/components/common/layouts/basicLayout.component'#BasicLayoutComponent',
    canActivate: [AuthGuardService],
    canLoad: [AuthGuardService],
    children: [
      {
        path: 'tier1', component: Tier1Component,
        canDeactivate: [CanDeactivateGuard],
        children: [
          {path: 'functionalHealth', component: FunctionalHealthComponent},
          {path: 'cassandra', component: CassandraComponent}
          // {path: 'testVincent', component: DashboardtestComponent},

        ]
      },
    ]
  },
  {
    path: '',
    component: BasicLayoutComponent,
//    loadChildren: 'app/components/common/layouts/basicLayout.component'#BasicLayoutComponent',
    canActivate: [AuthGuardService],
    canLoad: [AuthGuardService],
    children: [
      {path: 'cassandra', component: CassandraComponent}
      // {path: 'testVincent', component: DashboardtestComponent},

    ]
  },
  {
    path: '',
    component: BasicLayoutComponent,
//    loadChildren: 'app/components/common/layouts/basicLayout.component'#BasicLayoutComponent',
    canActivate: [AuthGuardService],
    canLoad: [AuthGuardService],
    children: [
      {path: 'tectonic', component: TectonicComponent}
      // {path: 'testVincent', component: DashboardtestComponent},

    ]
  },
  {
    path: '',
    component: BasicLayoutComponent,
    canActivate: [AuthGuardService],
    canLoad: [AuthGuardService],
    children: [
      {path: 'kafka', component: KafkaComponent},
    ]
  },
  {
    path: '',
    component: BasicLayoutComponent,
    canActivate: [AuthGuardService],
    canLoad: [AuthGuardService],
    children: [
      {path: 'fluentd', component: FluentdComponent},
    ]
  },
  {
    path: '',
    component: BasicLayoutComponent,
    canActivate: [AuthGuardService],
    canLoad: [AuthGuardService],
    children: [
      {path: 'elastic', component: ElasticComponent},
    ]
  },
  {
    path: '',
    component: BasicLayoutComponent,
    canActivate: [AuthGuardService],
    canLoad: [AuthGuardService],
    children: [
      {path: 'others', component: OthersComponent},
    ]
  },
  {
    path: '',
    component: BasicLayoutComponent,
    canActivate: [AuthGuardService],
    canLoad: [AuthGuardService],
    children: [
      {path: 'functionalHealth', component: FunctionalHealthComponent},
    ]
  }, {
    path: '',
    component: BasicLayoutComponent,
    canActivate: [AuthGuardService],
    canLoad: [AuthGuardService],
    children: [
      {path: 'operationalStatus', component: OperationalStatusComponent},
    ]
  }, {
    path: '',
    component: BasicLayoutComponent,
    canActivate: [AuthGuardService],
    canLoad: [AuthGuardService],
    children: [
      {path: 'infrastructureHealth', component: InfrastructureHealthComponent},
    ]
  }, {
    path: '', component: BasicLayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {path: 'profile', component: ProfileComponent}
    ]
  },
  {
    path: '', component: BasicLayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {path: 'starterview/:personID', component: StarterViewComponent}
    ]
  },
  {
    path: '', component: BlankLayoutComponent,
    children: [
      {path: 'login', component: LoginComponent},
    ]
  },

  // Handle all other routes
  {path: '**', redirectTo: 'starterview'}
];
