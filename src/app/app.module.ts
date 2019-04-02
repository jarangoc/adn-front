import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LibretaComponent } from './libreta/libreta.component';
import { LibretaService } from './libreta/libreta.service';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ParqueaderoComponent } from './parqueadero/parqueadero.component';
import { FormsModule} from '@angular/forms'
import { ParqueaderoService } from './parqueadero/parqueadero.service';


const routes:Routes =[
  {path:'',redirectTo:'/parqueadero',pathMatch: 'full'},
  {path:'libreta', component: LibretaComponent},
  {path:'parqueadero', component:ParqueaderoComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LibretaComponent,
    ParqueaderoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LibretaService,ParqueaderoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
