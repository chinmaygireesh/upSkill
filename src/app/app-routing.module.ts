import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainComponent } from './main/main.component';
import { StatusComponent } from './status/status.component';
import { StreamingPageComponent } from './streaming-page/streaming-page.component';

const routes: Routes = [ { path: 'login', component:LoginPageComponent},
  { 
    path: '', component:MainComponent,
    canActivateChild: [],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'streaming', component: StreamingPageComponent },
      { path: 'status', component: StatusComponent },
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
