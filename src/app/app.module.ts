import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BilComponent } from './bil/bil.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    BilComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,

    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
