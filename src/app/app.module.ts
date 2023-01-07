import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // components,directives,pipes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Modules
  ],
  providers: [
    //services
  ],
  exports: [
    //component,pipes,directives
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
