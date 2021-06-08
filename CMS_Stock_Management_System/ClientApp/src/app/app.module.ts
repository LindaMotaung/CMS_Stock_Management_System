import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ListVehicleComponent } from "./vehicle/list-vehicle.component";
import { PageNotFoundComponent } from "./error/page-not-found.component";
import { CreateVehicleComponent } from "./create-vehicle/create-vehicle.component";
import { CreateVehicleCanDeactivateService } from "./create-vehicle/create-vehicle-can-deactivate-guard.service";
import { VehicleDetailsComponent } from './vehicle/vehicle-details/vehicle-details.component';
import { VehicleService } from "./services/vehicle.service";
import { VehicleFilterPipe } from "./vehicle/vehicle-filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ListVehicleComponent,
    PageNotFoundComponent,
    CreateVehicleComponent,
    VehicleDetailsComponent,
    VehicleFilterPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [CreateVehicleCanDeactivateService, VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
