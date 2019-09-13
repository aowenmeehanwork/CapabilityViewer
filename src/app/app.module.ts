import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { AgGridModule } from 'ag-grid-angular';
import { PageHeaderComponent } from './page-header/page-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {TablePageComponent} from "./table-page/table-page.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {DetailViewerComponent} from "./detail-viewer/detail-viewer.component";
import {MatCardModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    LandingPageComponent,
    TablePageComponent,
    DetailViewerComponent,
    PageNotFoundComponent,
    CapabilityLeadViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MatExpansionModule,
    AppRoutingModule,
      MatCardModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
