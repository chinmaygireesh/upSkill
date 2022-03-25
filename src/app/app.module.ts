import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import {MatTreeModule} from '@angular/material/tree';
import { ModelFunctionComponent } from './model-function/model-function.component';
import { StreamingPageComponent } from './streaming-page/streaming-page.component';
import { SidenavRightComponent } from './sidenav-right/sidenav-right.component';
import { StatusComponent } from './status/status.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { MybyteLandingPageComponent } from './mybyte-landing-page/mybyte-landing-page.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    ModelFunctionComponent,
    StreamingPageComponent,
    SidenavRightComponent,
    StatusComponent,
    LoginPageComponent,
    MainComponent,
    FooterComponent,
    MybyteLandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    NgbModule,
    MatInputModule,
    MatCardModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
