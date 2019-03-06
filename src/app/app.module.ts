import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PartyComponent } from './components/party/party.component';
import { InfoService } from './providers/info/info.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PartyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    InfoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
