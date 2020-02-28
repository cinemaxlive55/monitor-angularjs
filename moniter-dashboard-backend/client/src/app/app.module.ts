import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {AuthGuardService} from './auth-guard.service';
import {AuthService} from './auth.service';

import {ROUTES} from './app.routes';
import {AppComponent} from './app.component';

// App views
import {DashboardsModule} from './views/tier2/dashboards.module';
import {AppviewsModule} from './views/appviews/appviews.module';

// App modules/components
import {LayoutsModule} from './components/common/layouts/layouts.module';
import { UserRoleService } from './services/user-role.service';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryUserService } from './serverData/in-memory-user.service';
import { Tier1Component } from './views/tier1/tier1.component';
import { ColorBlockComponent } from './components/color-block/color-block.component';
import { PromethueusService } from "./services/prometheus.service";
import { CanDeactivateGuard } from "app/can-deactivate-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    Tier1Component,
    ColorBlockComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DashboardsModule,
    LayoutsModule,
    AppviewsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryUserService, { dataEncapsulation: false }
    ),
    RouterModule.forRoot(ROUTES)

  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},AuthGuardService,AuthService,UserRoleService,PromethueusService,CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
