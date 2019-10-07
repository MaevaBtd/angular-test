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
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';

const appRoutes: Routes = [
  {path:'appareils',canActivate: [AuthGuard], component: AppareilViewComponent },
  {path:'auth', component: AuthComponent },
  {path:'', component: AppareilViewComponent },
  {path:'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent},
  {path:'not-found', component: FourOhFourComponent},
  {path:'**', redirectTo: '/not-found'}
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
    MonPremierComponent, AppareilComponent, AuthComponent, AppareilViewComponent, SingleAppareilComponent, FourOhFourComponent, EditAppareilComponent 
    ],
  bootstrap:    [ 
    AppComponent 
    ],
  providers: [AppareilService, AuthService, AuthGuard],
})
export class AppModule { }
