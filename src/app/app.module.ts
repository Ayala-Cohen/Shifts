import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntegrationsComponent } from './Components/integrations/integrations.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { WardComponent } from './Components/ward/ward.component';
import { ChangeColorDirective } from './Directives/change-color.directive';
import { DirectorDetailsComponent } from './Components/director-details/director-details.component';
import { BusinessDetailsComponent } from './Components/business-details/business-details.component';
import { WardsAndShiftsComponent } from './Components/wards-and-shifts/wards-and-shifts.component';
import { NavComponent } from './Components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    IntegrationsComponent,
    EmployeeComponent,
    WardComponent,
    ChangeColorDirective,
    DirectorDetailsComponent,
    BusinessDetailsComponent,
    WardsAndShiftsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
