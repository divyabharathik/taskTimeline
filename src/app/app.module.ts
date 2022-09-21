import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelineComponentComponent } from './timeline-component/timeline-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { DateServiceService } from './services/date-service.service';
@NgModule({
  declarations: [
    AppComponent,
    TimelineComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [DateServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
