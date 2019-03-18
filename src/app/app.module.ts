import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { LibretaComponent } from './libreta/libreta.component';
import { LibretaService } from './libreta/libreta.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LibretaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LibretaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
