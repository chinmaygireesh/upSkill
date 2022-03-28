import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainComponent } from './main/main.component';
import { MybyteLandingPageComponent } from './mybyte-landing-page/mybyte-landing-page.component';
import { RecordScreenComponent } from './record-screen/record-screen.component';
import { SearchVideosComponent } from './search-videos/search-videos.component';
import { StatusComponent } from './status/status.component';
import { StreamingPageComponent } from './streaming-page/streaming-page.component';

const routes: Routes = [ { path: 'login', component:LoginPageComponent},
  { 
    path: '', component:MainComponent,
    canActivateChild: [],
    children: [
      { path: '', component: MybyteLandingPageComponent },
      { path: 'recordScreen', component: RecordScreenComponent },
      { path: 'searchVideos', component: SearchVideosComponent },
      { path: 'status', component: StatusComponent },
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
