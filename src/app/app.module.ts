import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { VilleComponent } from './Views/ville/ville.component';
import { EspaceVertComponent } from './Views/espace-vert/espace-vert.component';
import { AccueilComponent } from './Views/accueil/accueil.component';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import { MapComponent } from './Views/map/map.component';
import {ButtonModule} from "primeng/button";
import {GMapModule} from 'primeng/gmap';
import { InscriptionComponent } from './Views/inscription/inscription.component';
import { LoggingComponent } from './Views/logging/logging.component';
import { NavBareComponent } from './Views/nav-bare/nav-bare.component';
import {PaginatorModule} from "primeng/paginator";
import { EspaceVertDetaillComponent } from './Views/espace-vert-detaill/espace-vert-detaill.component';
import { EspaceVertAdminComponent } from './Views/admin/espace-vert-admin/espace-vert-admin.component';
import { VilleAdminComponent } from './Views/admin/ville-admin/ville-admin.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './Views/header/header.component';
import { BodyACComponent } from './Views/body-ac/body-ac.component';
import { AccueilAdminComponent } from './Views/admin/accueil-admin/accueil-admin.component';

const appRoutes: Routes = [
  {path: 'ville' , component: VilleComponent},
  {path: 'espace-vert' , component: EspaceVertComponent},
  {path: 'maps' , component: MapComponent},
  {path: '' , redirectTo: '/header', pathMatch: 'full'},
  {path: 'accueil' ,component: AccueilComponent},
  {path: 'inscription' ,component: InscriptionComponent},
  {path: 'logging' ,component: LoggingComponent},
  {path: 'espace-vertDetaill' ,component: EspaceVertDetaillComponent},
  {path: 'villeAdmine' ,component: VilleAdminComponent},
  {path: 'EspaceVertAdmine' ,component: EspaceVertAdminComponent},
  {path: 'header' ,component: HeaderComponent},
  {path: 'BodyAC' ,component: BodyACComponent},
  {path: 'acueilAdmine' ,component: AccueilAdminComponent},

  ]
@NgModule({
  declarations: [
    AppComponent,
    VilleComponent,
    EspaceVertComponent,
    AccueilComponent,
    MapComponent,
    InscriptionComponent,
    LoggingComponent,
    NavBareComponent,
    EspaceVertDetaillComponent,
    EspaceVertAdminComponent,
    VilleAdminComponent,
    HeaderComponent,
    BodyACComponent,
    AccueilAdminComponent,

  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        LeafletModule,
        FormsModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
