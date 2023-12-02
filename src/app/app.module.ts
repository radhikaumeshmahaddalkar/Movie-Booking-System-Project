import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MovieDescriptionComponent } from './components/movie-description/movie-description.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CommanPipe } from './shared/custom-pipe/comman.pipe';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './crud/dashboard/dashboard.component';
import { RegisterEditComponent } from './crud/register-edit/register-edit.component';
import { AddmovieComponent } from './components/addmovie/addmovie.component';
import { MovieEditComponent } from './crud/movie-edit/movie-edit.component';
import { MovieDashboardComponent } from './crud/movie-dashboard/movie-dashboard.component';
import { BookingComponent } from './components/booking/booking.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PageNotFoundComponent,
    MovieDescriptionComponent,
    AboutUsComponent,
    ContactComponent,
    LoginComponent,
    RegistrationComponent,
    CommanPipe,
    AdminDashboardComponent,
    DashboardComponent,
    RegisterEditComponent,
    AddmovieComponent,
    MovieEditComponent,
    MovieDashboardComponent,
    BookingComponent
    
  ],

  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    OrderModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
