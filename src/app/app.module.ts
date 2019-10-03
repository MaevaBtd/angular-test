import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';

const appRoutes: Routes = [
  {path:'appareils',component: AppareilViewComponent },
  {path:'auth',component: AuthComponent },
  {path:'',component: AppareilViewComponent },
  {path:'appareils/:id', component: SingleAppareilComponent}
]

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
    ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    MonPremierComponent, AppareilComponent, AuthComponent, AppareilViewComponent, SingleAppareilComponent 
    ],
  bootstrap:    [ 
    AppComponent 
    ],
  providers: [AppareilService, AuthService],
})
export class AppModule { }
