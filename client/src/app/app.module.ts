////===== Angular Modules======
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//======VENDORS=======
import { FlashMessagesModule } from 'angular2-flash-messages/module/module';

//====My Modules====
import { AppRoutingModule } from './app-routing.module';

//=====My Components=====
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

//===== My Services =====
import { AuthService } from './services/auth.service';
import { AuthGuard } from './Guards/auth.guard';
import { NotAuthGuard } from './Guards/notAuth.guard';
import { BlogComponent } from './components/blog/blog.component';
import { BlogService } from './services/blog.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard,
    NotAuthGuard,
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
