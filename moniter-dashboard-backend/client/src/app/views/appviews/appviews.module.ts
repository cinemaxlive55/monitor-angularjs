import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule} from '@angular/forms';

import {StarterViewComponent} from "./starterview.component";
import {LoginComponent} from "./login.component";
import {ProfileComponent} from "../profile.component";

import {PeityModule } from '../../components/charts/peity';
import {SparklineModule } from '../../components/charts/sparkline';

@NgModule({
  declarations: [
    StarterViewComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PeityModule,
    FormsModule,
    SparklineModule
  ],
  exports: [
    StarterViewComponent,
    LoginComponent,
    ProfileComponent
  ],
})

export class AppviewsModule {
}
