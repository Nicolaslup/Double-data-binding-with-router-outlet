import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { Component2Component } from './component2/component2.component';
import { FormsModule } from '@angular/forms';
import { Component1Component } from './component1/component1.component';


@NgModule({
  declarations: [
    AppComponent, Component2Component, Component1Component
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
